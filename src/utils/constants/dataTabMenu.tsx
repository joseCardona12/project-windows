import { ITabMenuData } from "@/interfaces/TabMenudData";
import {
  IconApp,
  IconBluetooth,
  IconCloud,
  IconDesktop,
  IconDoc,
  IconDownload,
  IconGalery,
  IconHome,
  IconHomeV2,
  IconLanguage,
  IconMusic,
  IconPhoto,
  IconPlay,
  IconSystem,
  IconUser,
  IconWifiV2,
} from "../../../public/icons";
import DesktopSection from "@/ui/organisms/files/DesktopSection";
import DownloadSection from "@/ui/organisms/files/DownloadSection";
import DocSection from "@/ui/organisms/files/DocSection";
import ImagesSection from "@/ui/organisms/files/ImagesSection";
import MusicSection from "@/ui/organisms/files/MusicSection";
import VideosSection from "@/ui/organisms/files/VideosSection";
import HomeSection from "@/ui/organisms/files/HomeSection";
import GalerySection from "@/ui/organisms/files/GalerySection";
import CloudSection from "@/ui/organisms/files/cloud/CloudSection";
import HomeSectionConfiguration from "@/ui/organisms/Configuration/HomeSectionConfiguration";
import SystemSectionConfiguration from "@/ui/organisms/Configuration/SystemSectionConfiguration";

export const DATA_TAB_MENU: ITabMenuData[] = [
  {
    icon: <IconDesktop />,
    text: "Desktop",
    section: <DesktopSection />,
    isPin: true,
  },
  {
    icon: <IconDownload />,
    text: "Download",
    section: <DownloadSection />,
    isPin: true,
  },
  {
    icon: <IconDoc />,
    text: "Doc",
    section: <DocSection />,
    isPin: true,
  },
  {
    icon: <IconPhoto />,
    text: "Images",
    section: <ImagesSection />,
    isPin: true,
  },
  {
    icon: <IconMusic />,
    text: "Music",
    section: <MusicSection />,
    isPin: true,
  },
  {
    icon: <IconPlay />,
    text: "Videos",
    section: <VideosSection />,
    isPin: true,
  },
];

export const DATA_TAB_MENU_DEFAULT: ITabMenuData[] = [
  {
    icon: <IconHome />,
    text: "Home",
    section: <HomeSection />,
  },
  {
    icon: <IconGalery />,
    text: "Galery",
    section: <GalerySection />,
  },
  {
    icon: <IconCloud />,
    text: "Cloud",
    section: <CloudSection />,
  },
];

export const DATA_TAB_MENU_CONFIG: Partial<ITabMenuData>[] = [
  {
    icon: <IconHomeV2 />,
    text: "Home",
    section: (
      <HomeSectionConfiguration name="JoseCardona" name_device="Aspire" />
    ),
  },
  {
    icon: <IconSystem />,
    text: "System",
    section: (
      <SystemSectionConfiguration name="JoseCardona" name_device="Aspire" />
    ),
  },
  {
    icon: <IconBluetooth />,
    text: "Bluetooth and devices",
  },
  {
    icon: <IconWifiV2 />,
    text: "Red e internet",
  },
  {
    icon: <IconHome />,
    text: "Custom",
  },
  {
    icon: <IconApp />,
    text: "App",
  },
  {
    icon: <IconUser />,
    text: "Account",
  },
  {
    icon: <IconLanguage />,
    text: "Lenguage",
  },
];
