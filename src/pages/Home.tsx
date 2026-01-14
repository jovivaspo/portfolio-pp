import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Slide } from "../components/Slide";
import { useSizeScreen } from "../hooks/useSizeScreen";
import { ImageI, VideoI } from "../types/types";
import HeaderResize from "../assets/images/headers/header-home-pp-resize.jpg";

const Items: (VideoI | ImageI)[] = [
  {
    type: "video",
    src: "https://res.cloudinary.com/dme5pqzrj/video/upload/f_auto/v1698424387/portafolio-pp/videography-cover_relqfp.mp4",
    text: "Videography",
    link: "videography",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698423838/portafolio-pp/header-photography_iyd0f1.jpg",
    text: "Photography",
    link: "photography",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/t_header-feat-collaboration-crop/v1698424080/portafolio-pp/header-feat-collaboration_zahc6o.jpg",
    text: "Feat/Collaboration",
    link: "colab",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1768336030/2025_FM-mockup_Business_Card_2_rl42ap.png",
    text: "Designs",
    link: "designs",
  },
];

export const Home = () => {
  const { size } = useSizeScreen();

  return (
    <>
      <Header
        position="0px -250px"
        text="PABLO POCOSTALES"
        image={
          size.width <= 768
            ? HeaderResize
            : "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698424671/portafolio-pp/header-home-pp-optimized_obazme.webp"
        }
      />
      <Slide />
      <Gallery items={Items} />
    </>
  );
};
