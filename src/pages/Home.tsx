import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Slide } from "../components/Slide";
import { useSizeScreen } from "../hooks/useSizeScreen";
import { ImageI, VideoI } from "../types/types";
import HeaderResize from "../assets/images/headers/header-home-pp-resize.jpg"
import HeaderOptimized from "../assets/images/headers/header-home-pp-optimized.webp"
import ImageCardPhotography from "../assets/images/headers/header-photography.webp"
const Items: (VideoI | ImageI)[] = [
  {
    type: "video",
    src: "https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4",
    text: "Videography",
    link: "videography",
  },
  {
    type: "image",
    src: ImageCardPhotography,
    text: "Photography",
    link: "photography",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    text: "Features/Colab",
    link: "colab",
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
          size.width <= 768? HeaderResize : HeaderOptimized
        }
      />
      <Slide />
      <Gallery items={Items} />
    </>
  );
};
