import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const stats = [
    { value: 300, suffix: '+', label: 'Farmers Onboard', icon: '👨‍🌾' },
    { value: 500, suffix: '+', label: 'Soil Samples Collected', icon: '🧪' },
    { value: 500, suffix: '+', label: 'Pathogen qPCR Tests', icon: '🔬' },
    { value: 150, suffix: '+', label: 'Microbiome Sequencing', icon: '🧬' },
    { value: 50, suffix: '+', label: 'Local Vendors', icon: '🏪' },
    { value: 25, suffix: '%', label: 'Avg. Crop Loss Reduction', icon: '📈' },
];

function AnimatedCounter({ value, suffix, inView }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 2000;
            const increment = value / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [inView, value]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

function Impact() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="impact" className="py-20 lg:py-28 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-green-400 font-semibold tracking-widest text-sm mb-2">
                        OUR IMPACT
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Expected Outcomes in 12 Months
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Measurable impact on Indian agriculture
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
                        >
                            <div className="text-4xl mb-3">{stat.icon}</div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                            </div>
                            <p className="text-white/60 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-xl text-white/80 mb-4">
                        Join the movement towards smarter, sustainable farming
                    </p>
                    <p className="text-green-400 font-semibold text-lg">
                        🌱 20-30% Reduction in Crop Loss Among Users
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Impact;
