// import { baseone_logo } from "@site/static/img";
import baseone_logo from "@/static/img/logo.svg";
import virtualAccountIcon from "@/static/img/virtual-account-icon.svg";

// import _bb_color from "./static/img/baseone-logomark-coloured.png";
// import doc_logo from "./static/img/docusaurus-social-card.jpg";

export const SITE_TITLE = "BaseOne Documentation";
export const API_REFERENCE_EMOJI = "👨‍💻";
export const GUIDES_EMOJI = "📚";

export const PRODUCT_INFO = {
  Accounts: {
    title: "Accounts",
    copyText:
      "Give your customers real bank account numbers for easy sending and receiving of money.",
    // productIcon: require("/img/baseone-logomark-coloured.png").default,
    productIcon:
      "https://api.iconify.design/mdi:wallet-outline.svg?color=%232c6eec",
    href: "/docs/virtual-accounts",
  },
  KYC: {
    title: "KYC",
    copyText:
      "Perform secure and fast identity checks for smooth onboarding and customer verification.",
    // productIcon: require("/img/baseone-logomark-coloured.png").default,
    productIcon:
      "https://api.iconify.design/mdi:shield-check-outline.svg?color=%232c6eec",
    href: "/docs/virtual-accounts",
  },
  Cards: {
    title: "Cards",
    copyText:
      "Create and manage customer cards. Perfect for online, in-app, and global purchases.",
    // productIcon: require("/img/baseone-logomark-coloured.png").default,
    productIcon:
      "https://api.iconify.design/mdi:credit-card-outline.svg?color=%232c6eec",
    href: "/docs/cards/",
  },
  Payouts: {
    title: "Payouts",
    copyText:
      "Send money easily to individuals or groups effortlessly, for refunds, salaries, or loans.",
    // productIcon: require("/img/baseone-logomark-coloured.png").default,
    productIcon:
      "https://api.iconify.design/mdi:cash-multiple.svg?color=%232c6eec",
    // productIcon:
    //   "https://api.iconify.design/mdi:bank-transfer.svg?color=%232c6eec",
    href: "/docs/payouts",
  },
};
