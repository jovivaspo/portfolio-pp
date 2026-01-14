import { Header } from "../components/Header";
import { Block } from "../types/types";
import { GalleryWithSlide } from "../components/GalleryWithSlide";

const blocks: Block[] = [
  {
    title: "Fincas Moreno",
    description:
      "Administration of properties and neighborhood communities",
    items: [
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1768336052/2025_FM-mockup_Shopfront_stlcre.png",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1768336028/2025_FM-logo_White_a3tp5l.jpg",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1768336028/2025_FM-logo_Black_lzqu9c.jpg",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1768336029/2025_FM-mockup_Business_Card_1_wjntjo.png",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1768336030/2025_FM-mockup_Business_Card_2_rl42ap.png",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1768336032/2025_FM-mockup_Envelope_n4mujv.png",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1768336036/2025_FM-mockup_Business_Card_3_iifkh6.png",
      
    ],
  },
  {
    title: "FisioFit Center",
    description: "Advanced sports physiotherapy center",
    items: [
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698578299/portafolio-pp/2019_FisioFit_1920x1080p_enfr5l.jpg",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698578299/portafolio-pp/2019_FisioFit_1920x1080p_02_juldlo.jpg",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1768420470/2026_Mockup-FisioFit_business_cards_01_tan38p.png",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1768420470/2026_Mockup-FisioFit_business_cards_03_sd7ynj.png",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/v1768420470/2026_Mockup-FisioFit_business_cards_02_uevdeu.png",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/c_crop,ar_16:9/v1698443523/portafolio-pp/IMG_6538_zpicyc.jpg",
    ],
  },

  {
    title: "KINDOI",
    description: "Travel itinerary generator",
    items: [
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443990/portafolio-pp/Kindoi_Identidad_Corporativa_iutwes.png",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443991/portafolio-pp/Captura_de_pantalla_2023-10-27_121302_madbzh.png",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443991/portafolio-pp/Captura_de_pantalla_2023-10-27_121500_j5wecj.png",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443992/portafolio-pp/Captura_de_pantalla_2023-10-27_121413_kphtwf.png",
    ],
  },
  {
    title: "Taberna La Giralda",
    description: "Bar and Restaurant",
    items: [
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698578299/portafolio-pp/Taberna-LaGiralda_1920x1080px_kcwbjy.jpg",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/c_crop,ar_16:9/v1698444187/portafolio-pp/dc9269f1-6d4a-4426-b69e-188c0584a7e3_nfqhb4.jpg",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/c_crop,ar_16:9/v1698444187/portafolio-pp/c411c4b4-128c-440a-baa6-b8f50deb0a96_khslv9.jpg",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/c_crop,ar_16:9/v1698444186/portafolio-pp/e968c23e-ee00-44e8-9d85-963a81c427f7_nrpg0b.jpg",
    ],
  },
];

export const Designs = () => {
  return (
    <>
      <Header
        position="0% 30%"
        text="Designs"
        image="https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443523/portafolio-pp/2019_FisioFit_Logo_PRI_RGB_uye9u2.jpg"
      />
      <GalleryWithSlide blocks={blocks} />
    </>
  );
};
