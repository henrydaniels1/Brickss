import { Photo } from "./Components/Photo";
import Navbar from "./Components/Navbar.jsx";

const Gallery = () => {
  return (
    <div className="space-y-6">
      <Navbar />
      <div className="md:w-[95%] w-[93%] mx-auto text-4xl font-bold ">
        <span className="text-[#2947A9]">Photo</span><br/>
        Gallery
      </div>
      <Photo />
     
    </div>
  );
};

export default Gallery;
