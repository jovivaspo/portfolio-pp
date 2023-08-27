import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Slide } from "../components/Slide";
import { ImageI, VideoI } from "../types/types";
import  MainImageHeader from "../assets/images/header.jpg"

const Items: (VideoI | ImageI)[] = [
  {
    type: "video",
    src: "https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4",
    text: "Videography",
    link: "videography",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1691231862377-7e55d4e6a2c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
  return (
    <>
      <Header
        text="PABLO POCOSTALES"
        image={MainImageHeader}
      />
      <Slide />
      <Gallery items={Items} />
    </>
  );
};
