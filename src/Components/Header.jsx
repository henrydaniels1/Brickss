// import Spline from '@splinetool/react-spline';
// import ArchiBg from '../assets/hou.mp4'
import ArchiBg from '../assets/Hero.png'


export default function Header ()
{
  

  

  return (
     <div className='h-screen w-full  relative overflow-hidden '>
          {/* <video src={ ArchiBg } autoPlay loop muted className=' absolute top-0 left-0 w-full h-full object-cover' /> */}
          <img src={ArchiBg} className=' absolute top-0 left-0 w-full h-full object-cover'/>
         
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
      <h1 className="text-black md:text-4xl text-2xl font-bold">Architecture.Design.Visualization</h1>
       </div>
{/*       
      <div className=" h-full flex-col flex md:flex-row md:w-[95%] w-[97%] justify-between mx-auto">
        <div className="md:w-1/2 w-full  flex flex-col  justify-center lg:text-6xl bg-blue-gray-500 md:text-4xl font-bold text-2xl text-black">
          <p>Building things</p>
          <br />
          <span>Is our <span className='text-[#2947A9]'>mission.</span> </span>
        </div>
        <div className="md:w-1/2 w-full">
          <img src={ ArchiBg } className="h-full w-full object-cover"/>
        </div>
      </div> */}
   
      
      
     
      
      
    </div>
  )
}
