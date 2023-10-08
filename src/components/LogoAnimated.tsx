import { useEffect, useRef, useState } from "react";
import Logo from "../assets/images/PP-logo.png";
import LogoAnimationPaint from "../assets/animations/PP-Paint_1.mp4";
import LogoAnimationBubbles from "../assets/animations/PP-Bubbles_1.mp4";
import LogoAnimationWatter from "../assets/animations/PP_ColorWater_1.mp4";
import useIsMobile from "../hooks/useMobile";
import { Link } from "react-router-dom";

const listOfVideos = [
  LogoAnimationWatter,
  LogoAnimationPaint,
  LogoAnimationBubbles,
];

export const LogoAnimated = () => {
  const [videosIndex, setVideoIndex] = useState(0);
  const [video, setVideo] = useState(listOfVideos[videosIndex]);
  const isMobile = useIsMobile();
  const videoRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    //Change video to change index of the list
    setVideo(listOfVideos[videosIndex]);
  }, [videosIndex]);

  useEffect(() => {
    if (!videoRef.current || !isMobile) return;
    //Play the video whent this has changed on mobile
    const $video = videoRef?.current.querySelector("video");

    if (!$video) return;
    if ($video) {
      $video.play();
    }
  }, [video]);

  const playVideoDesktop = () => {
    if (!videoRef.current || isMobile) return;
    const $video = videoRef?.current.querySelector("video");

    if (!$video) return;
    if ($video) {
      $video.play();
    }
  };

  const resetVideoDesktop = () => {
    if (!videoRef.current || isMobile) return;
    const $video = videoRef?.current.querySelector("video");
    if ($video) {
      $video.pause();
      $video.currentTime = 0;
      setVideoIndex(
        videosIndex === listOfVideos.length - 1 ? 0 : videosIndex + 1
      );
    }
  };

  if (isMobile) {
    return (
      <div className={"relative m-2 w-[140px] z-0 overflow-hidden ml-[11px]"}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
    );
  }

  return (
    <div
      className={"relative m-2 w-[140px] z-0 overflow-hidden ml-[11px]"}
      ref={videoRef}
      onMouseEnter={() => playVideoDesktop()}
      onMouseLeave={() => resetVideoDesktop()}
    >
      <div
        className="image__overlay w-full"
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
        }}
      ></div>

      <video muted className="w-full h-full object-cover" key={videosIndex}>
        {video && <source src={video} type="video/mp4" />}
      </video>
    </div>
  );
};
