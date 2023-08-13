import { Link } from "react-router-dom"

const menuItems  =[
   { name: "Home", path: "/" },
   { name: "Who Am I", path: "/who-am-i" },
   { name: "My Gear", path: "/my-gear" },
   { name: "Contact", path: "/contact" },
]


export const Navbar = () => {
  return (
    <nav className="w-full h-[180px] bg-white flex items-center justify-between p-[20px] ">
        <ul className="flex h-full w-[calc(50%-40px)] items-center gap-5 pl-10">
            {
                menuItems.map((item, index) => {
                    return <li key={index}><Link className="text-my-gray hover:text-black transition-all" to={item.path}>{item.name.toLocaleUpperCase()}</Link></li>
                })
            }
        </ul>
        <div className="h-full flex items-center text-center flex-grow">
            <img src="/logo-.png" alt="" className="h-[80px] text-center"/>
        </div>
    </nav>
  )
}
