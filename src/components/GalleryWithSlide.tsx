import React from "react";
import { Block } from "../types/types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface Props {
  blocks: Block[];
}

export const GalleryWithSlide: React.FC<Props> = ({ blocks }) => {
  const slideHeight = "h-[300px] md:h-[380px] lg:h-[414px]";

  return (
    <div className="mx-auto flex flex-col xl:grid grid-cols-2  gap-16  xl:gap-32 mt-36 mb-24 w-[90%]  lg:w-[80%] justify-center">
      {blocks.map((block, index) => {
        return (
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-md">{block.title}</h3>
            <h6 className=" text-sm">{block.description}</h6>
            <div className={`relative w-full ${slideHeight}`}>
              <Carousel
                dynamicHeight={false}
                showStatus={false}
                showThumbs={false}
                key={index}
                className={`relative w-full h-full flex flex-col gap-4 justify-center items-center ${slideHeight}`}
                renderItem={(item) => (
                  <div className={`h-full ${slideHeight}`}>{item}</div>
                )}
                renderArrowPrev={(clickHandler, hasPrev) => {
                return (
                  <div
                    className={`${
                      hasPrev ? "absolute" : "hidden"
                    } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-40 hover:opacity-100 cursor-pointer z-20`}
                    onClick={clickHandler}
                  >
                    <FaArrowCircleLeft className="w-9 h-9 text-white mix-blend-difference drop-shadow" />
                  </div>
                );
              }}
                renderArrowNext={(clickHandler, hasNext) => {
                return (
                  <div
                    className={`${
                      hasNext ? "absolute" : "hidden"
                    } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-40 hover:opacity-100 cursor-pointer z-20`}
                    onClick={clickHandler}
                  >
                    <FaArrowCircleRight className="w-9 h-9 text-white mix-blend-difference drop-shadow" />
                  </div>
                );
              }}
                renderIndicator={(onClickHandler, isSelected, label) => {
                const defStyle = {
                  display: "inline-block",
                  marginLeft: 20,
                  width: "10px",
                  height: "10px",
                  borderRadius: "100%",
                  backgroundColor: "gray",
                  cursor: "pointer",
                };
                const style = isSelected
                  ? { ...defStyle, backgroundColor: "black" }
                  : { ...defStyle };
                return (
                  <div
                    style={style}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`${label} ${index + 1}`}
                  >
                    {}
                  </div>
                );
              }}
              >
                {block.items.map((item, index) => {
                  if (item.includes("mp4")) {
                    return (
                      <div className={`w-full h-full overflow-hidden ${slideHeight}`}>
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
                    <div className={`w-full h-full overflow-hidden ${slideHeight}`}>
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
            </div>
          </div>
        );
      })}
    </div>
  );
};
