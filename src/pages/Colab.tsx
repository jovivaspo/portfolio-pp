import { Header } from '../components/Header';
import { IframeVimeo } from '../components/IframeVimeo';
import IframeYoutube from '../components/IframeYoutube';
import { InstagramCard } from '../components/InstagramCard';

const listVideoDeloittes = [
  // Videos nuevos 2025 (orden cronológico inverso)
  'https://www.youtube.com/embed/40qWikqx9hY',
  'https://www.youtube.com/embed/TMihgTLWVqI',
  'https://www.youtube.com/embed/LcXNifMrBtI',
  'https://www.youtube.com/embed/-caHC6mEImw',
  'https://www.youtube.com/embed/xipBjnNDA08',
  'https://www.youtube.com/embed/f772AM5loDg',
  'https://www.youtube.com/embed/1KiR-Yl0FZM',
  // Videos anteriores
  'https://www.youtube.com/embed/DbqdB3LL_rU',
  'https://www.youtube.com/embed/JzJ_SLuC8Kg',
  'https://www.youtube.com/embed/WvF0FkWzcuA',
  'https://www.youtube.com/embed/11LWXyeejQo',
  'https://www.youtube.com/embed/KkM88VkOh-U',
  'https://www.youtube.com/embed/GV4z9GbN_lA',
  'https://www.youtube.com/embed/Z3eNm7YTIKc',
  'https://www.youtube.com/embed/I_THg7qQD2I',
  'https://www.youtube.com/embed/ZPU_PM-zmEc',
  'https://www.youtube.com/embed/onNR_bSU_xc',
  'https://www.youtube.com/embed/imidFiPpvsk',
  'https://www.youtube.com/embed/W7X1BMFmp2k',
  'https://www.youtube.com/embed/syDw6TDn6rE',
  'https://www.youtube.com/embed/IMGbEFt0Xrs',
  'https://www.youtube.com/embed/wIcR96jOw3U',
  'https://www.youtube.com/embed/fj_Vb1lEWBQ',
  'https://www.youtube.com/embed/4agLySyQDdI',
  'https://www.youtube.com/embed/OUSyjRKO0fo',
  'https://www.youtube.com/embed/Ps6R6MAyeiY',
  'https://www.youtube.com/embed/385R2MXThWs',
  'https://www.youtube.com/embed/e_SVIE7I_j0',
  'https://www.youtube.com/embed/jOmXGKgnNZE',
  'https://www.youtube.com/embed/SRHr_8hfODU',
  'https://www.youtube.com/embed/dVUhmD3D9hE',
];

const listInstagram = [
  //
  {
    link: 'https://www.instagram.com/p/CmgQW54rA6T/?igshid=MzRlODBiNWFlZA%3D%3D',
    src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698441968/portafolio-pp/01_hjnnkn.jpg',
  },
  {
    link: 'https://www.instagram.com/p/ClOvy0SLA10/',
    src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698439387/portafolio-pp/02_qvdnio.jpg',
  },
  {
    link: 'https://www.instagram.com/p/ClT0S2Kp7cS/',
    src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698439800/portafolio-pp/03_dpgelm.jpg',
  },
  {
    link: 'https://www.instagram.com/p/CXL5NZ7sDW_/',
    src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698439752/portafolio-pp/09_ivpl9g.jpg',
  },
  {
    link: 'https://www.instagram.com/p/B44mkyGjIz2/',
    src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698439979/portafolio-pp/14_k7g982.jpg',
  },
  {
    link: 'https://www.instagram.com/p/CIGACdbAOao/',
    src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698440056/portafolio-pp/11_auzleb.jpg',
  },
];

export const Colab = () => {
  return (
    <>
      <Header
        position='0% 50%'
        text='Feat/Collaboration'
        image='https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/t_header-feat-collaboration-crop/v1698424080/portafolio-pp/header-feat-collaboration_zahc6o.jpg'
      />

      <div className='w-full flex flex-col justify-center items-center mt-32'>
        <div className='my-2 flex flex-col gap-2 px-8'>
          <p className='text-center'>
            <b>FREELANCE</b>
          </p>
          <p className='text-center text-my-gray'>External collaboration taking on a supporting role in these audiovisual projects. </p>
        </div>
        <div className='mx-auto flex flex-col sm:grid grid-cols-2 gap-16 md:gap-24 mt-24 w-[90%] lg:w-[80%] justify-center'>
          <IframeYoutube src='https://www.youtube.com/embed/sqH7l-3UNM0?si=c9aSOeDclfbeJ17-' />
          <IframeVimeo src='https://player.vimeo.com/video/297813109?h=624d13a6c3' />
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center mt-32 px-8'>
        <div className='my-2 flex flex-col gap-2'>
          <p className='text-center'>
            <b>DELOITTE</b>
          </p>
          <p className='text-center text-my-gray'>
            Selection of the best videos created in collaboration with the Deloitte Brand and Content team. My contribution as film maker, video editor and motion designer.
          </p>
        </div>
        <div className='mx-auto flex flex-col sm:grid grid-cols-2 gap-16 md:gap-24 mt-24 w-[90%] lg:w-[80%] justify-center'>
          {listVideoDeloittes.map((item, index) => {
            return <IframeYoutube key={index} src={item} />;
          })}
        </div>
        <div className='my-2 flex flex-col gap-2 mt-32 px-8'>
          <p className='text-center'>
            <b>DELOITTE - INSTAGRAM</b>
          </p>
          <p className='text-center text-my-gray'>Samples of social media content created in collaboration with the Deloitte Brand and Content team.</p>
        </div>
        <div className='flex w-full justify-center px-8 lg:w-[90%] 2xl:[80%] gap-16 flex-wrap mt-24'>
          {listInstagram.map((item, index) => {
            return <InstagramCard key={index} src={item.src} link={item.link} />;
          })}
        </div>
      </div>
    </>
  );
};
