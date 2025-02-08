'use client';
import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />

      <section className="h-[75vh] overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 relative">
        <div
          className="absolute left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60"
          style={{ transform: 'translateY(10%)' }}
        >
          <h1 className="font-serif font-semibold text-white text-4xl md:text-6xl font-bold text-center">
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

        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg z-20"
        >
          <FaLongArrowAltLeft size={10} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg z-20"
        >
          <FaLongArrowAltRight size={10} />
        </button>
      </section>

      <section id="contact" className="p-6 bg-blue-50 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center">
            Contact Us
          </h2>
          <p className="text-2xl font-bold text-center mb-4">Shri Sai Enterprizes</p>
          <div className="space-y-4 text-slate-700">
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
            <p className="text-center font-semibold mt-4">
              Shop No. 1, CTS No. 7905, Sector No. 12, Mahantesh Nagar, M.M. Extension, Belagavi.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-2 mt-auto">
        <p>&copy; {new Date().getFullYear()} Shri Sai Enterprises. All rights reserved.</p>
      </footer>
    </div>
  );
}
