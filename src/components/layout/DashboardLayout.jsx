import { useState } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardLayout() {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F0FDF4] flex text-gray-800 font-sans"> {/* Light Green Background */}
            {/* Sidebar (Desktop) */}
            <aside className="w-64 border-r border-gray-800/50 bg-gradient-to-b from-slate-900 to-slate-800 hidden md:flex flex-col text-white shadow-2xl"> {/* Dark Slate Sidebar */}
                <SidebarContent navigate={navigate} />
            </aside>

            {/* Sidebar (Mobile Drawer) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black z-40 md:hidden"
                        />
                        <motion.aside
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-slate-900 to-slate-800 z-50 border-r border-gray-800/50 text-white flex flex-col md:hidden"
                        >
                            <SidebarContent navigate={navigate} />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="flex-1 flex flex-col w-full">
                {/* Top Header */}
                <header className="h-20 border-b border-green-100 bg-white/80 backdrop-blur-md flex items-center justify-between px-4 md:px-8 sticky top-0 z-10 shadow-sm">
                    <div className="flex items-center gap-4">
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-green-800 hover:bg-green-50 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>

                        <div className="text-green-800 text-sm md:text-base">
                            <span className="hidden md:inline font-medium text-green-600">/ Dashboards / </span>
                            <span className="text-green-900 font-bold">Overview</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <div className="text-sm font-bold text-green-900">Manoj Kumar</div>
                            <div className="text-xs text-green-600">Premium Farmer</div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 border-2 border-green-200 flex items-center justify-center font-bold text-lg">M</div>
                    </div>
                </header>

                <main className="flex-1 overflow-auto p-4 md:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

function SidebarContent({ navigate }) {
    return (
        <>
            <div className="h-20 flex items-center px-6 border-b border-white/10 bg-slate-950/50">
                <div className="bg-emerald-500/10 p-2 rounded-xl backdrop-blur-sm flex items-center gap-2 border border-emerald-500/20">
                    <div className="bg-white px-2 py-1 rounded-lg flex items-center gap-2">
                        <img src="/logo-icon.png" alt="Krishindria" className="w-6 h-6 object-contain" />
                        <img src="/logo-text.png" alt="Krishindria" className="h-6 object-contain" />
                    </div>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Main</div>
                <NavItem icon="📊" label="Dashboards" active />
                <NavItem icon="💊" label="Treatments" />
                <NavItem icon="🧪" label="Soil Tests" to="/dashboard/farmer" />
                <NavItem icon="📘" label="Expert Guide" to="/dashboard/recommendations" />

                <div className="px-4 py-2 mt-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Settings</div>
                <NavItem icon="⚙️" label="Profile" />
                <NavItem icon="🔔" label="Notifications" />
            </nav>

            <div className="p-4 border-t border-white/10 bg-slate-950/30">
                <button onClick={() => navigate('/')} className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-red-500/10 rounded-lg w-full transition-all">
                    <span>🚪</span> Logout
                </button>
            </div>
        </>
    );
}

function NavItem({ icon, label, to, active }) {
    const navigate = useNavigate();
    const location = useLocation();
    // Simple check for active state based on URL, or pass it down
    const isActive = location.pathname === to;

    return (
        <button
            onClick={() => to && navigate(to)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive || active
                    ? 'bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 text-emerald-400 border-l-4 border-emerald-500 shadow-lg shadow-emerald-500/10'
                    : 'text-gray-300 hover:bg-slate-700/50 hover:text-white hover:border-l-4 hover:border-slate-600'
                }`}
        >
            <span className="text-lg">{icon}</span>
            <span className="font-medium">{label}</span>
        </button>
    )
}
