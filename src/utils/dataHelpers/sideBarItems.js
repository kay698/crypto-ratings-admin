import Btc from "../../assets/svgs/bitcoin.svg";
import Giftcard from "../../assets/svgs/ticket-star.svg";
import People from "../../assets/svgs/people.svg";

export const SideBarItems = [
  {
    title: "Giftcards",
    to: "/",
    icon: Giftcard,
  },
  {
    title: "Crypto",
    to: "/crypto",
    icon: Btc,
  },
  {
    title: "Customers",
    to: "/customers",
    icon: People,
  },
];
