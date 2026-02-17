import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Temporary logic
        navigate('/dashboard/farmer');
    };

    return (
        <div className="min-h-screen flex bg-brand-navy">
            {/* Left Side - Branding (Same as Login for consistency) */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-brand-dark">
                <div className="absolute inset-0 bg-brand-teal/10 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1625246333195-58405079d3f1?q=80&w=2000&auto=format&fit=crop"
                    alt="Agriculture Field"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />

                <div className="relative z-20 flex flex-col justify-between h-full p-12 text-white">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-lg w-fit">
                        <img src="/logo-icon.png" alt="Krishindria" className="w-10 h-10 object-contain" />
                        <img src="/logo-text.png" alt="Krishindria" className="h-8 object-contain" />
                    </div>
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold mb-6">Start your Smart Farming Journey.</h1>
                        <p className="text-lg text-gray-300">Create an account to access AI soil analysis, expert recommendations, and yield forecasts.</p>
                    </div>

                    <div className="flex gap-4 text-sm text-gray-400">
                        <span>© 2026 Krishindria AI</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white relative">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full max-w-md"
                >
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-brand-navy mb-2">Create Account</h2>
                        <p className="text-gray-500">Join our community of smart farmers.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-xs font-bold mb-1">Full Name</label>
                            <input
                                type="text"
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
                                placeholder="Manoj Kumar"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-xs font-bold mb-1">Email Address</label>
                            <input
                                type="email"
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
                                placeholder="farmer@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-xs font-bold mb-1">Phone Number</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-500 font-bold border-r-none text-sm">
                                    +91
                                </span>
                                <input
                                    type="tel"
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-r-xl text-gray-900 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
                                    placeholder="98765 43210"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 text-xs font-bold mb-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-xs font-bold mb-1">Confirm</label>
                                <input
                                    type="password"
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
                                    placeholder="••••••••"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 py-2">
                            <input type="checkbox" id="terms" className="rounded text-brand-teal focus:ring-brand-teal" required />
                            <label htmlFor="terms" className="text-xs text-gray-500">
                                I agree to the <a href="#" className="text-brand-teal hover:underline">Terms of Service</a> and <a href="#" className="text-brand-teal hover:underline">Privacy Policy</a>
                            </label>
                        </div>

                        <button type="submit" className="w-full bg-brand-navy hover:bg-brand-teal text-white font-bold p-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 duration-200">
                            Create Account
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-500">
                        Already have an account? <Link to="/login" className="text-brand-teal font-bold hover:underline">Sign In</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
