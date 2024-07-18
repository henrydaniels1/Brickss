// import Nav from './Components/Nav.jsx';
import Landing from './Components/Landing.jsx';
import Land from './Components/Land.jsx';
// import ArchiBg from './assets/archi.mp4'

const Home = () => {
  return (
   
    <div className='h-screen w-full'>
      {/* <video src={ArchiBg} autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover' /> */}
       
      {/* <Nav /> */}
      <Landing />
      <Land/>
      
      
    </div>
  );
};

export default Home;
