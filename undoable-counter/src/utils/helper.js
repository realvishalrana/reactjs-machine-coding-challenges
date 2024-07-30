export const nFormatter = (num) => {
  if (num === null || num === undefined) return "0";

  num = parseFloat(num?.toString().replace(/[^0-9.-]/g, ""));
  if (isNaN(num)) return "0";

  const suffixes = ["", "K", "M", "B", "T", "P", "E"];
  let index = 0;

  const isNegative = num < 0;
  num = Math.abs(num);

  while (num >= 1000 && index < suffixes.length - 1) {
    num /= 1000;
    index++;
  }

  const formattedNumber =
    (isNegative ? "-" : "") +
    num.toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
    suffixes[index];

  return formattedNumber;
};
