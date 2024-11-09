import {
  HiOutlineDocument,
  HiOutlineIdentification,
  HiOutlineAnnotation,
  HiOutlineCreditCard,
  HiOutlineHand,
  HiOutlineUser,
  HiOutlineCash,
  HiOutlineCrown,
} from "react-icons/hi";

const steps = [
  {
    step: 1,
    title: "Asset Listing",
    Icon: HiOutlineDocument,
    backContent: "Details about asset listing.",
    cardColor: "bg-white",
  },
  {
    step: 2,
    title: "KYC Completion",
    Icon: HiOutlineIdentification,
    backContent: "Complete your KYC to proceed.",
    cardColor: "bg-blue-100",
  },
  {
    step: 3,
    title: "Expression of Interest",
    Icon: HiOutlineAnnotation,
    backContent: "Express your interest in the asset.",
    cardColor: "bg-white",
  },
  {
    step: 4,
    title: "Payment Completion",
    Icon: HiOutlineCreditCard,
    backContent: "Complete the payment for your investment.",
    cardColor: "bg-blue-100",
  },
  {
    step: 5,
    title: "Execution of Legal Documents",
    Icon: HiOutlineHand,
    backContent: "Sign and execute necessary documents.",
    cardColor: "bg-blue-200",
  },
  {
    step: 6,
    title: "Investor Onboard",
    Icon: HiOutlineUser,
    backContent: "Welcome to the investor portal.",
    cardColor: "bg-gray-200",
  },
  {
    step: 7,
    title: "Investor Receives Fixed Payouts",
    Icon: HiOutlineCash,
    backContent: "Receive payouts as per schedule.",
    cardColor: "bg-blue-200",
  },
  {
    step: 8,
    title: "Assured Exit at a Premium",
    Icon: HiOutlineCrown,
    backContent: "Exit with a premium return on investment.",
    cardColor: "bg-gray-200",
  },
];

export default steps;
