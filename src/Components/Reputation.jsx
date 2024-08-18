// Import necessary icons from react-icons library
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiBuildingApartmentDuotone } from "react-icons/pi";
import { MdEngineering } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';

export const Rep = () => {
  // State to track if the section is visible on the screen
  const [isVisible, setIsVisible] = useState(false);
  
  // useRef hook to reference the section element in the DOM
  const sectionRef = useRef(null);

  // useEffect hook to handle visibility detection using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set isVisible based on whether the section is in view
      },
      {
        threshold: 0.2, // 20% of the section needs to be visible to trigger the observer
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Stop observing when the component unmounts
      }
    };
  }, []);

  // Array of icon components, each corresponding to a different card
  const icons = [
    <HiOutlineBuildingOffice2 key="1" className="w-[90%] h-[90%]" fill='#F9995D' />,
    <PiBuildingApartmentDuotone key="2" className="w-[90%] h-[90%]" fill='#F9995D' />,
    <MdEngineering key="3" className="w-[90%] h-[90%]"  />,
    <MdOutlineDesignServices key="4" className="w-[90%] h-[90%]" fill='#F9995D' />
  ];

  return (
    <div
      ref={sectionRef} // Attach the ref to this div to track its visibility
      className="md:w-[95%] w-[97%] py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
    >
      {/* Section Title with a transition effect based on visibility */}
      <div
        className={`flex items-center justify-center mb-16 font-bold transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`}
      >
        <p className="lg:text-4xl md:text-3xl text-2xl">Our Services</p>
      </div>

      {/* Grid layout for the service cards */}
      <div className="grid md:gap-3 gap-6 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: 'RESIDENTIAL CONSTRUCTION',
            services: ['Custom Homes', 'Multi-family Units', 'Renovations and Additions'],
            // To edit the title or services, simply change the text within the title and services array
          },
          {
            title: 'COMMERCIAL CONSTRUCTION',
            services: ['Office Buildings', 'Retail Spaces', 'Hospitality and Entertainment Venues'],
            // Edit the services for this card as needed
          },
          {
            title: 'PROJECT MANAGEMENT',
            services: ['Comprehensive Project Planning', 'Budget Management', 'Timely Project Delivery'],
            // Modify the services listed here to match your project management offerings
          },
          {
            title: 'DESIGN AND BUILD',
            services: [
              'Integrated Design and Construction Solutions',
              'Collaboration with Architects and Engineers',
              'Turnkey Solutions from Concept to Completion',
            ],
            // Update the design and build services if necessary
          },
        ].map((service, index) => (
          <div
            key={index} // Key for each service card to maintain list stability
            className={`flex flex-col justify-between md:p-2 p-6 border rounded shadow-sm transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
            } hover:shadow-lg hover:scale-105`} // Card hover effect and visibility transition
          >
            <div>
              {/* Icon display area for each card */}
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                {icons[index]} {/* Display the icon corresponding to the current card */}
              </div>
              {/* Service Title */}
              <h6 className="mb-2 font-semibold leading-5">{service.title}</h6>
              {/* Service Description */}
              <p className="mb-3 text-sm text-gray-900 leading-8">
                {service.services.map((item, idx) => (
                  <span key={idx}>
                    {item}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
