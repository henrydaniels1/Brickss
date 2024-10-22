// import Nav from './Components/Nav.jsx';
// import Landing from './Components/Landing.jsx';
// import ArchiBg from './assets/archi.mp4'
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import {HeaderS} from "./Components/AboutUs";
import { Content1 } from "./Components/Project1";
import { Rep } from "./Components/Reputation"
import { Team } from "./Components/Team";
import ExampleComponent from './Components/Scroll'
// import ThreeDCardDemo from './Components/Card.jsx'
// import Foot from "./Components/Footer";
// import {Foot} from './Components/Foot.jsx'

const Home = () => {
  return (
   
    <div >
      {/* <video src={ArchiBg} autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover' /> */}
       <ExampleComponent/>
      <div className='h-full w-full space-y-6'>
      {/* <Landing /> */ }
      <Navbar />
      <Header /> <Rep/>
      <HeaderS />
      <Content1 />
      <Team/>
     </div>
      {/* <ThreeDCardDemo/> */}
     {/* <Foot /> */}
      
      
    </div>
  );
};

export default Home;
