import ImageAbout from "../assets/images/about.jpg";
const texts = [
  "¡Hola! I am Pablo, coming from Badajoz, a charming city in the western part of Spain, nestled close to the border with Portugal. My enthusiasm for imagery and sound led me to pursue Communication Audiovisual Degree at the University of Extremadura and complete a master's program in Audiovisual Content at the University of Valencia. I have an advanced level of English, basic level in German, and a quite good understanding of Portuguese due to my geographical proximity to the border.",
  " My journey into the professional world commenced early, with me embarking on endeavors at MediaUni, the online television of the University of Valencia, as well as at Canal Extremadura. Here, I had the privilege to partake in live television programs as a camera assistant in the studio. Further along, at ALCOR Extremadura, I took on the roles of both camera operator and video editor for orienteering sports competitions known as Raids.",
  "My trajectory also reflects my unwavering determination to persevere and continue learning. Moreover, I flourished as a freelance artist, crafting a diverse array of videos and graphic designs for different brands and entities in various sectors. This adaptability and my skill for seamlessly fitting into different environments stand as vital attributes linked into my professional journey.",
  "My pursuit of growth led me to explore the world through voluntary work between 2014 and 2016, participating in the European Voluntary Service (EVS) program in the countries of Bulgaria, North Macedonia and the Czech Republic. These engagements were steeped in the field of audiovisual arts, enabling me to refine my skills in video recording, photography, editing, and the art of motion graphics.",
  "The story of my dedication to the field of audiovisual communication, emphasizing my commitment to continuous learning and exploring new opportunities, has been described in this script; to know the storyboard do not hesitate to navigate through this portfolio.",
];
export const About = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-8">
      <div className="my-4">
        <p className="text-center">
          <b>This is me</b>
        </p>
        <p className="my-4">PABLO POCOSTALES</p>
      </div>
      <div className="my-4 p-4 w-full md:w-1/2">
        <img src={ImageAbout} alt="About Pablo Pocostales" />
      </div>
      <div className="my-4 p-4 w-full md:w-3/4">
        <p className="text-center my-4">
          <b>My story</b>
        </p>
        {texts.map((text, index) => {
          return <p key={index} className="my-8">{text}</p>;
        })}
       
      </div>
    </div>
  );
};
