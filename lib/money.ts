export function priceToPence(price: string) {
  const numeric = Number(price.replace(/[^0-9.]/g, ""));
  return Math.round(numeric * 100);
}

export function formatPounds(pence: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(pence / 100);
}
