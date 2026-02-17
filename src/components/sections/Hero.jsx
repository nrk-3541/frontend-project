import { motion } from 'framer-motion';

function Hero() {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 pt-16 md:pt-0"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/5"
                        style={{
                            width: 300 + i * 100,
                            height: 300 + i * 100,
                            left: `${10 + i * 15}%`,
                            top: `${20 + i * 10}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 20, 0],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-green-400 font-semibold tracking-widest text-sm mb-4"
                        >
                            AI-POWERED AGRICULTURE
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                        >
                            Soil Intelligence
                            <br />
                            <span className="text-green-400">for Farmers</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed"
                        >
                            The first integrated AI solution for soil-borne disease prediction.
                            Affordable diagnostics, local-language voice advisory, and AI guidance
                            for better yields.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button
                                onClick={() => scrollToSection('#contact')}
                                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                            >
                                Get Started
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button
                                onClick={() => scrollToSection('#how-it-works')}
                                className="px-8 py-3 border-2 border-white/50 hover:border-white text-white font-semibold rounded-lg transition-all hover:bg-white/10 flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                See How It Works
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex gap-8 lg:gap-12 mt-12 pt-8 border-t border-white/10"
                        >
                            {[
                                { value: '20-30%', label: 'Crop Loss Reduction' },
                                { value: '300+', label: 'Farmers Onboard' },
                                { value: '500+', label: 'Soil Tests' },
                            ].map((stat, index) => (
                                <div key={index}>
                                    <p className="text-2xl lg:text-3xl font-bold text-green-400">{stat.value}</p>
                                    <p className="text-sm text-white/60">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="hidden lg:flex items-center justify-center relative"
                    >
                        <div className="relative w-96 h-96">
                            {/* Rotating Circles */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 border-2 border-dashed border-green-400/30 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-8 border-2 border-dashed border-white/20 rounded-full"
                            />

                            {/* Center */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/40">
                                    <span className="text-6xl">🌱</span>
                                </div>
                            </div>

                            {/* Floating Icons */}
                            {[
                                { icon: '🧬', className: 'top-4 left-8' },
                                { icon: '📊', className: 'top-12 right-4' },
                                { icon: '🤖', className: 'bottom-12 left-0' },
                                { icon: '📱', className: 'bottom-4 right-12' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute ${item.className}`}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.5,
                                    }}
                                >
                                    <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl">
                                        {item.icon}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
