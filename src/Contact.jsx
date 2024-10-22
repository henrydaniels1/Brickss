import Navbar from "./Components/Navbar.jsx";
import Contact2 from './Components/Contact2.jsx';


export default function Contact() {
  return (
   <div className="w-full space-y-6 overflow-hidden" >
      <Navbar/>
      <div className="md:w-[95%] w-[97%] mx-auto">
        <Contact2/>
        
     </div>
    </div>
  )
}
