import { useState } from "react";
import { VideoRevI } from "../types/types";
import { IframeVimeo } from "./IframeVimeo";
import IframeYoutube from "./IframeYoutube";
import { VideoItemRevolution } from "./VideoItemRevolution";
import Cover1 from "../assets/images/cover-videos/01.png";
import Cover2 from "../assets/images/cover-videos/02.png";
import Cover3 from "../assets/images/cover-videos/03.png";
import Cover4 from "../assets/images/cover-videos/04.png";
import Cover5 from "../assets/images/cover-videos/05.png";
import Cover6 from "../assets/images/cover-videos/06.png";
import Cover7 from "../assets/images/cover-videos/07.png";
import Cover8 from "../assets/images/cover-videos/08.png";
import Cover9 from "../assets/images/cover-videos/09.png";
//import Cover10 from "../assets/images/cover-videos/10.png";
import Cover11 from "../assets/images/cover-videos/11.png";

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
    thumbnail: Cover1,
    title: "Título Video",
    subTitle: "Subtitle",
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
    title: "Título Video",
    subTitle: "Subtitle",

    thumbnail: Cover2,
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
    title: "Título Video",
    subTitle: "Subtitle",

    thumbnail: Cover3,
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
    title: "Título Video",
    subTitle: "Subtitle",

    thumbnail: Cover4,
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeYoutube
          src={"https://www.youtube.com/embed/QgY0KZwVNcE?si=4pxepcg1nYUb9vP4"}
        />
      </div>
    ),
    title: "Título Video",
    subTitle: "Subtitle",

    thumbnail: Cover9,
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeYoutube
          src={"https://www.youtube.com/embed/3kydLEQaM54?si=q2uOtg6w8Wd2xaRo"}
        />
      </div>
    ),
    title: "Título Video",
    subTitle: "Subtitle",

    thumbnail: Cover5,
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeVimeo
          src={"https://player.vimeo.com/video/858430889?h=bd3e407bc6"}
        />
      </div>
    ),
    title: "Título Video",
    subTitle: "Subtitle",

    thumbnail: Cover11,
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeYoutube
          src={"https://www.youtube.com/embed/uAitn2SOIOw?si=qZfKEMcb-85TcJGu"}
        />
      </div>
    ),
    title: "Título Video",
    subTitle: "Subtitle",

    thumbnail: Cover6,
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeYoutube
          src={"https://www.youtube.com/embed/dztwM69ygeU?si=Mq9sr0TlDpgq0vhG"}
        />
      </div>
    ),
    title: "Título Video",
    subTitle: "Subtitle",

    thumbnail: Cover7,
  },
  {
    component: () => (
      <div className="w-full h-full">
        <IframeYoutube
          src={"https://www.youtube.com/embed/kIxkspQbknU?si=GAp9Bf9IkOtpNGD5"}
        />
      </div>
    ),
    title: "Título Video",
    subTitle: "Subtitle",

    thumbnail: Cover8,
  },
];

export const GalleryVideography = () => {
  const [videoSelect, setVideoSelect] = useState(-1);

  return (
    <div className="mx-auto flex flex-col sm:grid grid-cols-2 gap-16 md:gap-24 mt-36 mb-32 w-[90%] lg:w-[80%] justify-center">
      {items.map((item, index) => {
        return (
          <div key={index} className="w-full " style={item.style}>
            <VideoItemRevolution
              component={item.component}
              thumbnail={item.thumbnail}
              index={index}
              videoSelect={videoSelect}
              setVideoSelect={setVideoSelect}
              title={item.title}
              subTitle={item.subTitle}
            />
          </div>
        );
      })}
    </div>
  );
};
