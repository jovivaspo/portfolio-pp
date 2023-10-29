import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LogoAnimated } from "./LogoAnimated";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "My Work", path: "" },
  { name: "Who I am", path: "/about" },
  {
    name: "My Gear",
    path: "https://kit.co/pablopocostales/my-filming-equipment",
  },
  { name: "Contact", path: "/contact" },
];

const subMenuItemsMyWorks = [
  { name: "Videography", path: "videography" },
  { name: "Photography", path: "photography" },
  { name: "Feat/Colab", path: "colab" },
  { name: "Designs", path: "designs" },
];

export const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  const handleMenu = () => {
    ref.current?.classList.toggle("translate-x-0");
  };

  return (
    <nav className="w-full h-[180px] bg-white flex items-center justify-between p-[20px] pr-[40px] md:pr-[20px]">
      <ul
        ref={ref}
        className="flex flex-col w-screen h-screen fixed top-0 left-0 p-10 -translate-x-full transition-transform bg-white z-50 md:translate-x-0 md:relative md:flex-row md:h-full lg:w-[calc(50%-40px)] md:items-center gap-5 pl-10"
      >
        <button
          className="md:hidden absolute top-5 right-5"
          onClick={handleMenu}
        >
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
          if (!item.path) {
            return (
              <li
                onMouseEnter={() => setShowSubMenu(true)}
                onMouseLeave={() => setShowSubMenu(false)}
                key={index}
                className=" text-sm  sub-menu relative cursor-pointer text-my-gray hover:text-black"
              >
                {item.name.toLocaleUpperCase()}
                {showSubMenu && (
                  <ul className="md:absolute bg-white md:bg-my-gray opacity-90 flex-col gap-4 rounded-md py-2 px-2 z-20 md:animate-fade-up md:animate-once md:animate-duration-150 md:animate-delay-100 md:animate-ease-linear md:animate-fill-backwards">
                    {subMenuItemsMyWorks.map((item, index) => {
                      return (
                        <li key={index} className="p-2">
                          <Link
                            className="text-xs p-2 text-my-gray md:text-white hover:opacity-50 transition-all"
                            to={item.path}
                            onClick={handleMenu}
                          >
                            {item.name.toLocaleUpperCase()}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          }
          if (item.name === "My Gear") {
            return (
              <li key={index} onClick={handleMenu}>
                <a
                  className="text-my-gray text-sm  hover:text-black transition-all"
                  href={item.path}
                  target="_blank"
                >
                  {item.name.toLocaleUpperCase()}
                </a>
              </li>
            );
          }
          return (
            <li key={index} onClick={handleMenu}>
              <Link
                className="text-my-gray text-sm  hover:text-black transition-all"
                to={item.path}
              >
                {item.name.toLocaleUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="h-full flex items-center text-center lg:flex-grow">
        <LogoAnimated />
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
