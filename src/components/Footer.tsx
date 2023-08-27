import { Link } from "react-router-dom"
import { MailIcon } from "./Icons/Mail"

import { InIcon } from "./Icons/In"
import { FlickerIcon } from "./Icons/Flicker"

const menuFooter = [
    {
        text: "Videography",
        path:"/videography"
    },
    {
        text: "Photography",
        path:"/photography"
    },
    {
        text: "Weddings",
        path:"/weddings"
    }

]

export const Footer = () => {
  return (
    <footer className="w-full min-h-[200px] bg-white flex flex-col gap-16 pt-[40px] md:mb-12">
            <ul className="w-full flex justify-center gap-5">
                <li className="w-[38px] h-[38px] rounded-full bg-my-gray hover:bg-black flex justify-center items-center transition-all"><Link to={"/"} ><MailIcon color="white" /></Link></li>
                <li className="w-[38px] h-[38px] rounded-full bg-my-gray hover:bg-black flex justify-center items-center transition-all"><Link to={"/"} ><FlickerIcon color="white" /></Link></li>
                <li className="w-[38px] h-[38px] rounded-full bg-my-gray hover:bg-black flex justify-center items-center transition-all"><Link to={"/"} ><InIcon color="white" /></Link></li>
            </ul>
            <ul className="w-full flex flex-col items-center justify-center gap-8 p-4 md:flex-row">
                {
                    menuFooter.map((item, index) => {
                        return <li key={index}><Link className="text-sm font-semibold sub-menu relative cursor-pointer text-my-gray hover:text-black" to={item.path}>{item.text.toLocaleUpperCase()}</Link></li>
                    })
                }
            </ul>
        
    </footer>
  )
}
