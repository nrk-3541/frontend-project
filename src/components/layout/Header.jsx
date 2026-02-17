import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
];

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        setMobileOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-lg'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center"
                        >
                            <img
                                src="/KrishIndria.png"
                                alt="KrishIndria"
                                className="h-10 md:h-12 object-contain"
                            />
                        </motion.a>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.label}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${scrolled
                                            ? 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                                            : 'text-white/90 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 }}
                                onClick={() => scrollToSection('#contact')}
                                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl"
                            >
                                Get Started
                            </motion.button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-purple-700' : 'text-white'
                                }`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-b from-purple-700 to-purple-900 z-50 md:hidden"
                        >
                            <div className="p-6">
                                <div className="flex justify-end mb-8">
                                    <button
                                        onClick={() => setMobileOpen(false)}
                                        className="p-2 text-white/80 hover:text-white"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <nav className="space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.button
                                            key={item.label}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            onClick={() => scrollToSection(item.href)}
                                            className="block w-full text-left px-4 py-3 text-white/90 hover:bg-white/10 rounded-lg font-medium text-lg"
                                        >
                                            {item.label}
                                        </motion.button>
                                    ))}
                                </nav>
                                <button
                                    onClick={() => scrollToSection('#contact')}
                                    className="mt-6 w-full py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-white/90 transition-colors"
                                >
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Spacer */}
            <div className="h-16 md:h-20" />
        </>
    );
}

export default Header;
