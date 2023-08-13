import "../assets/styles/Gallery.css";
import { ItemGalleryElement } from "./ItemGallery";


interface GalleryProps {
  items: ItemGallery[];
}

export interface ItemGallery {
  id: number;
  type: "image" | "video";
  src: string;
  text: string;
  path: string;
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  
  return (
    <div className="w-full flex justify-center gap-12 flex-wrap my-12">
      {items.map((item) => {
        return (
         <ItemGalleryElement item={item} />
        );
      })}
    </div>
  );
};
