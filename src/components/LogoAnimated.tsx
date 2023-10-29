import { useEffect, useRef, useState } from "react";
import Logo from "../assets/images/PP-logo.png";
import LogoAnimationPaint from "../assets/animations/PP-Paint_1.mp4";
import LogoAnimationBubbles from "../assets/animations/PP-Bubbles_1.mp4";
import LogoAnimationWatter from "../assets/animations/PP_ColorWater_1.mp4";
import useIsMobile from "../hooks/useMobile";
import { Link } from "react-router-dom";
import "../assets/styles/LogoAnimated.css";

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [mouseOut, setMouseOut] = useState(true);

  useEffect(() => {
    if (!videoRef.current || !mouseOut || isMobile || isPlaying) return;

    const $img = videoRef?.current.querySelector("img");
    if ($img) {
      $img.classList.remove("opacity-0");
      $img.classList.add("opacity-100");
    }
  }, [mouseOut, isPlaying]);

  useEffect(() => {
    //Change video to change index of the list
    setVideo(listOfVideos[videosIndex]);
  }, [videosIndex]);

  useEffect(() => {
    if (isPlaying || !mouseOut) {
      playVideoDesktop();
    }
  }, [video]);

  const playVideoDesktop = () => {
    if (!videoRef.current || isMobile) return;
    const $video = videoRef?.current.querySelector("video");
    const $img = videoRef?.current.querySelector("img");
    if ($img) {
      $img.classList.remove("opacity-100");
      $img.classList.add("opacity-0");
    }
    if (!$video || isPlaying) return;
    setMouseOut(false);
    $video.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    if (!videoRef.current || isMobile) return;
    const $video = videoRef?.current.querySelector("video");

    if (!$video) return;
    $video.addEventListener("ended", () => {
      setVideoIndex(
        videosIndex === listOfVideos.length - 1 ? 0 : videosIndex + 1
      );
      setIsPlaying(false);
    });
  }, [video]);

  /*const resetVideoDesktop = () => {
    if (!videoRef.current || isMobile) return;
    const $video = videoRef?.current.querySelector("video");
    if ($video) {
      $video.pause();
      $video.currentTime = 0;
      setVideoIndex(
        videosIndex === listOfVideos.length - 1 ? 0 : videosIndex + 1
      );
    }
  };*/

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
      onMouseLeave={() => {
        setMouseOut(true);
      }}
    >
      <div className="image__overlay_logo w-full">
        <img
          src={Logo}
          alt="Logo"
          className="opacity-100 w-full h-full object-cover bg-transparent"
        />
      </div>

      <video muted className="w-full h-full object-cover" key={videosIndex}>
        {video && <source src={video} type="video/mp4" />}
      </video>
    </div>
  );
};
