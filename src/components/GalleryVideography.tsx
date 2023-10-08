import { useState } from "react";
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
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1696751558/portafolio-pp/01_fne6tt.png",
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

    thumbnail:
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1696751559/portafolio-pp/02_rtgolx.png",
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

    thumbnail:
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1696751559/portafolio-pp/03_aswhk6.png",
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

    thumbnail:
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1696751559/portafolio-pp/04_ldq8vi.png",
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

    thumbnail:
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1696751561/portafolio-pp/09_nb1nvm.png",
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

    thumbnail:
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1696751559/portafolio-pp/05_gcpzpl.png",
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

    thumbnail:
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1696751562/portafolio-pp/11_nvbzbd.png",
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

    thumbnail:
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1696751560/portafolio-pp/06_fvhf3z.png",
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

    thumbnail:
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1696751560/portafolio-pp/07_ydzyof.png",
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

    thumbnail:
      "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1696751562/portafolio-pp/10_vj7sgp.png",
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
