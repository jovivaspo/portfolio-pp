import { useSizeScreen } from "../hooks/useSizeScreen";

interface HeaderProps {
  image?: string;
  video?: string;
  text?: string;
  position?: string;
}

export const Header: React.FC<HeaderProps> = ({
  image,
  video,
  text,
  position,
}) => {
  const { size } = useSizeScreen();
  return (
    <header className="relative h-[400px] bg-my-gray">
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-3xl md:text-5xl text-white font-bold z-20">
        {text?.toUpperCase()}
      </h2>
      {image ? (
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-10"></div>
          <img
            src={image}
            alt={text}
            style={{
              objectPosition: size.width > 1024 ? position : "center",
            }}
            className="object-center xl:object-[0px -250px] w-full h-full object-cover z-0"
          />
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-10"></div>
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
    </header>
  );
};
