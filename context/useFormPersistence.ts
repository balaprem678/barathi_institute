'use client';

import { useEffect, useState, useRef } from 'react';
import { getFormData, saveFormData } from '@/lib/persistence';

/**
 * Custom hook to persist form state to localStorage
 * @param formData - Current form state
 * @param setFormData - State setter function
 * @param fieldsToPersist - List of field names to persist
 * @param mapping - Optional mapping of stored keys to form keys (e.g., { city: 'location' })
 */
export function useFormPersistence(
    formData: any,
    setFormData: (data: any) => void,
    fieldsToPersist: string[],
    options: {
        mapping?: Record<string, string>,
        remoteSyncUrl?: string
    } = {}
) {
    const { mapping = {}, remoteSyncUrl } = options;
    const [hasLoaded, setHasLoaded] = useState(false);
    const lastSavedData = useRef<string>('');
    const lastRemoteSyncData = useRef<string>('');

    // Initial load from storage
    useEffect(() => {
        const storedData = getFormData();
        if (storedData) {
            const transformedData: Record<string, any> = {};

            fieldsToPersist.forEach(field => {
                if (storedData[field] !== undefined && storedData[field] !== '') {
                    transformedData[field] = storedData[field];
                }
            });

            Object.entries(mapping).forEach(([storedKey, formKey]) => {
                if (storedData[storedKey] !== undefined && storedData[storedKey] !== '') {
                    transformedData[formKey] = storedData[storedKey];
                }
            });

            if (Object.keys(transformedData).length > 0) {
                setFormData((prev: any) => ({
                    ...prev,
                    ...transformedData
                }));
            }
        }
        setHasLoaded(true);
    }, []);

    // Save to storage and Remote Sync on change (with debounce)
    useEffect(() => {
        if (!hasLoaded) return;

        const timer = setTimeout(async () => {
            const dataToSave: Record<string, any> = {};

            fieldsToPersist.forEach(field => {
                if (formData[field] !== undefined && formData[field] !== '') {
                    dataToSave[field] = formData[field];
                }
            });

            Object.entries(mapping).forEach(([storedKey, formKey]) => {
                if (formData[formKey] !== undefined && formData[formKey] !== '') {
                    dataToSave[storedKey] = formData[formKey];
                }
            });

            const stringified = JSON.stringify(dataToSave);
            
            // 1. Local Persistence
            if (stringified !== lastSavedData.current) {
                if (Object.keys(dataToSave).length > 0) {
                    lastSavedData.current = stringified;
                    const existing = getFormData() || {};
                    saveFormData({ ...existing, ...dataToSave });
                }
            }

            // 2. Remote Auto-save (Remote Sync)
            if (remoteSyncUrl && stringified !== lastRemoteSyncData.current) {
                // Minimum requirements for remote sync to avoid creating a lot of empty records
                // At least one of: name, email, or phone should be present
                const hasIdentity = dataToSave.name || dataToSave.email || dataToSave.phone || 
                                    formData.name || formData.email || formData.phone;

                if (hasIdentity) {
                    lastRemoteSyncData.current = stringified;
                    try {
                        console.log(`[Auto-save] Syncing to ${remoteSyncUrl}...`);
                        await fetch(remoteSyncUrl, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ ...formData, isSubmit: false }),
                        });
                    } catch (error) {
                        console.error('[Auto-save] Remote sync failed:', error);
                    }
                }
            }
        }, 1000); // 1s debounce for remote sync to be less aggressive

        return () => clearTimeout(timer);
    }, [formData, fieldsToPersist, mapping, hasLoaded, remoteSyncUrl]);
}
