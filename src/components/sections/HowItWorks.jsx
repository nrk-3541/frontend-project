import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
    {
        icon: '📡',
        title: 'Data Inputs',
        description: 'qPCR pathogen detection, 16S/ITS microbial profiling, and abiotic sensors (pH, EC, moisture, organic carbon, NPK readiness)',
        color: 'bg-purple-600',
    },
    {
        icon: '🗄️',
        title: 'Microbiome Database',
        description: 'Indian Soil Microbiome Database as the reference for biotic signatures and microbial balance scoring',
        color: 'bg-purple-500',
    },
    {
        icon: '🧠',
        title: 'AI and LLM Advisory',
        description: 'Predictive models and LLM advice for disease early warnings, crop suitability, soil rejuvenation, biocontrol and fertilizer suggestions',
        color: 'bg-orange-500',
    },
    {
        icon: '🌾',
        title: 'Farmer Outputs',
        description: 'Local language voice alerts, crop recommendations, vendor links, and actionable soil health score reports',
        color: 'bg-green-500',
    },
];

function HowItWorks() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="how-it-works" className="py-20 lg:py-28 bg-white">
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
                        HOW IT WORKS
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Integrated AI Soil Intelligence
                    </h2>
                    <p className="text-xl text-gray-600">
                        for Disease Prediction
                    </p>
                </motion.div>

                {/* Steps */}
                <div ref={ref} className="relative max-w-5xl mx-auto">
                    {/* Center Circle - Desktop */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    >
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center shadow-2xl">
                            <span className="text-5xl">🌍</span>
                        </div>
                    </motion.div>

                    {/* Connecting Line - Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-dashed border-purple-200 rounded-full" />

                    {/* Steps Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 lg:gap-x-48 lg:gap-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                            >
                                <div className="p-6 bg-gray-50 rounded-2xl border-2 border-gray-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center text-3xl">
                                                {step.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <span className={`inline-block px-3 py-1 ${step.color} text-white text-xs font-semibold rounded-full mb-2`}>
                                                STEP {index + 1}
                                            </span>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
