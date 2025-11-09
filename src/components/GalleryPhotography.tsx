import Bonne from '../assets/images/bonne.jpg';
import FreeGeorgia from '../assets/images/Georgia.jpg';
import Greek from '../assets/images/Greek.jpg';
import Ireland from '../assets/images/Ireland.jpg';
import Ireland1 from '../assets/images/Ireland-1.jpg';
import Italy from '../assets/images/Italy.jpg';
import LLorx from '../assets/images/LLorx.jpg';
import Meteora from '../assets/images/Meteora.jpg';
import Pozo from '../assets/images/pozo.jpg';
import Spain from '../assets/images/spain.jpg';
import Thailand1 from '../assets/images/Thailand-1.jpg';
import Thailand from '../assets/images/Thailand.jpg';
import { ButtonSeeMore } from './ButtonSeeMore';

const items = [
  {
    href: 'https://www.flickr.com/photos/pocostales/54490063770',
    src: Ireland,
    title: 'Ireland, 2025',
  },
  {
    href: 'https://www.flickr.com/photos/pocostales/54489905164',
    src: Ireland1,
    title: 'Ireland, 2025',
  },
  {
    href: 'https://www.flickr.com/photos/pocostales/53918163338/in/dateposted-public/',
    src: Thailand,
    title: 'Thailand, 2024',
  },
  {
    href: 'https://www.flickr.com/photos/pocostales/53917023307/in/dateposted-public/',
    src: Thailand1,
    title: 'Thailand, 2024',
  },
  {
    href: 'https://www.flickr.com/photos/pocostales/53918372780/in/dateposted-public/',
    src: Italy,
    title: 'Italy, 2024',
  },
  {
    href: 'https://www.flickr.com/photos/pocostales/53917042917/in/dateposted-public/',
    src: Spain,
    title: 'Spain, 2024',
  },
  {
    href: 'https://www.flickr.com/photos/pocostales/53107162640/in/dateposted-public/',
    src: Meteora,
    title: 'Greece, 2023',
  },
  {
    href: 'https://www.flickr.com/photos/pocostales/53106852484/in/dateposted-public/',
    src: FreeGeorgia,
    title: 'Georgia, 2023',
  },
  {
    href: 'https://www.flickr.com/photos/pocostales/53107255178/in/dateposted-public/',
    src: Greek,
    title: 'Greece, 2023',
  },
  {
    href: 'https://www.flickr.com/photos/pocostales/53106912618/in/dateposted-public/',
    src: Bonne,
    title: 'Germany, 2022',
  },
  {
    href: 'https://www.flickr.com/photos/pocostales/25548368037/in/dateposted-public/',
    src: Pozo,
    title: 'Portugal, 2017',
  },
  {
    href: 'https://www.flickr.com/photos/pocostales/25548365717/in/dateposted-public/',
    src: LLorx,
    title: 'Spain, 2017',
  },
];

export const GalleryPhotography = () => {
  return (
    <>
      <div className='mx-auto flex flex-col sm:grid grid-cols-2 gap-16 mt-36 mb-24 w-[90%] lg:w-[80%] justify-center'>
        {items.map((item, index) => {
          return (
            <a key={index} target='_blank' href={item.href} className=' w-full h-full flex flex-col gap-4 justify-center items-center'>
              <img src={item.src} className='w-full h-full object-cover' alt={item.title} />
              <span className='talic text-my-gray italic text-xs font-semibold'>{item.title}</span>
            </a>
          );
        })}
      </div>
      <div className='w-full flex justify-center'>
        {' '}
        <a href='https://www.flickr.com/people/pocostales/' target='_blank'>
          {<ButtonSeeMore />}
        </a>
      </div>
    </>
  );
};

//
