import { Header } from "../components/Header";
import ImageCardPhotography from "../assets/images/headers/header-photography.webp";
import IframeYoutube from "../components/IframeYoutube";
import { IframeVimeo } from "../components/IframeVimeo";
import InstagramEmbed from "../components/InstagramEmbed";
import { TestItem } from "../components/Instagram/TestItem";

const listVideoDeloittes = [
  "https://www.youtube.com/embed/KkM88VkOh-U?si=IeOgeIvML0baflEP",
  "https://www.youtube.com/embed/GV4z9GbN_lA?si=mvqxx_PrY9nTkhmG",
  "https://www.youtube.com/embed/Z3eNm7YTIKc?si=WlfVHHcWCAoaMaOC",
  "https://www.youtube.com/embed/I_THg7qQD2I?si=1zg87MIZy9FnPQgu",
  "https://www.youtube.com/embed/ZPU_PM-zmEc?si=nYAWkBzf1ta5SUiO",
  "https://www.youtube.com/embed/9dCU-qHherY?si=Ws_JTsCu-yguoH8q",
  "https://www.youtube.com/embed/uQ2f0v8KRIY?si=G43tRik8eMaXQWYH",
  "https://www.youtube.com/embed/IqkO1pUo8hU?si=VnzegP3UatoMZL39",
  "https://www.youtube.com/embed/VSNY5keEFFY?si=wlYRxqXUMza8wIiP",
  "https://www.youtube.com/embed/onNR_bSU_xc?si=Lh312vJkLx9oiVbm",
  "https://www.youtube.com/embed/imidFiPpvsk?si=DZBP3tIJThZ_kSxB",
  "https://www.youtube.com/embed/W7X1BMFmp2k?si=dZaInHlWKmx481q4",
  "https://www.youtube.com/embed/syDw6TDn6rE?si=BA5YuaWB8IfikbPk",
  "https://www.youtube.com/embed/vQ2wKT1LXdU?si=F0l66Ic-5yLnRzar",
  "https://www.youtube.com/embed/IMGbEFt0Xrs?si=y722lcPELSBXzp6x",
  "https://www.youtube.com/embed/wIcR96jOw3U?si=jh8SZ1l5DrZPEyhy",
  "https://www.youtube.com/embed/inFIa-ycWRQ?si=kxoXtGXYgeIXxuqg",
  "https://www.youtube.com/embed/9UkoW8JyKWI?si=UKl5Bf3pHaLJiyug",
  "https://www.youtube.com/embed/113fDnSI094?si=dkuba9WLM82-IYMd",
  "https://www.youtube.com/embed/fj_Vb1lEWBQ?si=r-NacyJ9t93KSRWA",
  "https://www.youtube.com/embed/4agLySyQDdI?si=ia-bBZBu0PIB1TfW",
  "https://www.youtube.com/embed/OUSyjRKO0fo?si=0h_Me0SJe8oHOyxp",
  "https://www.youtube.com/embed/Ps6R6MAyeiY?si=zuNbGEAv8s8DlTd0",
  "https://www.youtube.com/embed/385R2MXThWs?si=duT_p5SwI56TzH3K",
  "https://www.youtube.com/embed/e_SVIE7I_j0?si=nui9ELvpNcp_X2WI",
  "https://www.youtube.com/embed/jOmXGKgnNZE?si=VcfAP_7Wgt0LNs65",
  "https://www.youtube.com/embed/SRHr_8hfODU?si=n9leuMYBfPnZYHqr",
  "https://www.youtube.com/embed/dVUhmD3D9hE?si=CpDJ0AHnVzSGKhf4",
  "https://www.youtube.com/embed/wsSORomC5mw?si=jwFoo_xWqEnq6L0f",
  "https://www.youtube.com/embed/IxojWpJOtOw?si=DU1wuN2F4DF4MPkc",
];

export const Colab = () => {
  return (
    <>
      <Header
        position="0% 90%"
        text="Colab/Featured"
        image={ImageCardPhotography}
      />

      <div className="w-full flex flex-col justify-center items-center mt-32">
        <div className="my-2 flex flex-col gap-2">
          <p className="text-center">
            <b>EXTERNAL VIDEOS</b>
          </p>
          <p className="text-center text-my-gray">Texto random aquí......</p>
        </div>
        <div className="mx-auto flex flex-col sm:grid grid-cols-2 gap-16 md:gap-24 mt-16 mb-16 w-[90%] lg:w-[80%] justify-center">
          <IframeYoutube src="https://www.youtube.com/embed/sqH7l-3UNM0?si=c9aSOeDclfbeJ17-" />
          <IframeVimeo src="https://player.vimeo.com/video/297813109?h=624d13a6c3" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-16">
        <div className="my-2 flex flex-col gap-2">
          <p className="text-center">
            <b>COLAB</b>
          </p>
          <p className="text-center text-my-gray">Texto random aquí......</p>
        </div>
        <div className="mx-auto flex flex-col sm:grid grid-cols-2 gap-16 md:gap-24 mt-16 mb-16 w-[90%] lg:w-[80%] justify-center">
          {listVideoDeloittes.map((item, index) => {
            return <IframeYoutube key={index} src={item} />;
          })}
        </div>
        <InstagramEmbed embedCode={TestItem} />
      </div>
    </>
  );
};
