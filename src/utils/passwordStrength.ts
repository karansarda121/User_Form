export const calculatePasswordStrength = (password: string): string => {
  const hasNumbers = /\d/.test(password);
  const hasAlphabets = /[a-zA-Z]/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (hasNumbers && hasAlphabets && hasSpecialChars) {
    return "Strong";
  } else if (hasNumbers && hasAlphabets) {
    return "Moderate";
  } else {
    return "Weak";
  }
};
