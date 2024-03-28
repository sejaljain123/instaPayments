import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe, SiPaytm } from "react-icons/si";

export const NAVBAR_HEIGHT = 60;
export const NAVBAR_HEIGHT_MOBILE = 90;

export const UPI_OPTIONS = [
    {
        id: 1,
        name: 'Google Pay',
        icon: FaGooglePay
    },
    {
        id: 2,
        name: 'PhonePe',
        icon: SiPhonepe

    },
    {
        id: 3,
        name: 'Paytm',
        icon: SiPaytm
    }
]