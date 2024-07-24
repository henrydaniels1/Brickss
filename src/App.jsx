import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Gallery from './Gallery.jsx';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import {Foot} from './Components/Foot.jsx';


const App = () => {
  return (
    <div className="h-full w-full space-y-6">
      
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Router>

      <Foot/>
     
     
    </div>
    
    
  );
};

export default App;
