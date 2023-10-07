import { Link } from "react-router-dom";
import Email from "../assets/images/social-media/email.png";
import In from "../assets/images/social-media/linkedin.png";
import Flicker from "../assets/images/social-media/flickr.png";

const menuFooter = [
  {
    text: "Videography",
    path: "/videography",
  },
  {
    text: "Photography",
    path: "/photography",
  },
  {
    text: "Weddings",
    path: "/weddings",
  },
];

const IconsMenu = [
  {
    src: Email,
    alt: "Email",
  },
  {
    src: Flicker,
    alt: "Flicker",
  },
  {
    src: In,
    alt: "LinkedIn",
  },
];

export const Footer = () => {
  return (
    <footer className="w-full min-h-[200px] bg-white flex flex-col gap-16 pt-[40px] md:mb-12">
      <ul className="w-full flex justify-center gap-5">
        {IconsMenu.map((item, index) => {
          return (
            <li
              className="w-[30px] h-[30px] rounded-full flex justify-center items-center transition-all hover:scale-110"
              key={index}
            >
              <Link to={"/"}>
                <img src={item.src} alt={item.alt} className="w-full h-full" />
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="w-full flex flex-col items-center justify-center gap-8 p-4 md:flex-row">
        {menuFooter.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="text-sm font-semibold sub-menu relative cursor-pointer text-my-gray hover:text-black"
                to={item.path}
              >
                {item.text.toLocaleUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
