import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer gap-3" onClick={() => navigate('/')}>
                        <img src="/logo-icon.png" alt="Krishindria Icon" className="w-12 h-12 object-contain" />
                        <img src="/logo-text.png" alt="Krishindria" className="h-10 object-contain hidden sm:block" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-600 hover:text-brand-teal font-medium transition-colors">Products</a>
                        <a href="#" className="text-gray-600 hover:text-brand-teal font-medium transition-colors">Why AI?</a>
                        <a href="#" className="text-gray-600 hover:text-brand-teal font-medium transition-colors">About Us</a>

                        <button
                            onClick={() => navigate('/login')}
                            className="flex items-center gap-2 text-brand-teal font-semibold hover:text-brand-navy transition-colors px-4 py-2 rounded-lg hover:bg-green-50"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            Login
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-navy p-2">
                            <span className="sr-only">Open menu</span>
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-green-100 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-3 flex flex-col items-center pb-6">
                            <a href="#" className="text-gray-600 hover:text-brand-teal font-medium block py-2">Products</a>
                            <a href="#" className="text-gray-600 hover:text-brand-teal font-medium block py-2">Why AI?</a>
                            <a href="#" className="text-gray-600 hover:text-brand-teal font-medium block py-2">About Us</a>
                            <button
                                onClick={() => navigate('/login')}
                                className="w-full bg-brand-teal text-white font-bold py-3 rounded-xl mt-4"
                            >
                                Login
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
