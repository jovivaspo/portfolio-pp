import { GalleryVideography } from "../components/GalleryVideography";
import { Header } from "../components/Header";
import VideoGallery from "../assets/video/1101398052.mp4";

export const Videography = () => {
  return (
    <>
      <Header text="Videography" video={VideoGallery} />
      <GalleryVideography />
    </>
  );
};
