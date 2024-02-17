export const toTittleCase = (str: string) => {
  return str.replace(/\b\w/g, (char) => {
    return char.toUpperCase();
  });
};

export const removeHifen = (str: string) => {
  return str.replace(/-/g, " ");
};

export const fetchPathName = (str: string) => {
  const newString = str.replace(/-/g, " ");
  return toTittleCase(newString);
};
