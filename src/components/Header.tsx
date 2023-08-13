
interface HeaderProps{
    image?: string,
    text?: string
}

export const Header: React.FC<HeaderProps> = ({image, text}) => {
  return (
    <header className="relative h-[400px] bg-pink-600">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white font-thin z-20">{text?.toUpperCase()}</h2>
       { image && <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
            <img src={image} alt={text} className="w-full h-full object-cover z-0"/>
        </div>}
    </header>
  )
}
