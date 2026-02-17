import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
    {
        icon: '🗄️',
        title: 'Indian Soil Microbiome DB',
        description: 'Comprehensive database of biotic signatures for accurate microbial balance scoring.',
        color: 'purple',
    },
    {
        icon: '🧬',
        title: 'Biotic Analysis',
        description: 'qPCR pathogen detection and 16S/ITS microbial profiling for disease identification.',
        color: 'green',
    },
    {
        icon: '🔬',
        title: 'Abiotic Analysis',
        description: 'Sensor-based testing for pH, EC, moisture, organic carbon, and NPK readiness.',
        color: 'orange',
    },
    {
        icon: '🌾',
        title: 'Crop Suitability',
        description: 'AI-driven recommendations for optimal crop selection based on soil conditions.',
        color: 'purple',
    },
    {
        icon: '🤖',
        title: 'AI & Advisory',
        description: 'LLM-powered advice for disease warnings, soil rejuvenation, and fertilizer suggestions.',
        color: 'green',
    },
    {
        icon: '🌿',
        title: 'Bio & Fertilizers',
        description: 'Personalized biocontrol and fertilizer recommendations for sustainable farming.',
        color: 'orange',
    },
    {
        icon: '⚠️',
        title: 'Disease Alerts',
        description: 'Early warning system for soil-borne diseases before they affect your crops.',
        color: 'purple',
    },
    {
        icon: '🗣️',
        title: 'Voice Bot & IVR',
        description: 'Local language voice responses via WhatsApp and IVR for easy access.',
        color: 'green',
    },
    {
        icon: '👨‍🌾',
        title: 'Field Support',
        description: 'Dedicated on-ground staff and demo farms for hands-on assistance.',
        color: 'orange',
    },
];

const colorClasses = {
    purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'hover:border-purple-400',
    },
    green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        border: 'hover:border-green-400',
    },
    orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        border: 'hover:border-orange-400',
    },
};

function Features() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="features" className="py-20 lg:py-28 bg-gray-50">
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
                        VALUE PROPOSITION
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        The First Integrated AI Solution
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        for Soil-Borne Disease Prediction
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div
                                className={`h-full p-6 bg-white rounded-2xl border border-gray-100 shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${colorClasses[feature.color].border}`}
                            >
                                <div
                                    className={`w-16 h-16 rounded-xl ${colorClasses[feature.color].bg} flex items-center justify-center text-3xl mb-4`}
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
