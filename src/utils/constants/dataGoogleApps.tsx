import { ITabWindowHome } from "@/interfaces/tabWindowHome";
import Account from "@/ui/organisms/GoogleSection/Account";
import { IconDrive, IconGmail, IconYoutube } from "../../../public/icons";
import Youtube from "@/ui/organisms/GoogleSection/Youtube";
import Gmail from "@/ui/organisms/GoogleSection/Gmail";
import Drive from "@/ui/organisms/GoogleSection/Drive";

export const DATA_GOOGLE_APPS: ITabWindowHome[] = [
  {
    name: "Account",
    icon: <>J</>,
    sectionModal: <Account />,
  },
  {
    name: "Drive",
    icon: <IconDrive />,
    sectionModal: <Drive />,
  },
  {
    name: "Gmail",
    icon: <IconGmail />,
    sectionModal: <Gmail />,
  },
  {
    name: "Youtube",
    icon: <IconYoutube />,
    sectionModal: <Youtube />,
  },
];
