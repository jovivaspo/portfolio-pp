
import { useEffect, useRef } from "react";
import { ItemGallery } from "./Gallery";
import { Link } from "react-router-dom";

interface ItemGalleryProps {
    item: ItemGallery;
}

export const ItemGalleryElement: React.FC<ItemGalleryProps> = (props) => {
    const item = props.item;
    const videoRef = useRef<HTMLAnchorElement>(null);

     useEffect(() => {
        if(!videoRef.current) return 
        const $video = videoRef.current.querySelector("video");

        if(!$video) return

        const playVideo = () => {
            console.log("Se ejecuta")
            if ($video) {
                $video.play();
            }
        }
        const resetVideo = () => {
            if ($video) {
                $video.pause();
                $video.currentTime = 0;
            }
        }
        videoRef.current?.addEventListener("mouseover", playVideo);
        videoRef.current?.addEventListener("mouseout", resetVideo);

        return () => {
             videoRef.current?.removeEventListener("mouseenter", playVideo);
             videoRef.current?.removeEventListener("mouseleave", resetVideo);
        }
    },[videoRef.current])
  return (
     <Link
            ref={videoRef}
            to={item.path}
            key={item.id}
            className="relative w-full min-h-[260px] md:w-2/3 lg:w-[40%]"
          >
            <div
            className="image__overlay">
              <h3 className="text-4xl text-white font-thin">
                {item.text.toLocaleUpperCase()}
              </h3>
            </div>
            {item.type === "image" && (
              <img
                className="w-full h-full object-cover"
                src={item.src}
                alt=""
              />
            )}
            {item.type === "video" && (
              <video
                muted
                loop
                className="w-full h-full object-cover"
                
              >
                <source
                  src="https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </Link>
  )
}
