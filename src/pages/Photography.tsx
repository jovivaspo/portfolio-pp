import { Header } from "../components/Header";
import { GalleryPhotography } from "../components/GalleryPhotography";
import ImageCardPhotography from "../assets/images/headers/header-photography.webp";

export const Photography = () => {
  return (
    <>
      <Header
        position="0% 90%"
        text="Photography"
        image={ImageCardPhotography}
      />
      <GalleryPhotography />
    </>
  );
};
