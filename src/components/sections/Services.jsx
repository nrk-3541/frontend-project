import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
    {
        title: 'Diagnostics',
        subtitle: 'Soil Testing',
        icon: '🔬',
        features: ['Basic Soil Health Testing', 'Advanced Soil Health Analysis', 'Pathogen qPCR Detection', 'Microbiome Sequencing'],
        color: 'purple',
        popular: false,
    },
    {
        title: 'Voice Advisory',
        subtitle: 'AI Guidance',
        icon: '🗣️',
        features: ['WhatsApp Voice Responses', 'Personalized Recommendations', 'Voice Calls in Local Language', 'IVR Support System'],
        color: 'green',
        popular: true,
    },
    {
        title: 'Premium App',
        subtitle: 'Full Platform',
        icon: '📱',
        features: ['Interactive Soil Dashboard', 'Weather + Disease Alerts', 'Vendor Directory Access', 'Market Linkage Support'],
        color: 'orange',
        popular: false,
    },
];

const colorClasses = {
    purple: {
        gradient: 'from-purple-600 to-purple-700',
        light: 'bg-purple-100',
        text: 'text-purple-600',
        check: 'text-purple-500',
    },
    green: {
        gradient: 'from-green-500 to-green-600',
        light: 'bg-green-100',
        text: 'text-green-600',
        check: 'text-green-500',
    },
    orange: {
        gradient: 'from-orange-500 to-orange-600',
        light: 'bg-orange-100',
        text: 'text-orange-600',
        check: 'text-orange-500',
    },
};

function Services() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="services" className="py-20 lg:py-28 bg-gray-50">
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
                        CORE PRODUCTS & SERVICES
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Choose Your Solution
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Flexible options designed for farmers of all sizes
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative"
                        >
                            {service.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                                    <span className="px-4 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <div
                                className={`h-full p-8 bg-white rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${service.popular ? 'border-green-400 shadow-lg' : 'border-gray-100 hover:border-gray-300'
                                    }`}
                            >
                                <div className="text-center mb-6">
                                    <div
                                        className={`w-20 h-20 rounded-full ${colorClasses[service.color].light} flex items-center justify-center text-4xl mx-auto mb-4`}
                                    >
                                        {service.icon}
                                    </div>
                                    <h3 className={`text-2xl font-bold ${colorClasses[service.color].text}`}>
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500">{service.subtitle}</p>
                                </div>

                                <ul className="space-y-4">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <svg
                                                className={`w-5 h-5 ${colorClasses[service.color].check} flex-shrink-0`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
