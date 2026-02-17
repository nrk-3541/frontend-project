import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Temporary logic
        if (formData.email === 'admin@krishindria.com') {
            navigate('/dashboard/admin');
        } else {
            navigate('/dashboard/farmer');
        }
    };

    return (
        <div className="min-h-screen flex bg-brand-navy">
            {/* Left Side - Image/Brand */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-brand-dark">
                <div className="absolute inset-0 bg-brand-teal/10 z-10"></div>
                {/* Background Image */}
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
                        <h1 className="text-5xl font-bold mb-6">Farming Intelligence for the Future.</h1>
                        <p className="text-lg text-gray-300">Join thousands of farmers using AI to predict diseases, optimize nutrients, and secure their harvest.</p>
                    </div>

                    <div className="flex gap-4 text-sm text-gray-400">
                        <span>© 2026 Krishindria AI</span>
                        <span>Privacy Policy</span>
                        <span>Terms</span>
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
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-brand-navy mb-2">Welcome Back</h2>
                        <p className="text-gray-500">Please enter your details to sign in.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input
                                type="email"
                                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
                                placeholder="farmer@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-4 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-500 font-bold border-r-none">
                                    +91
                                </span>
                                <input
                                    type="tel"
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-r-xl text-gray-900 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
                                    placeholder="98765 43210"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-gray-700 text-sm font-bold">Password</label>
                                <a href="#" className="text-xs text-brand-teal font-semibold hover:underline">Forgot password?</a>
                            </div>
                            <input
                                type="password"
                                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </div>

                        <button type="submit" className="w-full bg-brand-navy hover:bg-brand-teal text-white font-bold p-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 duration-200">
                            Sign In to Account
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                            <span className="text-xl">G</span> <span className="text-sm font-semibold text-gray-600">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                            <span className="text-xl">🍎</span> <span className="text-sm font-semibold text-gray-600">Apple</span>
                        </button>
                    </div>

                    <p className="mt-8 text-center text-sm text-gray-500">
                        Don't have an account? <Link to="/register" className="text-brand-teal font-bold hover:underline">Create free account</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
