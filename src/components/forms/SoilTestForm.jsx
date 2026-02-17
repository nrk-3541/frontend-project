import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SoilTestForm({ isOpen, onClose, onSubmit, loading }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Soil Parameters
        ph_level: '',
        ec: '',
        moisture: '',
        temperature: '',
        nitrogen: '',
        phosphorus: '',
        potassium: '',
        fertility: 'Medium',

        // Step 2: Weather Data
        air_temperature: '',
        humidity: '',
        wind_speed: '',
        rainfall_last_7_days: '',

        // Step 3: Crop Details
        previous_crop: 'Wheat',
        soil_type: 'Loam',
        cropping_pattern: 'Crop Rotation',
        next_crop: 'Tomato',
        crop_type: 'Tomato' // Keep for backward compatibility
    });

    if (!isOpen) return null;

    const handleNext = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert strings to numbers before submitting
        const submissionData = {
            ...formData,
            ph_level: parseFloat(formData.ph_level),
            ec: parseFloat(formData.ec),
            moisture: parseFloat(formData.moisture),
            temperature: parseFloat(formData.temperature),
            nitrogen: parseFloat(formData.nitrogen),
            phosphorus: parseFloat(formData.phosphorus),
            potassium: parseFloat(formData.potassium),
            air_temperature: parseFloat(formData.air_temperature),
            humidity: parseFloat(formData.humidity),
            wind_speed: parseFloat(formData.wind_speed),
            rainfall_last_7_days: parseFloat(formData.rainfall_last_7_days),
            organic_matter: 5.0 // Default value for backward compatibility
        };
        onSubmit(submissionData);
    };

    const updateField = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden text-gray-800"
            >
                {/* Header */}
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-green-50 to-white">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-green-900">New Soil Analysis</h3>
                            <p className="text-sm text-gray-600">Comprehensive field data collection</p>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors text-2xl">✕</button>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-2">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="flex items-center flex-1">
                                <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm transition-all ${currentStep >= step ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-400'
                                    }`}>
                                    {step}
                                </div>
                                {step < 3 && (
                                    <div className={`flex-1 h-1 mx-2 rounded transition-all ${currentStep > step ? 'bg-green-600' : 'bg-gray-200'
                                        }`} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-2 text-xs text-gray-500 font-medium">
                        {currentStep === 1 && 'Step 1: Soil Parameters'}
                        {currentStep === 2 && 'Step 2: Weather Data'}
                        {currentStep === 3 && 'Step 3: Crop Details'}
                    </div>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="p-6">
                    <AnimatePresence mode="wait">
                        {currentStep === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h4 className="text-lg font-bold text-green-900 mb-4">Soil Parameters</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputField label="pH Level (0-14)" value={formData.ph_level} onChange={(v) => updateField('ph_level', v)} type="number" step="0.1" required />
                                    <InputField label="EC - Electrical Conductivity (dS/m)" value={formData.ec} onChange={(v) => updateField('ec', v)} type="number" step="0.01" required />
                                    <InputField label="Moisture (%)" value={formData.moisture} onChange={(v) => updateField('moisture', v)} type="number" step="0.1" required />
                                    <InputField label="Temperature (°C)" value={formData.temperature} onChange={(v) => updateField('temperature', v)} type="number" step="0.1" required />
                                    <InputField label="Nitrogen - N (mg/kg)" value={formData.nitrogen} onChange={(v) => updateField('nitrogen', v)} type="number" required />
                                    <InputField label="Phosphorus - P (mg/kg)" value={formData.phosphorus} onChange={(v) => updateField('phosphorus', v)} type="number" required />
                                    <InputField label="Potassium - K (mg/kg)" value={formData.potassium} onChange={(v) => updateField('potassium', v)} type="number" required />
                                    <SelectField
                                        label="Fertility Level"
                                        value={formData.fertility}
                                        onChange={(v) => updateField('fertility', v)}
                                        options={['Low', 'Medium', 'High']}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h4 className="text-lg font-bold text-green-900 mb-4">Weather Data</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputField label="Air Temperature (°C)" value={formData.air_temperature} onChange={(v) => updateField('air_temperature', v)} type="number" step="0.1" required />
                                    <InputField label="Humidity (%)" value={formData.humidity} onChange={(v) => updateField('humidity', v)} type="number" step="0.1" required />
                                    <InputField label="Wind Speed (km/h)" value={formData.wind_speed} onChange={(v) => updateField('wind_speed', v)} type="number" step="0.1" required />
                                    <InputField label="Rainfall - Last 7 Days (mm)" value={formData.rainfall_last_7_days} onChange={(v) => updateField('rainfall_last_7_days', v)} type="number" step="0.1" required />
                                </div>
                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-4">
                                    <p className="text-sm text-blue-800">
                                        <span className="font-bold">💡 Tip:</span> Weather data helps our AI predict disease risks more accurately based on environmental conditions.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h4 className="text-lg font-bold text-green-900 mb-4">Crop Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <SelectField
                                        label="Previous Crop"
                                        value={formData.previous_crop}
                                        onChange={(v) => updateField('previous_crop', v)}
                                        options={['Wheat', 'Rice', 'Tomato', 'Potato', 'Cucumber', 'Corn', 'Soybean', 'Cotton', 'None']}
                                    />
                                    <SelectField
                                        label="Soil Type"
                                        value={formData.soil_type}
                                        onChange={(v) => updateField('soil_type', v)}
                                        options={['Clay', 'Loam', 'Sandy', 'Silt', 'Peat', 'Chalky', 'Loamy Sand']}
                                    />
                                    <SelectField
                                        label="Cropping Pattern"
                                        value={formData.cropping_pattern}
                                        onChange={(v) => updateField('cropping_pattern', v)}
                                        options={['Monocropping', 'Crop Rotation', 'Intercropping', 'Mixed Cropping', 'Relay Cropping']}
                                    />
                                    <SelectField
                                        label="Next Crop (Planned)"
                                        value={formData.next_crop}
                                        onChange={(v) => {
                                            updateField('next_crop', v);
                                            updateField('crop_type', v); // Update crop_type for backend compatibility
                                        }}
                                        options={['Tomato', 'Potato', 'Cucumber', 'Wheat', 'Rice', 'Corn', 'Soybean', 'Cotton']}
                                    />
                                </div>
                                <div className="bg-green-50 border border-green-100 rounded-lg p-4 mt-4">
                                    <p className="text-sm text-green-800">
                                        <span className="font-bold">🌾 Note:</span> Crop rotation and soil type information helps optimize fertilizer recommendations and disease prevention strategies.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 pt-6 mt-6 border-t border-gray-100">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={handleBack}
                                className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold transition-all"
                            >
                                ← Back
                            </button>
                        )}

                        {currentStep < 3 ? (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="flex-1 px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg transition-all"
                            >
                                Next Step →
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold shadow-lg transition-all flex justify-center items-center gap-2 disabled:opacity-50"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Analyzing...
                                    </>
                                ) : (
                                    <>
                                        🔬 Analyze Soil Health
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                </form>
            </motion.div>
        </div>
    );
}

function InputField({ label, value, onChange, type = "text", step, required }) {
    return (
        <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">{label}</label>
            <input
                type={type}
                step={step}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
                className="w-full bg-white border-2 border-gray-200 rounded-lg p-3 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all placeholder-gray-400"
                placeholder="Enter value"
            />
        </div>
    );
}

function SelectField({ label, value, onChange, options }) {
    return (
        <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">{label}</label>
            <select
                className="w-full bg-white border-2 border-gray-200 rounded-lg p-3 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}
