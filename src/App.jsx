import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => {
  return (
    <div className="h-full">
      
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Router>
      
     
    </div>
    
    
  );
};

export default App;
