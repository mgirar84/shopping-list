/**
 * Check if the given string contains only letters and spaces
 *
 * @param {string} itemName the item to check
 * @returns {boolean} true if the item is valid
 */
export const isItemValid = (itemName: string): boolean => {
  const textRegex = /^[a-zA-Z\s]+$/;
  return textRegex.test(itemName);
};
