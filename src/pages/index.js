import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Home() {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  const [viewportWidth, setViewportWidth] = useState(0);

  const roles = ['Role 1', 'Role 2', 'Role 3', 'Role 4', 'Role 5', 'Role 6', 'Role 7', 'Role 8'];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewportWidth(window.innerWidth);

      const handleResize = () => {
        setViewportWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: 64 }
  };

  return (
    <>
      <Head>
        <title>Growtopia Private Server</title>
      </Head>

      {/* Background */}
      <div
        style={{ backgroundImage: 'url(/gtps-bg.png)', backgroundSize: 'cover' }}
        className="h-screen w-full flex flex-col justify-between text-white bg-cover relative"
      >
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        {/* Navbar */}
        <Navbar />

        {/* Main content with Framer Motion animation */}
        <div className="flex flex-col items-center justify-center h-screen">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="gtps-hero-logo.png"
              alt="Growtopia Private Server"
              className="object-contain w-96 mb-2 glow-effect"
            />
          </motion.div>
          <motion.button
            className="btn btn-outline btn-lg mt-4 flex items-center space-x-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <PlayCircle className="w-6 h-6" />
            <span>Watch Trailer</span>
          </motion.button>
        </div>
      </div>

      {/* About Section with animation */}
      <div ref={aboutRef} className="bg-gray-900 text-center py-24">
        <motion.section
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="container mx-auto px-6">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-2 text-center flex items-center justify-center tracking-widest font-[family-name:var(--font-bolden-bold)]"
            >
              <motion.span
                variants={lineVariants}
                className="w-16 h-px bg-white mr-4"
              ></motion.span>
              About
              <motion.span
                variants={lineVariants}
                className="w-16 h-px bg-white ml-4"
              ></motion.span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-center max-w-3xl mx-auto text-lg leading-relaxed"
            >
              Growtopia Private Server offers a unique and customizable gaming experience where you can create your own virtual world. Unlike public servers, private servers allow you to control the rules, economy, and overall atmosphere of the game.
            </motion.p>
          </div>
        </motion.section>
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-900">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-8 text-center flex items-center justify-center tracking-widest font-[family-name:var(--font-bolden-bold)]"
        >
          <motion.span
            variants={lineVariants}
            className="w-16 h-px bg-white mr-4"
          ></motion.span>
          Roles
          <motion.span
            variants={lineVariants}
            className="w-16 h-px bg-white ml-4"
          ></motion.span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center mb-20">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              className={`w-52 h-72 md:w-72 md:h-96 bg-base-100 shadow-xl flex flex-col items-center text-center rounded-lg overflow-hidden ${roles.length % 3 !== 0 && index >= roles.length - (roles.length % 3) ? 'md:col-span-1' : ''
                }`}
              onClick={() => handleCardFlip(index)}
              animate={{ rotateY: flippedCard === index ? 180 : 0 }}
              transition={{ duration: 1.2 }}
            >
              <motion.div
                className="absolute w-full h-full flex flex-col justify-end items-center p-4"
                animate={{ rotateY: flippedCard === index ? -180 : 0, opacity: flippedCard === index ? 0 : 1 }}
                transition={{ rotateY: { duration: 1.2 }, opacity: { delay: 0.4, duration: 0.2 } }}
              >
                <img src="/gtps-logo.png" alt="Growtopia Private Server Logo" className="w-24 h-24" />
                <p className="card-title text-sm md:text-2xl tracking-widest font-bold">{role} Place Holder</p>
              </motion.div>
              <motion.div
                className="absolute w-full h-full flex flex-col justify-center items-center p-4"
                animate={{ rotateY: flippedCard === index ? -180 : 0, opacity: flippedCard === index ? 1 : 0 }}
                transition={{ rotateY: { duration: 1.2 }, opacity: { delay: 0.4, duration: 0.2 } }}
              >
                <p>{role} Description!</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-8" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="mb-4 md:mb-0 order-2 md:order-none">
              <img src="/gtps-logo.png" alt="Growtopiia Private Server Logo" className="w-28 h-28" />
              <div className="flex space-x-4 items-center text-2xl order-1 md:order-none mt-4 md:mt-0">
                <a href="https://twitter.com/YoruAkio" className="text-gray-300 hover:text-gray-200">
                  <FaTwitter />
                </a>
                <a href="https://youtube.com/@YoruAkio" className="text-gray-300 hover:text-gray-200">
                  <FaYoutube />
                </a>
                <a href="https://instagram.com/venturaps" className="text-gray-300 hover:text-gray-200">
                  <FaTelegram />
                </a>
              </div>
            </div>
            <nav className="hidden md:flex md:flex-row space-x-4 order-3 md:order-none">
              <div>
                <h3 className="text-gray-300 font-bold mb-2">Game Features</h3>
                <ul>
                  <li><a href="#" className="hover:text-gray-200">Server Infomation</a></li>
                  <li><a href="#" className="hover:text-gray-200">Player Viewer</a></li>
                  <li><a href="#" className="hover:text-gray-200">Economy Statistics</a></li>
                  <li><a href="#" className="hover:text-gray-200">World of The Day</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-300 font-bold mb-2">Marketplace</h3>
                <ul>
                  <li><a href="#" className="hover:text-gray-200">Roles</a></li>
                  <li><a href="#" className="hover:text-gray-200">Items</a></li>
                  <li><a href="#" className="hover:text-gray-200">Tokens</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="mt-4 flex justify-center md:justify-between">
            <p className="text-s text-gray-500">Copyright 2024 | @YoruAkio</p>
            <p className="hidden md:block text-s text-gray-500">Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </>
  );
}