export const transformData = (inputDate: string): string => {
  const parts = inputDate.split("-");
  if (parts.length !== 3) {
    return "";
  }
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  return `${day}.${month}.${year}`;
};
