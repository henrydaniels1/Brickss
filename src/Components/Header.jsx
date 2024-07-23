// import Spline from '@splinetool/react-spline';
// import ArchiBg from '../assets/hou.mp4'
import ArchiBg from '../assets/build2.jpg'


export default function Header ()
{
  

  

  return (
     <div className='h-screen w-full  relative overflow-hidden'>
          {/* <video src={ ArchiBg } autoPlay loop muted className=' absolute top-0 left-0 w-full h-full object-cover' /> */}
          <img src={ArchiBg} className=' absolute top-0 left-0 w-full h-full object-cover'/>
         
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
      <h1 className="text-white md:text-4xl text-2xl font-bold">Architecture.Design.Visualization</h1>
       </div>
   
      
      
     
      
      
    </div>
  )
}
