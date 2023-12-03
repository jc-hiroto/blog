import { StaticImageData } from "next/image";

export enum PostLanguage {
  en = "en",
  zh_tw = "zh_tw",
}

export interface PostMetadata {
  title: string;
  author: string;
  date: Date;
  cover: StaticImageData;
  words: number;
  tags: string[];
  description: string;
  prefix: string;
  language: PostLanguage;
}

export interface ProImageMetadata {
  path: string;
  desc_zh: string;
  desc_en: string;
  reverse?: boolean;
  camera: string;
  lens?: string;
  film?: string;
}

export const Cameras = {
  "S_A72": "Sony A7II",
  "H_500CM": "Hasselblad 500C/M",
  "N_F3": "Nikon F3HP",
  "GP6B": "GoPro Hero 6 Black",
  "IP13P": "iPhone 13 Pro",
  "O_MJU2": "Olympus mju-II",
}

export enum Lens {
  H_80 = "Hasselblad 80mm f/2.8",
  N_50 = "Nikon 50mm f/1.4",
  N_105 = "Nikon 105mm f/2.5",
  S_1635Z = "Sony FE Carl Zeiss T* 16-35mm f/4 ZA",
}

export enum Film {
  F_PRO400H = "Fujifilm PRO400H",
  F_PRO160NS = "Fujifilm PRO160NS",
  F_RDPIII = "Fujifilm Provia 100F RDPIII",
  F_P400 = "Fujifilm Premium 400",
  F_RVP50 = "Fujifilm Velvia 50 RVP50",
  F_RVP100 = "Fujifilm Velvia 100 RVP100",
  K_PT400 = "Kodak Portra 400",
  K_PT160 = "Kodak Portra 160",
  I_HP5 = "Ilford HP5 Plus",
  I_DELTA400 = "Ilford Delta 400"
}