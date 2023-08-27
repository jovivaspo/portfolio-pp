import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "My Work", path: "" },
  { name: "Who I am", path: "/about" },
  { name: "My Gear", path: "/my-gear" },
  { name: "Contact", path: "/contact" },
];

const subMenuItemsMyWorks = [
  { name: "Photography", path: "photography" },
  { name: "Videography", path: "videography" },
  { name: "Featured/colab", path: "/colab" },
  
];

export const Navbar = () => {
    const ref = useRef <HTMLUListElement>(null);
    const refSubMenu = useRef <HTMLUListElement>(null);

    const handleMenu = () => {
      ref.current?.classList.toggle("translate-x-0");
    }

    const handleSubMenu = () => {
      if(refSubMenu.current?.classList.contains("hidden")) {
        refSubMenu.current?.classList.remove("hidden");
       refSubMenu.current?.classList.add("flex");
      }else{
      refSubMenu.current?.classList.remove("flex");
        refSubMenu.current?.classList.add("hidden");
      }
    }

    useEffect(()=>{
      const handlerClick = (e: MouseEvent) => {
        const targetElement = e.target as HTMLElement;
        if(ref.current?.classList.contains("hidden") || targetElement.classList.contains("sub-menu")) return
          
        if(refSubMenu.current?.classList.contains("flex")) {
          refSubMenu.current?.classList.add("hidden");
        }}

        document.addEventListener("click", handlerClick);
        return () => {
          document.removeEventListener("click", handlerClick);
        }
      
    },[]) 

  return (
    <nav className="w-full h-[180px] bg-white flex items-center justify-between p-[20px] ">
      <ul ref={ref} className="flex flex-col w-screen h-screen fixed top-0 left-0 p-10 -translate-x-full transition-transform bg-white z-50 md:translate-x-0 md:relative md:flex-row md:h-full lg:w-[calc(50%-40px)] md:items-center gap-5 pl-10">
        <button className="md:hidden absolute top-5 right-5" onClick={handleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        {menuItems.map((item, index) => {
          if(!item.path){
            return (
              <li key={index} onClick={handleSubMenu} className="sub-menu relative cursor-pointer text-my-gray hover:text-black">{item.name.toLocaleUpperCase()} 
              <ul ref={refSubMenu} className="md:absolute bg-white flex-col gap-4 rounded-md py-2 pr-2  hidden">
                {
                  subMenuItemsMyWorks.map((item, index) => {
                    return <li key={index}><Link 
                    className=" text-my-gray p-2 hover:text-black  transition-all" to={item.path}>{item.name.toLocaleUpperCase()}</Link></li>
                  })
                }
              </ul>
              </li>
            )
          }
          return (
            <li key={index} onClick={handleMenu}>
              <Link
                className="text-my-gray hover:text-black transition-all"
                to={item.path}
              >
                {item.name.toLocaleUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="h-full flex items-center text-center lg:flex-grow">
        <img src="/logo-.png" alt="" className="h-[80px] text-center" />
      </div>
      <button className="md:hidden" onClick={handleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </button>
    </nav>
  );
};
