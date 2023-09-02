import {  VideoRevI } from "../types/types";
import { IframeVimeo } from "./IframeVimeo";
import { VideoItemRevolution } from "./VideoItemRevolution";
const items: VideoRevI[] = [
   {
    component: ()=><div className="w-full h-full">
      <IframeVimeo src={"https://player.vimeo.com/video/199918863?h=0eaed941de&byline=0&portrait=0"} />         
        </div>,
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    component: ()=><div className="w-full h-full">
      <IframeVimeo src={"https://player.vimeo.com/video/200955217?h=a20c7ca672&byline=0&portrait=0"} />         
        </div>,
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    component: ()=><div className="w-full h-full">
      <IframeVimeo src={"https://player.vimeo.com/video/199917900?h=d43ccf5db7&byline=0&portrait=0"} />         
        </div>,
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },

  {
    component: ()=><div className="w-full h-full">
      <IframeVimeo src={"https://player.vimeo.com/video/290657169?h=2dc306d6f7&byline=0&portrait=0"} />         
        </div>,
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

export const GalleryVideography = () => {
  return (
    <div
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))" }}
      className="mx-auto grid gap-6 m-36 w-[90%] lg:w-[80%]"
    >
      {items.map((item, index) => {
        return (
          <div key={index} className="w-full h-full">
                  <VideoItemRevolution component={item.component} thumbnail={item.thumbnail}/>

          </div>
        );
      })}
      
    </div>
  );
};

