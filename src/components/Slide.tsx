import { useEffect, useState } from "react";

const words = [
  "POTHOGRAPHER",
  "MOTION GRAPIC",
  "VIDEO EDITOR",
  "FILM MAKER",
  "MULITMEDIA DESIGNER",
];

export const Slide = () => {

 const [currentWordIndex, setCurrentWordIndex] = useState(0);
 
    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex: number) => (prevIndex + 1) % words.length);
    }, 6000); // Total animation time

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[300px] flex flex-col justify-center items-center gap-10 ">
      <h2 className="text-3xl text-my-gray mb-10">THIS IS ME, PABLO: </h2>
      {words.map((word, index) => {
        return (
          <h3
          style={{ opacity: index === currentWordIndex ? 1 : 0,
          transition: "all 4s ease-in-out",
          transitionDuration: "2s"
          }}
            className={`absolute pt-2 text-xl text-my-gray`}
            key={index}
          >
            {word}
          </h3>
        );
      })}

      <p className="text-md text-my-gray italic font-semibold mt-8">
        - based in Luxembourg -{" "}
      </p>
    </div>
  );
};
