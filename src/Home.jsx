// import Nav from './Components/Nav.jsx';
// import Landing from './Components/Landing.jsx';
// import ArchiBg from './assets/archi.mp4'
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import {HeaderS} from "./Components/Header2";
import {Content1} from "./Components/Header3";
// import ThreeDCardDemo from './Components/Card.jsx'
// import Foot from "./Components/Footer";
// import {Foot} from './Components/Foot.jsx'

const Home = () => {
  return (
   
    <div className='h-full w-full space-y-6'>
      {/* <video src={ArchiBg} autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover' /> */}
       
      {/* <Landing /> */ }
      <Navbar />
      <Header />
      <HeaderS />
      <Content1 />
      {/* <ThreeDCardDemo/> */}
     {/* <Foot /> */}
      
      
    </div>
  );
};

export default Home;
