import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Recommendations() {
    const navigate = useNavigate();

    const diseaseData = [
        {
            crop: "Tomato",
            disease: "Damping Off",
            agent: "Pythium spp.",
            symptoms: "Seedlings rot before emergence; water-soaked stem.",
            biocontrol: "Seed treatment with Trichoderma viride @ 4 g/kg seed.",
            chemical: "Soil drenching with Copper oxychloride 0.25%."
        },
        {
            crop: "Tomato",
            disease: "Early Blight",
            agent: "Alternaria solani",
            symptoms: "Brown leaf spots with concentric rings; yellowing.",
            biocontrol: "Spray Trichoderma viride (1%) or Neem oil 3 ml/L.",
            chemical: "Spray Mancozeb 0.25% or Chlorothalonil 0.2%."
        },
        {
            crop: "Tomato",
            disease: "Bacterial Wilt",
            agent: "Ralstonia solanacearum",
            symptoms: "Sudden wilting without yellowing; bacterial ooze.",
            biocontrol: "Soil application of Pseudomonas + Trichoderma.",
            chemical: "Copper oxychloride 0.3% + Streptocycline 200 ppm."
        },
        {
            crop: "Potato",
            disease: "Late Blight",
            agent: "Phytophthora infestans",
            symptoms: "Water-soaked dark lesions; white fungal growth.",
            biocontrol: "Preventive spray of Trichoderma / Pseudomonas.",
            chemical: "Metalaxyl + Mancozeb 0.25%."
        },
        {
            crop: "Potato",
            disease: "Common Scab",
            agent: "Streptomyces scabies",
            symptoms: "Corky, rough scab lesions on tuber surface.",
            biocontrol: "Maintain soil moisture; apply FYM + biocontrols.",
            chemical: "Avoid alkaline soils; no effective chemical cure."
        },
        {
            crop: "Cucumber",
            disease: "Downy Mildew",
            agent: "Pseudoperonospora",
            symptoms: "Yellow angular leaf spots; grey-purple growth.",
            biocontrol: "Preventive spray of Pseudomonas fluorescens.",
            chemical: "Metalaxyl + Mancozeb 0.25%."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Disease Management Guide</h1>
                    <p className="text-gray-400">Official recommendations for crop protection.</p>
                </div>
                <button onClick={() => navigate('/dashboard/farmer')} className="text-brand-teal hover:underline">
                    ← Back to Dashboard
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {diseaseData.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-brand-dark border border-white/10 rounded-xl p-6 hover:border-brand-teal/50 transition-colors group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${item.crop === 'Tomato' ? 'bg-red-500/20 text-red-500' : item.crop === 'Potato' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-green-500/20 text-green-500'}`}>
                                {item.crop}
                            </span>
                            <span className="text-gray-500 text-xs italic">{item.agent}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-teal transition-colors">{item.disease}</h3>
                        <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{item.symptoms}</p>

                        <div className="space-y-3">
                            <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/20">
                                <div className="text-green-400 text-xs font-bold uppercase mb-1">Bio-Control 🌿</div>
                                <p className="text-green-100 text-sm">{item.biocontrol}</p>
                            </div>

                            <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/20">
                                <div className="text-blue-400 text-xs font-bold uppercase mb-1">Chemical 🧪</div>
                                <p className="text-blue-100 text-sm">{item.chemical}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
