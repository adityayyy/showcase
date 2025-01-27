'use client';
import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FiPhone } from 'react-icons/fi';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

export default function Home() {
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

  const aboutText = `Welcome to Blooming Tech Solutions (BTS) Belagavi. Your Premier Digital Advertising Agency.
  At Blooming Tech Solutions, we specialize in transforming the way brands connect with their audiences through innovative digital advertising solutions. As a leading advertising agency, we focus on displaying advertisements on high-quality digital screens strategically placed in high-traffic areas. Our mission is to help businesses amplify their message, enhance brand visibility, and drive customer engagement in an increasingly digital world.`;

  const whoWeAreText = `Founded on the principles of creativity, innovation, and results-driven strategies, BTS Belagavi has quickly
  established itself as a trusted partner for businesses looking to elevate their advertising efforts. Our team
  comprises experienced professionals from diverse backgrounds in marketing, design, and technology, all dedicated
  to delivering exceptional service and impactful advertising solutions.`;

  const ourServicesText = `- Digital Screen Advertising: Displaying eye-catching advertisements on digital screens strategically placed in high-traffic areas.
  - Content Creation: Developing engaging visuals and messages that resonate with your target audience.
  - Targeted Advertising Solutions: Using advanced analytics to create campaigns that reach the right people.
  - Campaign Management: Managing campaigns from planning and execution to monitoring and reporting.
  - Consultation Services: Providing guidance to identify the best advertising strategies for your business.`;

  const whyChooseUsText = `- Innovative Solutions: Embracing the latest technologies to create impactful digital campaigns.
  - Customized Approach: Tailoring services to reflect your brand's identity and objectives.
  - Proven Results: Delivering increased visibility, foot traffic, and sales for our clients.
  - Dedicated Support: Offering exceptional customer service for a seamless experience.`;

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
      <section className="h-[75vh] overflow-hidden bg-gray-100 relative">
        <div
          className="absolute left-0 w-full h-full flex items-center justify-center z- bg-black bg-opacity-50"
          style={{ transform: 'translateY(10%)' }}
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Welcome to Blooming Tech Solutions
          </h1>
        </div>

        <div
          ref={imageContainerRef}
          className="flex h-full w-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-screen h-[75vh] snap-center"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-20"
        >
          <FaLongArrowAltLeft size={10} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-20"
        >
          <FaLongArrowAltRight size={10} />
        </button>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="p-6 bg-indigo-100 transition-all duration-300 overflow-hidden"
      >
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">About Us</h2>
        <p className="text-gray-600">{aboutText}</p>

        <h3 className="text-xl font-semibold text-indigo-700 mt-4">Who We Are</h3>
        <p className="text-gray-600">{whoWeAreText}</p>

        <div
          style={{
            maxHeight: isExpanded ? 'none' : '190px',
            overflow: isExpanded ? 'visible' : 'hidden',
            transition: 'max-height 0.3s ease-out',
          }}
        >
          {isExpanded && (
            <>
              <h3 className="text-xl font-semibold text-indigo-700 mt-4">Our Services</h3>
              <p className="text-gray-600">{ourServicesText}</p>

              <h3 className="text-xl font-semibold text-indigo-700 mt-4">Why Choose Us?</h3>
              <p className="text-gray-600">{whyChooseUsText}</p>
            </>
          )}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-indigo-600 mt-4"
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="p-6 bg-teal-50 mt-0">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">Our Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {showcaseImages.map((src, index) => (
            <div key={index} className="relative">
              <img
                src={src}
                alt={`Showcase Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-center">
                Image {index + 1} description
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="p-6 bg-rose-50 flex items-center justify-center"
      >
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-rose-700 mb-6 text-center">
            Contact Us
          </h2>
          <div className="space-y-4 text-gray-700">
            <center>
              <p>
                <font size="5" color="red" face="impact">
                  Blooming
                  <font size="5" color="blue" face="impact">
                    Tech
                    <font size="5" color="darkgreen" face="impact">
                      Solutions
                      <font size="5" color="red" face="impact">
                        Belagavi
                      </font>
                    </font>
                  </font>
                </font>
              </p>
              <p>
                <strong>
                  Plot No 99, "Neelraj Nilay", Gulmohar marg, Vinayak Nagar,
                  Belagavi 590001
                </strong>
              </p>
              <p>
                <br></br>
                <font size="4" color="darkblue" face="impact">
                  Contact Numbers:
                </font>
              </p>
            </center>
            <p className="flex items-center gap-2">
              <FiPhone className="text-blue-500" /> 0831-2345321
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" /> +919740915141
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" /> +919949430103
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-red-500" />
              info@bloomingtechsolutions.in
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" className="text-blue-600">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com" target="_blank" className="text-pink-500">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com" target="_blank" className="text-red-600">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="p-6 bg-green-50">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Services</h2>
        <div className="space-y-4 text-gray-700">
          <p><strong>1. Digital Advertising:</strong> High-quality ads displayed on strategically placed screens.</p>
          <p><strong>2. Campaign Management:</strong> End-to-end planning, execution, and monitoring.</p>
          <p><strong>3. Creative Content:</strong> Stunning visuals and impactful messaging tailored to your audience.</p>
          <p><strong>4. Analytics-Driven Insights:</strong> Data-backed strategies to enhance ad reach and effectiveness.</p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-2 mt-auto">
        <p>&copy; {new Date().getFullYear()} Blooming Tech Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}
