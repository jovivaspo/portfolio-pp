import React from "react";
import { Block } from "../types/types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  blocks: Block[];
}

export const GalleryWithSlide: React.FC<Props> = ({ blocks }) => {
  return (
    <div className="mx-auto flex flex-col sm:grid grid-cols-2 gap-16 mt-36 mb-24 w-[90%] lg:w-[80%] justify-center">
      {blocks.map((block, index) => {
        return (
          <Carousel
            key={index}
            className="w-full h-[600px] flex flex-col gap-4 justify-center items-center border p-8 "
          >
            {block.map((item, index) => {
              if (item.includes("mp4")) {
                return (
                  <div>
                    <video
                      key={index}
                      src={item}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              }
              return (
                <div>
                  <img
                    key={index}
                    src={item}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </Carousel>
        );
      })}
    </div>
  );
};
