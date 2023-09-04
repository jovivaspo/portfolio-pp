import { PlayIcon } from "./Icons/Play";
import { useEffect, useRef } from "react";

interface Props {
  component: () => React.ReactNode;
  thumbnail: string;
  index: number;
  videoSelect: number;
  setVideoSelect: React.Dispatch<React.SetStateAction<number>>;
}
export const VideoItemRevolution: React.FC<Props> = ({
  component,
  thumbnail,
  index,
  videoSelect,
  setVideoSelect,
}) => {
  const Component = component;
  const refIconContainer: React.RefObject<HTMLSpanElement> = useRef(null);
  const refImg: React.RefObject<HTMLImageElement> = useRef(null);
  const refContainer: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (videoSelect === -1) return;
    if (videoSelect !== index) {
          console.log(videoSelect, index);

      

      refImg.current?.classList.remove("hidden");
      setTimeout(() => {
        refImg.current?.classList.remove("opacity-0");

      }, 600);
      setTimeout(() => {
        refIconContainer.current?.classList.remove("hidden");
                const $iframe = refContainer.current?.querySelector("iframe");

      const src = $iframe?.src


      if(src)  $iframe?.setAttribute("src", src)
      }, 1000);
    }
  }, [videoSelect]);

  return (
    <div ref={refContainer} className="min-w-[340px] h-full">
      <div className="w-full h-full relative ">
        <img
          ref={refImg}
          src={thumbnail}
          className="w-full h-full object-cover transition-opacity duration-1000 absolute top-0 left-0 z-20"
        />
        <span
          ref={refIconContainer}
          onClick={() => {
            if (!refIconContainer.current || !refImg.current) return;
            refIconContainer.current?.classList.add("hidden");
            refImg.current?.classList.add("opacity-0");
            setTimeout(() => {
              refImg.current?.classList.add("hidden");
              setVideoSelect(index);
            }, 800);
          }}
          className=" absolute top-0 w-full h-full flex justify-center items-center cursor-pointer  z-30"
        >
          <PlayIcon color="white" />"
        </span>
        {<Component />}
      </div>
    </div>
  );
};
