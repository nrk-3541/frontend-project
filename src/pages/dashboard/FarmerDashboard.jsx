import { useState } from 'react';
import { motion } from 'framer-motion';
import { predictSoilHealth } from '../../lib/api';
import SoilTestForm from '../../components/forms/SoilTestForm';

export default function FarmerDashboard() {
    const [stats, setStats] = useState(null); // Initialize as null (empty state)
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAnalysis = async (formData) => {
        setLoading(true);
        try {
            const result = await predictSoilHealth(formData);

            setStats({
                moisture: formData.moisture,
                ph: formData.ph_level,
                nitrogen: formData.nitrogen,
                riskScore: result.risk_score,
                riskLevel: result.risk_level,
                alerts: result.alerts,
                timestamp: new Date().toLocaleString()
            });
            setIsModalOpen(false); // Close modal on success
        } catch (error) {
            console.error("Failed to fetch AI prediction");
            alert("Analysis failed. Please check the backend connection.");
        } finally {
            setLoading(false);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="max-w-6xl mx-auto printable-area">
            <div className="flex justify-between items-end mb-8 no-print">
                <div>
                    <h1 className="text-2xl font-bold text-green-900 mb-1">Good Morning, Manoj!</h1>
                    <p className="text-gray-600">Ready for a new analysis?</p>
                    <p className="text-green-600 text-sm mt-1">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#166534] hover:bg-green-800 text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-green-900/20 transition-all flex items-center gap-2"
                >
                    <span className="text-xl">+</span> New Soil Test
                </button>
            </div>

            {/* Form Modal */}
            <SoilTestForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAnalysis}
                loading={loading}
            />

            {/* Empty State / Welcome Screen */}
            {!stats && (
                <div className="bg-white border border-green-100 rounded-2xl p-12 text-center text-gray-400 shadow-sm">
                    <div className="text-6xl mb-4">🌱</div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">No Analysis Data Yet</h3>
                    <p className="max-w-md mx-auto mb-8 text-gray-500">Click the "+ New Soil Test" button above to enter your field data. Our AI engine is ready to detect risks and provide recommendations.</p>
                </div>
            )}

            {/* Results View (Visible only when data exists) */}
            {stats && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="print-container bg-white rounded-2xl p-8 text-gray-800 shadow-2xl"
                >
                    <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-4">
                        <div>
                            <h2 className="text-3xl font-bold text-brand-navy">Soil Health Report</h2>
                            <p className="text-gray-500 text-sm">Generated on: {stats.timestamp}</p>
                        </div>
                        <button onClick={handlePrint} className="no-print text-brand-teal font-semibold hover:underline">
                            🖨️ Print Report
                        </button>
                        {/* Print Header (Visible only in print) */}
                        <div className="hidden print-logo">
                            <h1 className="text-2xl font-bold text-brand-teal">Krishindria AI</h1>
                        </div>
                    </div>

                    {/* Score Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                            <div className="text-green-800 text-sm font-semibold">Overall Risk Score</div>
                            <div className="text-4xl font-bold text-brand-teal mt-2">{stats.riskScore}/100</div>
                            <div className={`text-sm font-bold uppercase mt-1 ${stats.riskLevel === 'Critical' ? 'text-red-500' : 'text-green-600'}`}>
                                {stats.riskLevel} Risk
                            </div>
                        </div>

                        <ResultItem label="Moisture" value={`${stats.moisture}%`} />
                        <ResultItem label="pH Level" value={stats.ph} />
                        <ResultItem label="Nitrogen" value={`${stats.nitrogen} mg/kg`} />
                    </div>

                    {/* Alerts Section */}
                    <div className="mb-8 p-6 bg-red-50 border border-red-100 rounded-xl">
                        <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                            ⚠️ Critical Alerts
                        </h3>
                        <ul className="space-y-2">
                            {stats.alerts.length > 0 ? (
                                stats.alerts.map((alert, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-red-700">
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                        {alert}
                                    </li>
                                ))
                            ) : (
                                <li className="text-green-700 font-medium">No critical risks detected. Soil is healthy!</li>
                            )}
                        </ul>
                    </div>

                    <div className="text-center text-xs text-gray-400 mt-8 pt-4 border-t border-gray-100">
                        <p>Analysis powered by Krishindria AI Engine. Verification ID: #AI-{Math.floor(Math.random() * 10000)}</p>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

function ResultItem({ label, value }) {
    return (
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">{label}</div>
            <div className="text-2xl font-bold text-gray-800 mt-1">{value}</div>
        </div>
    )
}
