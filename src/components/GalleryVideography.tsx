import {  useState } from "react";
import { VideoRevI } from "../types/types";
import { IframeVimeo } from "./IframeVimeo";
import IframeYoutube from "./IframeYoutube";
import { VideoItemRevolution } from "./VideoItemRevolution";
const items: VideoRevI[] = [
  {
    component: () => (
      <div className="w-full h-full">
        <IframeVimeo
          src={
            "https://player.vimeo.com/video/199918863?h=a20c7ca672&byline=0&portrait=0"
          }
        />
      </div>
    ),
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
     
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeVimeo
          src={
            "https://player.vimeo.com/video/200955217?h=a20c7ca672&byline=0&portrait=0"
          }
        />
      </div>
    ),
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeVimeo
          src={
            "https://player.vimeo.com/video/199917900?h=d43ccf5db7&byline=0&portrait=0"
          }
        />
      </div>
    ),
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },

  {
    component: () => (
      <div className="w-full h-full">
        <IframeVimeo
          src={
            "https://player.vimeo.com/video/290657169?h=2dc306d6f7&byline=0&portrait=0"
          }
        />
      </div>
    ),
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeYoutube
          src={"https://www.youtube.com/embed/QgY0KZwVNcE?si=4pxepcg1nYUb9vP4"}
           padding= '125%'
        />
      </div>
    ),
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      style: {
        gridRow: 'span 2'
      },
     
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeYoutube
          src={"https://www.youtube.com/embed/3kydLEQaM54?si=q2uOtg6w8Wd2xaRo"}
        />
      </div>
    ),
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeYoutube
          src={"https://www.youtube.com/embed/JXWs21vrlL4?si=77d-TyfoN35HbMTo"}
        />
      </div>
    ),
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeYoutube
          src={"https://www.youtube.com/embed/uAitn2SOIOw?si=qZfKEMcb-85TcJGu"}
        />
      </div>
    ),
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
       
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeYoutube
          src={"https://www.youtube.com/embed/dztwM69ygeU?si=Mq9sr0TlDpgq0vhG"}
        />
      </div>
    ),
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeYoutube
          src={"https://www.youtube.com/embed/kIxkspQbknU?si=GAp9Bf9IkOtpNGD5"}
        />
      </div>
    ),
    thumbnail:
      "https://images.unsplash.com/photo-1691358246149-49d63a1d730f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

export const GalleryVideography = () => {
  const [videoSelect, setVideoSelect] = useState(-1);



  return (
    <div
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
      aspectRatio: "16/9",
      gridAutoFlow: 'dense',
    }}
      className="mx-auto grid gap-4 m-36 w-[90%] lg:w-[80%]"
    >
      {items.map((item, index) => {
        return (
          <div key={index} className="w-full h-full" style={item.style}>
            <VideoItemRevolution
              component={item.component}
              thumbnail={item.thumbnail}
              index={index}
              videoSelect={videoSelect}
              setVideoSelect={setVideoSelect}
            />
          </div>
        );
      })}
    </div>
  );
};
