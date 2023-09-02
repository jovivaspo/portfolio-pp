import { PlayIcon } from "./Icons/Play";
import { useRef } from "react";

interface Props {
    component: () => React.ReactNode
    thumbnail: string
}
export const VideoItemRevolution: React.FC<Props> = ({ component, thumbnail }) => {
  const Component = component;
  const refIconContainer: React.RefObject<HTMLSpanElement> = useRef(null);
  const refImg: React.RefObject<HTMLImageElement> = useRef(null);
  return (
    <div className="w-[400px] h-[230px]">
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
            }, 800);
          }}
          className=" absolute top-0 w-full h-full flex justify-center items-center cursor-pointer  z-30"
        >
          <PlayIcon color="white" />"
        </span>
        {<Component/>}
      </div>
    </div>
  );
};
