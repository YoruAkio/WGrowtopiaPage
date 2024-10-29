import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-2/3 bg-black bg-opacity-25 backdrop-filter backdrop-blur-md rounded-3xl px-4 sm:px-8 py-1 sm:py-2 shadow-lg z-10 flex items-center justify-between min-h-[50px]">
                <button onClick={handleToggle} className="absolute left-4 sm:hidden">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                <img src="/gtps-logo.png" alt="Growtopiia Private Server Logo" className="w-24 absolute left-1/2 transform -translate-x-1/2 sm:left-0 sm:transform-none sm:ml-5" />
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-1/2 rounded-3xl bg-black bg-opacity-35 backdrop-filter backdrop-blur-md p-4"
                        >
                            <ul className="flex flex-col space-y-4">
                                <li><a href="#" className="hover:underline">About</a></li>
                                <li><a href="#" className="hover:underline">Information</a></li>
                                <li><a href="#" className="hover:underline">Statistic</a></li>
                                <li><a href="#" className="hover:underline">Marketplace</a></li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
                <ul className="hidden sm:flex space-x-4 absolute right-0 mr-5">
                    <li><a href="#" className="hover:underline">About</a></li>
                    <li><a href="#" className="hover:underline">Information</a></li>
                    <li><a href="#" className="hover:underline">Statistic</a></li>
                    <li><a href="#" className="hover:underline">Marketplace</a></li>
                </ul>
            </nav>
        </>
    );
}