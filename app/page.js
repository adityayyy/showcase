'use client';
import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FiPhone } from 'react-icons/fi';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Home() {
  // Set your location here (used for the clickable link below)
  const locationQuery = "";
  const encodedLocation = encodeURIComponent(locationQuery);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const images = [
    '/images/slide_1.jpg',
    '/images/slide_2.jpg',
    '/images/slide_3.jpg',
    '/images/slide_4.jpg',
    '/images/slide_5.jpg',
    '/images/slide_6.jpg',
    '/images/slide_7.jpg',
    '/images/slide_8.jpg',
    '/images/slide_9.jpg',
    '/images/slide_10.jpg',
  ];

  const showcaseImages = [
    '/images/showcase_1.jpg',
    '/images/showcase_2.jpg',
    '/images/showcase_3.jpg',
    '/images/showcase_4.jpg',
    '/images/showcase_5.jpg',
    '/images/showcase_6.jpg',
  ];

  const imageContainerRef = useRef(null);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    scrollToImage(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    scrollToImage(prevIndex);
  };

  const scrollToImage = (index) => {
    if (imageContainerRef.current) {
      const offset = index * window.innerWidth;
      imageContainerRef.current.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    }
  };

  const aboutText = `Welcome to Shri Sai Enterprizes, your trusted provider of solar rooftop solutions and solar water heaters. We are dedicated to harnessing the power of renewable energy to create a sustainable and energy-efficient future. Our mission is to offer high-quality solar solutions that help homeowners and businesses reduce their carbon footprint and energy costs.`;

  const whoWeAreText = `At Shri Sai Enterprizes, we are a team of passionate professionals committed to delivering top-tier solar energy products and services. With years of expertise in the renewable energy sector, we specialize in the design, installation, and maintenance of solar rooftops and solar water heating systems. Our focus is on providing reliable and cost-effective energy solutions that cater to the needs of both residential and commercial clients.`;
  
  const ourServicesText = `- Solar Rooftop Installation: Customized solar panel installations tailored to your energy needs, ensuring maximum efficiency and savings.
  - Solar Water Heaters: High-quality solar water heating systems designed to provide an eco-friendly and cost-effective hot water solution.
  - Maintenance & Support: Comprehensive maintenance services to keep your solar systems running optimally.
  - Energy Consultation: Expert guidance to help you choose the best solar solution based on your energy consumption and budget.`;
  
  const whyChooseUsText = `- Quality Assurance: We use only the best-in-class solar products and components to ensure long-lasting performance.
  - Expert Team: Our skilled professionals bring extensive knowledge and experience in solar energy solutions.
  - Cost Savings: Our solar solutions significantly reduce electricity bills, providing long-term financial benefits.
  - Sustainability Commitment: We prioritize eco-friendly energy solutions to promote a greener planet.
  - Customer Satisfaction: We are dedicated to delivering excellent service and support to ensure complete customer satisfaction.`;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Scrollable Images Section */}
      <section className="h-[60vh] overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 relative">
        <div
          className="absolute left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60"
          style={{ transform: 'translateY(5%)' }}
        >
          <h1 className="font-serif font-bold font-serif mb-12 text-white text-4xl md:text-6xl text-center">
            Shri Sai Enterprises
          </h1>
        </div>

        <div
          ref={imageContainerRef}
          className="flex h-full w-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-screen h-[60vh] snap-center"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Swipe Buttons without Backgrounds */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-20"
        >
          <IoIosArrowBack size={16} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-20"
        >
          <IoIosArrowForward size={16} />
        </button>
      </section>

      {/* About Us Section */}
      <section id="about" className="p-6 bg-slate-50 transition-all duration-300 overflow-hidden">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">About Us</h2>
        <p className="text-slate-700">{aboutText}</p>

        <h3 className="text-xl font-semibold text-slate-800 mt-4">Who We Are</h3>
        <p className="text-slate-700">{whoWeAreText}</p>

        <div
          style={{
            maxHeight: isExpanded ? 'none' : '190px',
            overflow: isExpanded ? 'visible' : 'hidden',
            transition: 'max-height 0.3s ease-out',
          }}
        >
          {isExpanded && (
            <>
              <h3 className="text-xl font-semibold text-slate-800 mt-4">Our Services</h3>
              <p className="text-slate-700">{ourServicesText}</p>

              <h3 className="text-xl font-semibold text-slate-800 mt-4">Why Choose Us?</h3>
              <p className="text-slate-700">{whyChooseUsText}</p>
            </>
          )}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 mt-4"
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </section>
      
      {/* Services Section */}
      <section id="services" className="p-6 bg-slate-100">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Services</h2>
        <div className="space-y-4 text-slate-700">
          <p>
            If leakage is the issue, we offer a complete range of services to diagnose and repair your roofing problems.
            Our expert team provides thorough inspections, high-quality materials, and professional repairs to ensure your roof remains secure and energy-efficient.
          </p>
          <p>
            In addition, we specialize in solar rooftop installations and solar water heating systems, helping you enhance property durability while reducing energy costs.
          </p>
          <p>
            Contact us today for a free consultation and let our specialists resolve your roofing concerns.
          </p>
        </div>
      </section>
      
      {/* Showcase Section */}
      <section id="showcase" className="p-6 bg-slate-200 mt-0">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {showcaseImages.map((src, index) => (
            <div key={index} className="relative">
              <img
                src={src}
                alt={`Showcase Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-6 bg-blue-50 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center">Contact Us</h2>
          <p className="text-2xl font-bold text-center mb-4">Shri Sai Enterprizes</p>
          <div className="space-y-4 text-slate-700 text-center">
            <p>
              <strong>Shop No. 1, CTS No. 7905, Sector No. 12, Mahantesh Nagar, M.M. Extension, Belagavi.</strong>
            </p>
            <p>
              <a href="https://maps.app.goo.gl/AEEEFsg1pyJPr1z58" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Click here for address
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-green-500" /> 
              <a href="tel:+918884119169" className="text-blue-600 underline">8884119169</a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-green-500" /> 
              <a href="tel:+918867308748" className="text-blue-600 underline">8867308748</a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-red-500" /> shrisaienterprises299@gmail.com
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-2 mt-auto">
        <p>&copy; {new Date().getFullYear()} Shri Sai Enterprizes. All rights reserved.</p>
      </footer>
    </div>
  );
}
