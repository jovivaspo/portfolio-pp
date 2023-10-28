import { Header } from "../components/Header";
import IframeYoutube from "../components/IframeYoutube";
import { IframeVimeo } from "../components/IframeVimeo";
import { InstagramCard } from "../components/InstagramCard";

const listVideoDeloittes = [
  "https://www.youtube.com/embed/KkM88VkOh-U?si=IeOgeIvML0baflEP",
  "https://www.youtube.com/embed/GV4z9GbN_lA?si=mvqxx_PrY9nTkhmG",
  "https://www.youtube.com/embed/Z3eNm7YTIKc?si=WlfVHHcWCAoaMaOC",
  "https://www.youtube.com/embed/I_THg7qQD2I?si=1zg87MIZy9FnPQgu",
  "https://www.youtube.com/embed/ZPU_PM-zmEc?si=nYAWkBzf1ta5SUiO",
  "https://www.youtube.com/embed/onNR_bSU_xc?si=Lh312vJkLx9oiVbm",
  "https://www.youtube.com/embed/imidFiPpvsk?si=DZBP3tIJThZ_kSxB",
  "https://www.youtube.com/embed/W7X1BMFmp2k?si=dZaInHlWKmx481q4",
  "https://www.youtube.com/embed/syDw6TDn6rE?si=BA5YuaWB8IfikbPk",
  "https://www.youtube.com/embed/IMGbEFt0Xrs?si=y722lcPELSBXzp6x",
  "https://www.youtube.com/embed/wIcR96jOw3U?si=jh8SZ1l5DrZPEyhy",
  "https://www.youtube.com/embed/fj_Vb1lEWBQ?si=r-NacyJ9t93KSRWA",
  "https://www.youtube.com/embed/4agLySyQDdI?si=ia-bBZBu0PIB1TfW",
  "https://www.youtube.com/embed/OUSyjRKO0fo?si=0h_Me0SJe8oHOyxp",
  "https://www.youtube.com/embed/Ps6R6MAyeiY?si=zuNbGEAv8s8DlTd0",
  "https://www.youtube.com/embed/385R2MXThWs?si=duT_p5SwI56TzH3K",
  "https://www.youtube.com/embed/e_SVIE7I_j0?si=nui9ELvpNcp_X2WI",
  "https://www.youtube.com/embed/jOmXGKgnNZE?si=VcfAP_7Wgt0LNs65",
  "https://www.youtube.com/embed/SRHr_8hfODU?si=n9leuMYBfPnZYHqr",
  "https://www.youtube.com/embed/dVUhmD3D9hE?si=CpDJ0AHnVzSGKhf4",
];

const listInstagram = [
  //
  {
    link: "https://www.instagram.com/p/CmgQW54rA6T/?igshid=MzRlODBiNWFlZA%3D%3D",
    src: "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698441968/portafolio-pp/01_hjnnkn.jpg",
  },
  {
    link: "https://www.instagram.com/p/ClOvy0SLA10/",
    src: "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698439387/portafolio-pp/02_qvdnio.jpg",
  },
  {
    link: "https://www.instagram.com/p/ClT0S2Kp7cS/",
    src: "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698439800/portafolio-pp/03_dpgelm.jpg",
  },
  {
    link: "https://www.instagram.com/p/CXL5NZ7sDW_/",
    src: "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698439752/portafolio-pp/09_ivpl9g.jpg",
  },
  {
    link: "https://www.instagram.com/p/B44mkyGjIz2/",
    src: "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698439979/portafolio-pp/14_k7g982.jpg",
  },
  {
    link: "https://www.instagram.com/p/CIGACdbAOao/",
    src: "https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698440056/portafolio-pp/11_auzleb.jpg",
  },
];

export const Colab = () => {
  return (
    <>
      <Header
        position="0% 50%"
        text="Colab/Featured"
        image="https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/t_header-feat-collaboration-crop/v1698424080/portafolio-pp/header-feat-collaboration_zahc6o.jpg"
      />

      <div className="w-full flex flex-col justify-center items-center mt-32">
        <div className="my-2 flex flex-col gap-2 px-8">
          <p className="text-center">
            <b>FREELANCE</b>
          </p>
          <p className="text-center text-my-gray">
            External collaboration taking on a supporting role in these
            audiovisual projects.{" "}
          </p>
        </div>
        <div className="mx-auto flex flex-col sm:grid grid-cols-2 gap-16 md:gap-24 mt-24 w-[90%] lg:w-[80%] justify-center">
          <IframeYoutube src="https://www.youtube.com/embed/sqH7l-3UNM0?si=c9aSOeDclfbeJ17-" />
          <IframeVimeo src="https://player.vimeo.com/video/297813109?h=624d13a6c3" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-32 px-8">
        <div className="my-2 flex flex-col gap-2">
          <p className="text-center">
            <b>DELOITTE</b>
          </p>
          <p className="text-center text-my-gray">
            Selection of the best videos created in collaboration with the
            Deloitte Brand and Content team. My contribution as film maker,
            video editor and motion designer.
          </p>
        </div>
        <div className="mx-auto flex flex-col sm:grid grid-cols-2 gap-16 md:gap-24 mt-24 w-[90%] lg:w-[80%] justify-center">
          {listVideoDeloittes.map((item, index) => {
            return <IframeYoutube key={index} src={item} />;
          })}
        </div>
        <div className="my-2 flex flex-col gap-2 mt-32 px-8">
          <p className="text-center">
            <b>DELOITTE - INSTAGRAM</b>
          </p>
          <p className="text-center text-my-gray">
            Samples of social media content created in collaboration with the
            Deloitte Brand and Content team.
          </p>
        </div>
        <div className="flex w-full justify-center px-8 lg:w-[90%] 2xl:[80%] gap-16 flex-wrap mt-24">
          {listInstagram.map((item, index) => {
            return (
              <InstagramCard key={index} src={item.src} link={item.link} />
            );
          })}
        </div>
      </div>
    </>
  );
};
