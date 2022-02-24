export const giftCards = [
  "Itunes",
  "Apple",
  "Steam (USA, UK, CANADA, AUSTRALIA, NZD, CHF, EURO)",
  "Google play (USA, UK, EURO, NZD, CAD, CHF, AUD)",
  "Amazon",
  "Amex",
  "Nordstrom ",
  "Vanilla",
  "Macy",
  "Ebay",
  "RazerGold ",
  "Nike",
  "Xbox",
  "Sephora",
];

export const currencies = [
  { sign: "/ $", title: "USD" },
  { sign: "/ €", title: "EUROS" },
  { sign: "/ £", title: "POUNDS" },
];

export const getCurrncy = (cur) => {
  let currency;
  if (cur === "USD") {
    currency = "/ $";
  } else if (cur === "EUROS") {
    currency = "/ €";
  } else {
    currency = "/ £";
  }
  return currency;
};
const crypto = [];
