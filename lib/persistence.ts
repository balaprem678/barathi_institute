/**
 * Secure Form Persistence Utility
 * Handles obfuscation and expiry of sensitive form data in localStorage
 */

const STORAGE_KEY = 'bfi_user_data';
const EXPIRY_DAYS = 30;

interface PersistentData {
    data: any;
    timestamp: number;
}

/**
 * Encodes a string to Base64 (simple obfuscation, Unicode-safe)
 */
const encode = (str: string): string => {
    try {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
            return String.fromCharCode(parseInt(p1, 16));
        }));
    } catch (e) {
        return str;
    }
};

/**
 * Decodes a Base64 string (Unicode-safe)
 */
const decode = (str: string): string => {
    try {
        return decodeURIComponent(atob(str).split('').map((c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    } catch (e) {
        return str;
    }
};

/**
 * Saves form data to localStorage with obfuscation and timestamp
 */
export const saveFormData = (data: Record<string, any>) => {
    if (typeof window === 'undefined') return;

    try {
        const persistentData: PersistentData = {
            data,
            timestamp: Date.now()
        };
        const stringified = JSON.stringify(persistentData);
        const obfuscated = encode(stringified);
        localStorage.setItem(STORAGE_KEY, obfuscated);
    } catch (error) {
        console.error('Error saving form data:', error);
    }
};

/**
 * Retrieves form data from localStorage and checks for expiry
 */
export const getFormData = (): Record<string, any> | null => {
    if (typeof window === 'undefined') return null;

    try {
        const obfuscated = localStorage.getItem(STORAGE_KEY);
        if (!obfuscated) return null;

        const decoded = decode(obfuscated);
        const persistentData: PersistentData = JSON.parse(decoded);

        // Check for expiry (30 days)
        const ageInDays = (Date.now() - persistentData.timestamp) / (1000 * 60 * 60 * 24);
        if (ageInDays > EXPIRY_DAYS) {
            localStorage.removeItem(STORAGE_KEY);
            return null;
        }

        return persistentData.data;
    } catch (error) {
        console.error('Error retrieving form data:', error);
        return null;
    }
};

/**
 * Clears persistent form data
 */
export const clearFormData = () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
};
