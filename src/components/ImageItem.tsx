import { ImageI } from "../types/types";
import { Link } from "react-router-dom";
import "../assets/styles/ImageOverlay.css";

type ImageItem = {
  item: ImageI;
};

export const ImageItem = (props: ImageItem) => {
  const { src, text, link } = props.item;

  if (link) {
    return (
      <Link
        to={link}
        className={
          "relative m-2 md:m-0 w-full min-h-[260px] md:w-2/3 lg:w-[40%]"
        }
      >
        <div className="image__overlay">
          <h3 className="text-3xl md:text-4xl text-white font-thin text-center">
            {text?.toLocaleUpperCase()}
          </h3>
        </div>

        <img className="w-full h-full object-cover" src={src} alt={text} />
      </Link>
    );
  }

  return (
    <div
      className={"relative m-2 md:m-0 w-full min-h-[260px] md:w-2/3 lg:w-[40%]"}
    >
      <div className="image__overlay">
        <h3 className="text-3xl md:text-4xltext-white font-thin">
          {text?.toLocaleUpperCase()}
        </h3>
      </div>

      <img className="w-full h-full object-cover" src={src} alt={text} />
    </div>
  );
};
