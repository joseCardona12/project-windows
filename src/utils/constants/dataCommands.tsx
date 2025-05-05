import { ICommandKey } from "@/interfaces/commands";
import CloudSection from "@/ui/organisms/files/cloud/CloudSection";
import {
  IconCloud,
  IconDesktop,
  IconDoc,
  IconDownload,
  IconGalery,
  IconHome,
  IconMusic,
  IconPhoto,
  IconPlay,
} from "../../../public/icons";
import DesktopSection from "@/ui/organisms/files/DesktopSection";
import GalerySection from "@/ui/organisms/files/GalerySection";
import HomeSection from "@/ui/organisms/files/HomeSection";
import DownloadSection from "@/ui/organisms/files/DownloadSection";
import DocSection from "@/ui/organisms/files/DocSection";
import ImagesSection from "@/ui/organisms/files/ImagesSection";
import MusicSection from "@/ui/organisms/files/MusicSection";
import VideosSection from "@/ui/organisms/files/VideosSection";

export const DATA_COMMAND_KEY: ICommandKey[] = [
  {
    command: "open cloud",
    name: "cloud_section",
    section: <CloudSection />,
    icon: <IconCloud />,
  },
  {
    command: "open desktop",
    name: "desktop_section",
    section: <DesktopSection />,
    icon: <IconDesktop />,
  },
  {
    command: "open galery",
    name: "galery_section",
    section: <GalerySection />,
    icon: <IconGalery />,
  },
  {
    command: "open home",
    name: "home_section",
    section: <HomeSection />,
    icon: <IconHome />,
  },
  {
    command: "open download",
    name: "download_section",
    section: <DownloadSection />,
    icon: <IconDownload />,
  },
  {
    command: "open doc",
    name: "doc_section",
    section: <DocSection />,
    icon: <IconDoc />,
  },
  {
    command: "open images",
    name: "images_section",
    section: <ImagesSection />,
    icon: <IconPhoto />,
  },
  {
    command: "open music",
    name: "music_section",
    section: <MusicSection />,
    icon: <IconMusic />,
  },
  {
    command: "open videos",
    name: "videos_section",
    section: <VideosSection />,
    icon: <IconPlay />,
  },
];
