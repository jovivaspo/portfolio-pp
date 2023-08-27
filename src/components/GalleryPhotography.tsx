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
    
  },
  {
    href: "https://www.flickr.com/photos/pocostales/53106852484/in/dateposted-public/" ,
    src: FreeGeorgia,
    title:"Free Georgia",
   
  },
  {
    href: "https://www.flickr.com/photos/pocostales/25548368037/in/dateposted-public/" ,
    src: Pozo ,
    title: "El Pozo",
  
  },
  {
    href: "https://www.flickr.com/photos/pocostales/53106912618/in/dateposted-public/" ,
    src: Bonne,
    title:"Bonn en flor",
  
  },
  {
    href: "https://www.flickr.com/photos/pocostales/25548365717/in/dateposted-public/" ,
    src: LLorx ,
    title: "Llorx",
    
  },
  {
    href: "https://www.flickr.com/photos/pocostales/53107255178/in/dateposted-public/" ,
    src: Greek,
    title: "Greek architecture",
   
  },
];

export const GalleryPhotography = () => {
  return (
    <>
     <div
      className="mx-auto flex flex-col sm:grid grid-cols-2 gap-16 mt-36 mb-32 w-[90%] lg:w-[80%] justify-center"
    >
      {items.map((item, index) => {
        return (
         
            <a
            key={index} href={item.href} className=" w-full h-full flex flex-col gap-8 justify-center items-center" >
              <img
                src={item.src}
                className="w-full h-full object-cover"
                alt={item.title}
              />
              <span className="talic text-my-gray italic font-semibold">"{item.title}"</span>
            </a>
        );
      })}
    </div>
       <p className='text-center italic text-my-gray font-semibold mb-20'>You can see more photos here: <a className='hover:text-black' href="https://www.flickr.com/people/pocostales/">flickr</a></p>
    </>
   

    
  );
};
