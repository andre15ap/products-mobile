export const convertToMoney = (value: number) => {
  const newValue = parseFloat(value.toString()).toFixed(2);
  return newValue.replace(/\./, ',');
};
