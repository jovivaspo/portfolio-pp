import { ImageI, VideoI } from "../types/types";
import { ImageItem } from "./ImageItem";
import { VideoItem } from "./VideoItem";

interface GalleryProps {
  items: (VideoI | ImageI)[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <div className="w-full flex justify-center gap-12 flex-wrap mb-12">
      {items.map((item, index) => {
        if (item.type === "video") return <VideoItem item={item} key={index} />;
        return <ImageItem item={item} key={index} />;
      })}
    </div>
  );
};
