// import Spline from '@splinetool/react-spline';
// import Nav from './Nav.jsx';
// import Navbar from './Navbar.jsx'
// import ArchiBg from '../assets/hou.mp4'
// import ArchiBg from '../assets/build2.jpg'
import Header from "./Header"
import Navbar from './Navbar.jsx'
import { GalleryWithTab } from "./Gallery.jsx"


export default function Landing ()
{
  

  

  return (
     <div className='h-screen w-full  relative overflow-hidden'>
      
      <Navbar/>
      <Header />
      <GalleryWithTab/>
   
      
      
     
      
      
    </div>
  )
}
