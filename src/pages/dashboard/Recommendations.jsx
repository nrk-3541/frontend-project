import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { predictSoilHealth } from '../../lib/api';
import SoilTestForm from '../../components/forms/SoilTestForm';

export default function Recommendations() {
    const navigate = useNavigate();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [error, setError] = useState(null);

    const handleAnalyze = async (formData) => {
        setLoading(true);
        setError(null);
        try {
            // Transform form data to match API schema if necessary
            // The SoilTestForm output seems to match the schema mostly, but let's send it directly
            const result = await predictSoilHealth(formData);
            setAnalysisResult(result);
            setIsFormOpen(false);
        } catch (err) {
            console.error(err);
            setError("Failed to analyze soil data. Please check your connection and try again.");
        } finally {
            setLoading(false);
        }
    };

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
                    <h1 className="text-3xl font-bold text-white mb-2">Soil Health & Disease Guide</h1>
                    <p className="text-gray-400">AI-powered analysis and official recommendations.</p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="bg-brand-teal text-black px-4 py-2 rounded-lg font-bold hover:bg-teal-400 transition-colors shadow-lg shadow-teal-900/20"
                    >
                        + New Soil Analysis
                    </button>
                    <button onClick={() => navigate('/dashboard/farmer')} className="text-brand-teal hover:underline self-center">
                        ← Back to Dashboard
                    </button>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-4 rounded-xl mb-8">
                    {error}
                </div>
            )}

            {/* Analysis Results Section */}
            <AnimatePresence>
                {analysisResult && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-12"
                    >
                        <div className={`border rounded-2xl p-6 ${analysisResult.risk_level === 'High' ? 'bg-red-900/20 border-red-500/30' :
                                analysisResult.risk_level === 'Moderate' ? 'bg-yellow-900/20 border-yellow-500/30' :
                                    'bg-green-900/20 border-green-500/30'
                            }`}>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1">Analysis Report</h2>
                                    <p className="text-gray-400 text-sm">Based on provided soil parameters</p>
                                </div>
                                <div className={`px-4 py-2 rounded-lg text-lg font-bold ${analysisResult.risk_level === 'High' ? 'bg-red-500 text-white' :
                                        analysisResult.risk_level === 'Moderate' ? 'bg-yellow-500 text-black' :
                                            'bg-green-500 text-black'
                                    }`}>
                                    {analysisResult.risk_level} Risk ({analysisResult.risk_score}/100)
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">⚠️ Alerts</h3>
                                    <ul className="space-y-2">
                                        {analysisResult.alerts.map((alert, i) => (
                                            <li key={i} className="flex items-start gap-2 text-red-200 bg-red-500/10 p-2 rounded">
                                                <span>•</span>
                                                {alert}
                                            </li>
                                        ))}
                                        {analysisResult.alerts.length === 0 && (
                                            <li className="text-gray-400 italic">No critical alerts detected.</li>
                                        )}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">✅ Recommendations</h3>
                                    <ul className="space-y-2">
                                        {analysisResult.recommendations.map((rec, i) => (
                                            <li key={i} className="flex items-start gap-2 text-green-200 bg-green-500/10 p-2 rounded">
                                                <span>✓</span>
                                                {rec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <h2 className="text-xl font-bold text-white mb-4">General Disease Reference</h2>
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

            <SoilTestForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSubmit={handleAnalyze}
                loading={loading}
            />
        </div>
    );
}
