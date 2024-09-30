import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { Parallax } from 'react-parallax';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { FaInstragram, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Home() {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardFlip = (cardNumber) => {
    setFlippedCard(flippedCard === cardNumber ? null : cardNumber);
  };

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

      {/* Parallax Background */}
      <Parallax
        bgImage="/gtps-bg.png"
        strength={500}
        className="h-screen w-full flex flex-col justify-between text-white bg-cover"
      >

        {/* Navbar */}
        <Navbar />

        {/* Main content with Framer Motion animation */}
        <div className="flex flex-col items-center justify-center h-screen">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src="gtps-hero-logo.png" alt="Growtopia Private Server" className="object-contain w-96 mb-2" />
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
      </Parallax>

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
              className="text-4xl font-bold mb-8 text-center flex items-center justify-center tracking-widest font-[family-name:var(--font-bolden-bold)]"
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
              Immerse yourself in Chumbi Valley; an enchanting and mystical play-to-earn blockchain
              game with intriguing and adorable NFT creatures known as Chumbi. Explore the uncharted
              forest, start a farm, grow crops and craft special items with your Chumbi companions by
              your side, while earning crypto rewards.
            </motion.p>
          </div>
        </motion.section>
      </div>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
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

        <div className="flex justify-center space-x-4">
          {['Role 1', 'Role 2', 'Role 3'].map((role, index) => (
            <motion.div
              key={index}
              className={`w-72 h-96 bg-base-100 shadow-xl flex flex-col justify-center items-center text-center rounded-lg overflow-hidden`}
              onClick={() => handleCardFlip(index)}
              animate={{ rotateY: flippedCard === index ? 180 : 0 }}
              transition={{ duration: 1.2 }}
            >
              <motion.div
                className={`absolute w-full h-full flex flex-col justify-end items-center p-4`}
                animate={{ rotateY: flippedCard === index ? -180 : 0, opacity: flippedCard === index ? 0 : 1 }}
                transition={{ rotateY: { duration: 1.2 }, opacity: { delay: 0.4, duration: 0.2 } }}
              >
                <img src="/gtps-logo.png" alt="Growtopia Private Server Logo" className="w-24 h-24" />
                <p className='card-title text-2xl tracking-widest font-[family-name:var(--font-bolden-bold)]'>{role} Place Holder</p>
              </motion.div>
              <motion.div
                className={`absolute w-full h-full flex flex-col justify-center items-center p-4`}
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
      <footer class="bg-gray-900 text-gray-400 py-8">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row justify-between">
            <div class="mb-4 md:mb-0">
              <img src="/gtps-logo.png" alt="Growtopiia Private Server Logo" class="w-28 h-28" />
              <div class="flex space-x-4 items-center text-2xl">
                <a href="https://twitter.com/YoruAkio" class="text-gray-300 hover:text-gray-200">
                  <FaTwitter />
                </a>
                <a href="https://youtube.com/@YoruAkio" class="text-gray-300 hover:text-gray-200">
                  <FaYoutube />
                </a>
                <a href="https://instagram.com/venturaps" class="text-gray-300 hover:text-gray-200">
                  <FaTelegram />
                </a>
              </div>
            </div>
            <nav class="flex flex-col md:flex-row space-x-4">
              <div>
                <h3 class="text-gray-300 font-bold mb-2">Game Features</h3>
                <ul>
                  <li><a href="#" class="hover:text-gray-200">Chumbi</a></li>
                  <li><a href="#" class="hover:text-gray-200">Gallery</a></li>
                  <li><a href="#" class="hover:text-gray-200">Litepaper</a></li>
                  <li><a href="#" class="hover:text-gray-200">Whitepaper</a></li>
                  <li><a href="#" class="hover:text-gray-200">Lore</a></li>
                </ul>
              </div>
              <div>
                <h3 class="text-gray-300 font-bold mb-2">Marketplace</h3>
                <ul>
                  <li><a href="#" class="hover:text-gray-200">Chumbi</a></li>
                  <li><a href="#" class="hover:text-gray-200">Tokens</a></li>
                </ul>
              </div>
              <div>
                <h3 class="text-gray-300 font-bold mb-2">About</h3>
                <ul>
                  <li><a href="#" class="hover:text-gray-200">About Us</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div class="mt-4 flex justify-between">
            <p class="text-s text-gray-500">Copyright 2024 | @YoruAkio</p>
            <p class="text-s text-gray-500">Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </>
  );
}