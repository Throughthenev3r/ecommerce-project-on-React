export function formatMoney(cents: number) {
  if (typeof cents !== "number" || isNaN(cents)) {
    return "$0.00";
  }

  const isNegative = cents < 0;
  const absoluteCents = Math.abs(cents);
  const formatted = `$${(absoluteCents / 100).toFixed(2)}`;

  return isNegative ? `-${formatted}` : formatted;
}
