const getFirstMissingLetter = (fullName: string): string => {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  if (!fullName) return '-';
  const nameLower = fullName.toLowerCase();

  for (const letter of ALPHABET) {
    if (!nameLower.includes(letter)) {
      return letter.toUpperCase();
    }
  }
  return '-';
};

export default getFirstMissingLetter;
