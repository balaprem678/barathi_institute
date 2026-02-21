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
    mapping: Record<string, string> = {}
) {
    const [hasLoaded, setHasLoaded] = useState(false);
    const lastSavedData = useRef<string>('');

    // Initial load from storage
    useEffect(() => {
        const storedData = getFormData();
        if (storedData) {
            const transformedData: Record<string, any> = {};

            // Handle direct fields
            fieldsToPersist.forEach(field => {
                if (storedData[field] !== undefined && storedData[field] !== '') {
                    transformedData[field] = storedData[field];
                }
            });

            // Handle mapped fields (e.g., if storage has 'city', put it in 'location')
            Object.entries(mapping).forEach(([storedKey, formKey]) => {
                if (storedData[storedKey] !== undefined && storedData[storedKey] !== '') {
                    transformedData[formKey] = storedData[storedKey];
                }
            });

            if (Object.keys(transformedData).length > 0) {
                console.log('[Autofill] Loading stored data:', transformedData);
                setFormData((prev: any) => ({
                    ...prev,
                    ...transformedData
                }));
            }
        }
        setHasLoaded(true);
    }, []);

    // Save to storage on change (with debounce)
    useEffect(() => {
        if (!hasLoaded) return;

        const timer = setTimeout(() => {
            const dataToSave: Record<string, any> = {};

            fieldsToPersist.forEach(field => {
                // Only save if it has a value, to avoid overwriting valid data in other forms with empty strings
                if (formData[field] !== undefined && formData[field] !== '') {
                    dataToSave[field] = formData[field];
                }
            });

            // Also save mapped fields back to their original storage keys for other forms
            Object.entries(mapping).forEach(([storedKey, formKey]) => {
                if (formData[formKey] !== undefined && formData[formKey] !== '') {
                    dataToSave[storedKey] = formData[formKey];
                }
            });

            const stringified = JSON.stringify(dataToSave);
            if (stringified === lastSavedData.current) return;

            if (Object.keys(dataToSave).length > 0) {
                console.log('[Autofill] Saving data:', dataToSave);
                lastSavedData.current = stringified;
                const existing = getFormData() || {};

                // Deep merge or just shallow merge? PersistentData only has 'data' so shallow is fine
                saveFormData({ ...existing, ...dataToSave });
            }
        }, 500); // 500ms debounce

        return () => clearTimeout(timer);
    }, [formData, fieldsToPersist, mapping, hasLoaded]);
}
