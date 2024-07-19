// import Spline from '@splinetool/react-spline';
// import Nav from './Nav.jsx';
import Navbar from './Navbar.jsx'
import ArchiBg from '../assets/hou.mp4'

export default function Landing ()
{
  

  

  return (
    // <div className='z-10 h-[100vh] bg-red-500'>
      
    //   <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
    //     <h1 className="text-white text-4xl">Architecture.Design.Visualization</h1>
    //   </div>
      
      
      
    // </div>
     <div className='h-screen w-full  relative overflow-hidden'>
      <video src={ArchiBg} autoPlay loop muted className=' absolute top-0 left-0 w-full h-full object-cover' />
       
      {/* <Nav /> */ }
      <Navbar/>

         
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
      <h1 className="text-white md:text-4xl text-2xl font-bold">Architecture.Design.Visualization</h1>
       </div>
   
      <div>
        henry
      </div>
      
      
    </div>
  )
}
