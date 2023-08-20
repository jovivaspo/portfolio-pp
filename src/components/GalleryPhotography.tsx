import Pozo from "../assets/images/pozo.jpg";
import Bonne from "../assets/images/bonne.jpg";
import Meteora from "../assets/images/meteora.jpg";
import FreeGeorgia from "../assets/images/Georgia.jpg";
import Greek from "../assets/images/Greek.jpg";
import LLorx from "../assets/images/Llorx.jpg";


const items = [
  {
    href: "https://www.flickr.com/photos/pocostales/53107162640/in/dateposted-public/",
    src: Meteora,
    title: "METEORA",
    gridRow: "1 / span 2",
    gridColumn: "1 / span 5", 
  },
  {
    href: "https://www.flickr.com/photos/pocostales/53106852484/in/dateposted-public/" ,
    src: FreeGeorgia,
    title:"Free Georgia",
    gridRow: "1 / span 1",
    gridColumn: "6 / span 3", 
  },
  {
    href: "https://www.flickr.com/photos/pocostales/25548368037/in/dateposted-public/" ,
    src: Pozo ,
    title: "El Pozo",
    gridRow: "3 / span 2",
    gridColumn: "1 / span 5", 
  },
  {
    href: "https://www.flickr.com/photos/pocostales/53106912618/in/dateposted-public/" ,
    src: Bonne,
    title:"Bonn en flor",
    gridRow: "2 / span 1",
    gridColumn: "6 / span 3", 
  },
  {
    href: "https://www.flickr.com/photos/pocostales/25548365717/in/dateposted-public/" ,
    src: LLorx ,
    title: "Llorx",
    gridRow: "3 / span 1",
    gridColumn: "6 / span 3", 
  },
  {
    href: "https://www.flickr.com/photos/pocostales/53107255178/in/dateposted-public/" ,
    src: Greek,
    title: "Greek architecture 02",
    gridRow: "4 / span 1",
    gridColumn: "6 / span 10", 
  },
];

export const GalleryPhotography = () => {
  return (
    <>
     <div
      className="mx-auto flex flex-col sm:grid gap-1 mt-36 mb-20 w-[90%] lg:w-[80%] justify-center sm:grid-cols-8 sm:grid-rows-4"
    >
      {items.map((item, index) => {
        return (
         
            <a
            style={{ gridRow: item.gridRow, gridColumn: item.gridColumn }}
            key={index} href={item.href} >
              <img
                src={item.src}
                className="w-full h-full object-cover"
                alt={item.title}
              />
            </a>
        );
      })}
    </div>
       <p className='text-center italic text-my-gray font-semibold mb-20'>You can see more photos <a className='hover:text-black' href="https://www.flickr.com/people/pocostales/">here</a></p>
    </>
   

    
  );
};
