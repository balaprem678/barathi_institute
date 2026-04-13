/**
 * Utility for validating email format
 */
export const validateEmail = (email: string): boolean => {
  if (!email) return false;
  // Basic but robust email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

/**
 * Normalizes a phone number by removing all non-numeric characters
 * and stripping any leading 0 or +91 prefixes to get the core 10 digits.
 */
export const normalizePhone = (phone: string): string => {
  if (!phone) return '';
  
  // Remove all non-digits
  let digits = phone.replace(/\D/g, '');
  
  // If it starts with 91 and has 12 digits, strip the 91
  if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.slice(2);
  }
  
  // If it starts with 0 and has 11 digits, strip the 0
  if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.slice(1);
  }
  
  return digits;
};

/**
 * Validates an Indian phone number
 * Should be exactly 10 digits after normalization and start with 6, 7, 8, or 9
 */
export const validateIndianPhone = (phone: string): boolean => {
  const normalized = normalizePhone(phone);
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(normalized);
};
