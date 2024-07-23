// import Nav from './Components/Nav.jsx';
// import Landing from './Components/Landing.jsx';
// import ArchiBg from './assets/archi.mp4'
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
// import Foot from "./Components/Footer";
// import Foot from './Components/Footer.jsx'

const Home = () => {
  return (
   
    <div className='h-screen w-full'>
      {/* <video src={ArchiBg} autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover' /> */}
       
      {/* <Landing /> */ }
      <Navbar />
      <Header />
     {/* <Foot /> */}
      
      
    </div>
  );
};

export default Home;
