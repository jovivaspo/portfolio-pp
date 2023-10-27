import { GalleryVideography } from "../components/GalleryVideography";
import { Header } from "../components/Header";

export const Videography = () => {
  return (
    <>
      <Header
        text="Videography"
        video="https://res.cloudinary.com/dme5pqzrj/video/upload/f_auto/v1698424387/portafolio-pp/videography-cover_relqfp.mp4"
      />
      <GalleryVideography />
    </>
  );
};
