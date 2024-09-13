import { ClientInfo } from "../../models/Calsses";
import wrapLogo from "../../assets/clie/clients-wrap.png";
import zenegyLogo from "../../assets/clie/clients-zenegy.png";

export const ClientList: ClientInfo[] = [
  new ClientInfo(
    "Wrap",
    wrapLogo,
    "Wrap Technologies is a global leader in innovative public safety technologies and services.",
    "https://wrap.com/"
  ),
  new ClientInfo(
    "Zenegy",
    zenegyLogo,
    "A Financial Suite that covers the company's financial needs.",
    "https://zenegy.com/"
  ),
];
