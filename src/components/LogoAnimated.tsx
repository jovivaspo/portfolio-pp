import { useEffect, useRef, useState } from "react";
import Logo from "../assets/images/PP-logo.png";
import LogoAnimationPaint from "../assets/animations/PP-Paint_1.mp4";
import LogoAnimationBubbles from "../assets/animations/PP-Bubbles_1.mp4";
import LogoAnimationWatter from "../assets/animations/PP_ColorWater_1.mp4";

const listOfVideos = [
  LogoAnimationWatter,
  LogoAnimationPaint,
  LogoAnimationBubbles,
];

export const LogoAnimated = () => {
  const [videosIndex, setVideoIndex] = useState(0);
  const [video, setVideo] = useState(listOfVideos[videosIndex]);

  useEffect(() => {
    setVideo(listOfVideos[videosIndex]);
  }, [videosIndex]);

  const videoRef: React.RefObject<HTMLDivElement> = useRef(null);

  const playVideo = () => {
    if (!videoRef.current) return;
    const $video = videoRef?.current.querySelector("video");

    if (!$video) return;
    if ($video) {
      $video.play();
    }
  };

  const resetVideo = () => {
    if (!videoRef.current) return;
    const $video = videoRef?.current.querySelector("video");
    if ($video) {
      $video.pause();
      $video.currentTime = 0;
      console.log("índice: ", videosIndex);
      setVideoIndex(
        videosIndex === listOfVideos.length - 1 ? 0 : videosIndex + 1
      );
    }
  };

  console.log(videosIndex);
  return (
    <div
      className={"relative m-2 w-[140px]  z-0"}
      ref={videoRef}
      onMouseEnter={() => playVideo()}
      onMouseLeave={() => resetVideo()}
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

      <video
        muted
        loop
        className="w-full h-full object-cover"
        key={videosIndex}
      >
        {video && <source src={video} type="video/mp4" />}
      </video>
    </div>
  );
};
