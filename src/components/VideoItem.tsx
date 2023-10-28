import { useRef, useEffect } from "react";
import { VideoI } from "../types/types";
import { Link } from "react-router-dom";
import "../assets/styles/ImageOverlay.css";

type VideoItem = {
  item: VideoI;
};

export const VideoItem = (props: VideoItem) => {
  const { src, text, link, thumbnail } = props.item;
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

  if (link) {
    return (
      <Link
        to={link}
        className={
          "relative w-full m-2 md:m-0 min-h-[260px] md:w-2/3 lg:w-[40%]"
        }
      >
        <div className={" w-full h-full"} ref={videoRef}>
          <div className="image__overlay">
            <h3 className=" text-white font-thin text-3xl md:text-4xl">
              {text?.toLocaleUpperCase()}
            </h3>
          </div>
          {
            <video muted loop className="w-full h-full object-cover">
              <source src={src} type="video/mp4" />
            </video>
          }
        </div>
      </Link>
    );
  }
  return (
    <div
      className={"relative m-2 md:m-0 w-full min-h-[260px] h-full"}
      ref={videoRef}
    >
      <div
        className="image__overlay"
        style={{
          backgroundImage: thumbnail ? `url(${thumbnail})` : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 className="text-4xl text-white font-thin">
          {text?.toLocaleUpperCase()}
        </h3>
      </div>

      <video muted loop className="w-full h-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};
