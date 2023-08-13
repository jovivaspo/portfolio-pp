import { Link } from "react-router-dom"
import { MailIcon } from "./Icons/Mail"
import { FacebookIcon } from "./Icons/Facebook"
import { InstaIcon } from "./Icons/Insta"
import { YoutubeIcon } from "./Icons/Youtube"

const menuFooter = [
    {
        text: "Videography",
        path:"/videograpy"
    },
    {
        text: "Photos",
        path:"/photos"
    },
    {
        text: "Weddings",
        path:"/weddings"
    }

]

export const Footer = () => {
  return (
    <footer className="w-full h-[200px] bg-white flex flex-col gap-16 pt-[40px]">
            <ul className="w-full flex justify-center gap-5">
                <li className="w-[38px] h-[38px] rounded-full bg-my-gray hover:bg-black flex justify-center items-center transition-all"><Link to={"/"} ><MailIcon color="white" /></Link></li>
                <li className="w-[38px] h-[38px] rounded-full bg-my-gray hover:bg-black flex justify-center items-center transition-all"><Link to={"/"} ><FacebookIcon color="white" /></Link></li>
                <li className="w-[38px] h-[38px] rounded-full bg-my-gray hover:bg-black flex justify-center items-center transition-all"><Link to={"/"} ><InstaIcon color="white" /></Link></li>
                <li className="w-[38px] h-[38px] rounded-full bg-my-gray hover:bg-black flex justify-center items-center transition-all"><Link to={"/"} ><YoutubeIcon color="white" /></Link></li>
            </ul>
            <ul className="w-full flex justify-center gap-10">
                {
                    menuFooter.map((item, index) => {
                        return <li key={index}><Link className="text-lg text-my-gray hover:text-black transition-all" to={item.path}>{item.text.toLocaleUpperCase()}</Link></li>
                    })
                }
            </ul>
        
    </footer>
  )
}
