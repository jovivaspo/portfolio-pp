import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const words = [
  "POTHOGRAPHER",
  "MOTION GRAPIC",
  "VIDEO EDITOR",
  "FILM MAKER",
  "MULITMEDIA DESIGNER",
];

export const Slide = () => {


  return (
    <div className="w-full h-[300px] flex flex-col justify-center items-center gap-10">
      <h2 className="text-3xl text-my-gray">THIS IS ME, PABLO: </h2>
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        interval={5000}
        transitionTime={3000}
        stopOnHover={false}
        swipeable={false}

      >
        {words.map((word, index) => {
          return (
            <h3 className="text-xl text-my-gray " key={index}>
              {word}
            </h3>
          );
        })}
      </Carousel>
      <p className="text-md text-my-gray italic font-semibold">
        - based in Luxembourg -{" "}
      </p>
    </div>
  );
};
