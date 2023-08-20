import { VideoI } from "../types/types";
import { VideoItem } from "./VideoItem";

const items: VideoI[] = [
  {
    type: "video",
    src: "https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4",
    text: "Videography",
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    type: "video",
    src: "https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4",
    text: "Videography",
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    type: "video",
    src: "https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4",
    text: "Videography",
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    type: "video",
    src: "https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4",
    text: "Videography",
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    type: "video",
    src: "https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4",
    text: "Videography",
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    type: "video",
    src: "https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4",
    text: "Videography",
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    type: "video",
    src: "https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4",
    text: "Videography",
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    type: "video",
    src: "https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4",
    text: "Videography",
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    type: "video",
    src: "https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4",
    text: "Videography",
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

export const GalleryVideography = () => {
  return (
    <div
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      className="mx-auto grid gap-6 m-36 w-[90%] lg:w-[80%]"
    >
      {items.map((item, index) => {
        return (
          <div key={index} className="w-full h-full">
            <VideoItem item={item} />
          </div>
        );
      })}
    </div>
  );
};
