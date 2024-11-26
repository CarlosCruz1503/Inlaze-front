import Percentage from "./ui/percentaje";
import Favorite from "./ui/favorite";
import Po from '@/app/img/po.png';
export default function Header(): JSX.Element {
  
  const backgroundImageStyle = {
    backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${Po.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "37vh",
    color: "white",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "end",
    boxShadow:"inset 0px -75px 50px 30px black"
    
  };

  return (
    <div className="w-full bg-black flex " style={backgroundImageStyle}>
      <div className="ml-8 my-4">
        <h1 className="">Kung Fu Panda 4</h1>
        <h4 className="hidden md:block">
          Join Po and the Furious Five on a new epic adventure! Discover the
          power of friendship and the strength within! Get ready to unleash your
          inner warrior! 🥋✨
        </h4>
      </div>
      <div className="flex items-center justify-end mr-8 my-4 max-w-48">
        <div className="flex items-center justify-end max-w-20">
          <Favorite ></Favorite>
        </div>

        <Percentage size={16} value={97}></Percentage>
      </div>
    </div>
  );
}
