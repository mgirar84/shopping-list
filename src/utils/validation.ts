export const isStringValid = (itemName: string) => {
  const textRegex = /^[a-zA-Z\s]+$/; // Regex allowing only letters and spaces
  return textRegex.test(itemName.trim());
};
