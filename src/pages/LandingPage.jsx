import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';

export default function LandingPage() {
    const navigate = useNavigate();

    const services = [
        {
            title: "Tomato",
            image: "/tomato-card.jpg",
            description: "Complete care for Lycopersicon esculentum. AI detection for wilts and blights.",
            features: [
                { name: "Damping Off", tags: ["Pythium", "Soil"] },
                { name: "Early Blight", tags: ["Fungal", "Leaf"] },
                { name: "Bacterial Wilt", tags: ["Ralstonia", "Critical"] },
                { name: "Leaf Curl Virus", tags: ["Viral", "Vector"] },
            ]
        },
        {
            title: "Potato",
            image: "/potato-card.jpg",
            description: "Advanced tuber monitoring. Prevent Late Blight and Scab effectively.",
            features: [
                { name: "Late Blight", tags: ["Phytophthora", "Critical"] },
                { name: "Common Scab", tags: ["Bacterial", "Tuber"] },
                { name: "Black Scurf", tags: ["Rhizoctonia", "Soil"] },
                { name: "Early Blight", tags: ["Alternaria", "Leaf"] },
            ]
        },
        {
            title: "Cucumber",
            image: "/cucumber-card.jpg",
            description: "Vine health protection. Detect Mildews and Wilts before they spread.",
            features: [
                { name: "Downy Mildew", tags: ["Fungal", "Humidity"] },
                { name: "Fusarium Wilt", tags: ["Soil", "Vascular"] },
                { name: "Powdery Mildew", tags: ["Fungal", "White"] },
                { name: "Bacterial Wilt", tags: ["Erwinia", "Vine"] },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            {/* Hero Section - Urneeds Style Layout, Original Theme */}
            <section className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-br from-green-50 to-white">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-green-100/30 rounded-bl-[100px] -z-10"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Left Side - Text */}
                        <div className="lg:w-1/2 text-brand-navy">
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                                    New: AI Crop Doctor
                                </span>
                                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-brand-navy">
                                    Heal your <span className="text-brand-teal">Soil.</span><br />
                                    Save your <span className="relative z-10 after:contents-[''] after:absolute after:bottom-2 after:left-0 after:w-full after:h-3 after:bg-yellow-200 after:-z-10">Harvest.</span>
                                </h1>
                                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                                    Your one-stop platform for all your Agricultural AI Tech needs - Soil Analysis, Disease Prediction, Yield Forecasting & more!
                                </p>

                                <div className="flex gap-4">
                                    {/* Simple Icons/Buttons like the reference */}
                                    <div className="flex items-center gap-4 text-brand-navy text-xs font-bold uppercase tracking-wider">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="p-3 bg-white rounded-full shadow-md text-2xl">👨‍🌾</span>
                                            <span>Farmers</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="p-3 bg-white rounded-full shadow-md text-2xl">👨‍🔬</span>
                                            <span>Experts</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="p-3 bg-white rounded-full shadow-md text-2xl">🌱</span>
                                            <span>Crops</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side - Image Card */}
                        <div className="lg:w-1/2 relative flex justify-end">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative z-10 bg-white p-2 rounded-[2rem] shadow-2xl origin-bottom-right"
                            >
                                <img
                                    src="/hero-sprout.jpg"
                                    alt="Sprout in Hand"
                                    className="rounded-[1.5rem] w-full max-w-[600px] shadow-inner"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div >

                {/* Vocal for Local / Made in India Badges (Optional additions based on reference) */}
                < div className="absolute bottom-4 right-10 flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all" >
                    {/* Placeholder for badges if needed later */}
                </div >
            </section >

            {/* Disease Intelligence Section - Urneeds Card Hybrid */}
            < section className="py-20 bg-gray-50 text-brand-navy relative" > {/* Light background for Urneeds style */}
                < div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Crop Disease Intelligence</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Specialized AI models trained on 50+ diseases for key crops.
                        </p>
                    </div>

                    {/* Urneeds Style Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow overflow-hidden border border-gray-100 flex flex-col"
                            >
                                {/* Image Area */}
                                <div className="h-40 overflow-hidden relative group">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white tracking-wide">{service.title}</h3>
                                    {/* Icon Badge */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-navy p-2 rounded-lg text-xl shadow-lg">
                                        {service.title === 'Tomato' && '🍅'}
                                        {service.title === 'Potato' && '🥔'}
                                        {service.title === 'Cucumber' && '🥒'}
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Description with left border accent */}
                                    <div className="border-l-4 border-brand-teal pl-4 mb-6">
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="space-y-6 mb-8 flex-1">
                                        {/* Feature List */}
                                        <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Target Diseases:</h4>
                                        <ul className="space-y-3">
                                            {service.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-gray-50 pb-2 last:border-0 hover:bg-gray-50 transition-colors rounded px-2 -mx-2">
                                                    <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                                                        {feature.name}
                                                    </div>
                                                    <div className="flex gap-1 flex-wrap justify-end">
                                                        {feature.tags.map((tag, tIdx) => (
                                                            <span key={tIdx} className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${tag === 'Critical' ? 'bg-red-50 text-red-600 border border-red-100' :
                                                                tag === 'Soil' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                                                                    'bg-blue-50 text-blue-600 border border-blue-100'
                                                                }`}>
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Outline Button (Urneeds Style) */}
                                    <button
                                        onClick={() => navigate('/register')}
                                        className="w-full border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-bold py-3 rounded-xl transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 group"
                                    >
                                        View Solutions
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div >
            </section >

            {/* Footer Simple */}
            < footer className="bg-brand-navy py-12 text-white text-center" >
                <p className="opacity-50 text-sm">© 2026 Krishindria Enterprise AI. All rights reserved.</p>
            </footer >
        </div >
    );
}
