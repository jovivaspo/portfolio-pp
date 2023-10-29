import { Header } from "../components/Header";
import { Block } from "../types/types";
import { GalleryWithSlide } from "../components/GalleryWithSlide";

const blocks: Block[] = [
  {
    title: "Fincas Moreno",
    description:
      "Administration and management of properties and neighborhood communities",
    items: [
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698578299/portafolio-pp/FincasMoreno_1920x1080px_fuyidw.jpg",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443125/portafolio-pp/IMG_5635_yunzvv.jpg",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443125/portafolio-pp/IMG_5636_000_g2vqte.jpg",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443125/portafolio-pp/IMG_5597_000_eapjyf.jpg",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443126/portafolio-pp/IMG_5596_001_am87mg.jpg",
    ],
  },
  {
    title: "FisioFit Center",
    description: "Advanced sports physiotherapy center",
    items: [
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698578299/portafolio-pp/2019_FisioFit_1920x1080p_enfr5l.jpg",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443523/portafolio-pp/header-design_r06ksg.png",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698578299/portafolio-pp/2019_FisioFit_1920x1080p_02_juldlo.jpg",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/c_crop,ar_16:9/v1698443523/portafolio-pp/IMG_6538_zpicyc.jpg",
    ],
  },

  {
    title: "KINDOI",
    description: "Brand identity",
    items: [
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443990/portafolio-pp/Kindoi_Identidad_Corporativa_iutwes.png",
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443991/portafolio-pp/Captura_de_pantalla_2023-10-27_121302_madbzh.png",
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
