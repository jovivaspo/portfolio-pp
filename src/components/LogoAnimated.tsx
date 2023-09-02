import { useEffect, useRef } from "react";
import Logo from  '../assets/images/PP-logo.png'
import LogoAnimation from '../assets/animations/PP-Paint_1.mp4'

export const LogoAnimated = () => {


    const videoRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    const $video = videoRef.current.querySelector("video");

    if (!$video) return;

    const playVideo = () => {
      if ($video) {
        $video.play();
      }
    };
    const resetVideo = () => {
      if ($video) {
        $video.pause();
        $video.currentTime = 0;
      }
    };
    videoRef.current?.addEventListener("mouseover", playVideo);
    videoRef.current?.addEventListener("mouseout", resetVideo);

    return () => {
      videoRef.current?.removeEventListener("mouseenter", playVideo);
      videoRef.current?.removeEventListener("mouseleave", resetVideo);
    };
  }, [videoRef.current]);

     return (
    <div className={"relative m-2 w-[140px]  z-0"} ref={videoRef}>
      <div className="image__overlay w-full"
      style={{
        backgroundImage: `url(${Logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "transparent",
      }}
      >
      </div>

      <video muted loop className="w-full h-full object-cover">
        <source src={LogoAnimation} type="video/mp4" />
      </video>
    </div>)
}