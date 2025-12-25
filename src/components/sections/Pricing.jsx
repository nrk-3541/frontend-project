import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const pricingTiers = [
    {
        name: 'Basic',
        price: '₹149',
        period: 'per test',
        description: 'Essential soil testing for small farmers',
        features: ['Basic Soil Health Test', 'pH & EC Analysis', 'NPK Readiness Report', 'Email Report Delivery'],
        cta: 'Get Started',
        popular: false,
    },
    {
        name: 'Voice Advisory',
        price: '₹149',
        period: '/month',
        description: 'AI-powered voice guidance in local language',
        features: ['All Basic Features', 'WhatsApp Voice Advisory', 'Personalized Recommendations', 'IVR Support', 'Crop Suitability Analysis'],
        cta: 'Subscribe Now',
        popular: true,
    },
    {
        name: 'Premium App',
        price: '₹299',
        period: '/month',
        description: 'Complete platform access with full features',
        features: ['All Voice Advisory Features', 'Interactive Dashboard', 'Weather + Disease Alerts', 'Vendor Directory', 'Market Linkage', 'Priority Support'],
        cta: 'Go Premium',
        popular: false,
    },
];

function Pricing() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="pricing" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-purple-600 font-semibold tracking-widest text-sm mb-2">
                        PRICING
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Affordable solutions for farmers of every scale
                    </p>
                </motion.div>

                {/* Pricing Grid */}
                <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative"
                        >
                            {tier.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                                    <span className="px-4 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-full shadow-lg">
                                        Best Value
                                    </span>
                                </div>
                            )}
                            <div
                                className={`h-full p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 ${tier.popular
                                        ? 'bg-gradient-to-b from-purple-50 to-white border-purple-300 shadow-xl'
                                        : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-lg'
                                    }`}
                            >
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                                    <p className="text-gray-500 text-sm mb-4">{tier.description}</p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-4xl font-bold text-purple-700">{tier.price}</span>
                                        <span className="text-gray-500">{tier.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <svg
                                                className="w-5 h-5 text-green-500 flex-shrink-0"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-gray-600 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3 rounded-lg font-semibold transition-all ${tier.popular
                                            ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {tier.cta}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;
