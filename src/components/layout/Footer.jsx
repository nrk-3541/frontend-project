import { motion } from 'framer-motion';

const footerLinks = [
    {
        title: 'Product',
        links: ['Features', 'Pricing', 'Services', 'How It Works'],
    },
    {
        title: 'Company',
        links: ['About Us', 'Careers', 'Blog', 'Press'],
    },
    {
        title: 'Resources',
        links: ['Documentation', 'FAQs', 'Support', 'Privacy Policy'],
    },
];

function Footer() {
    return (
        <footer className="bg-gradient-to-b from-purple-900 to-purple-950 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src="/KrishIndria.png"
                                alt="KrishIndria"
                                className="h-12 object-contain brightness-110 mb-4"
                            />
                            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
                                Empowering farmers with AI-driven soil intelligence for better yields and sustainable agriculture.
                            </p>
                            <div className="space-y-3">
                                <a
                                    href="tel:9843291214"
                                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +91 9843291214
                                </a>
                                <a
                                    href="mailto:admin@krishindria.in"
                                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    admin@krishindria.in
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section, index) => (
                        <div key={section.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                                <ul className="space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-white/60 hover:text-white transition-colors text-sm"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} KrishIndria. All rights reserved.
                    </p>
                    <p className="text-white/50 text-sm">
                        Made with ❤️ for Indian Farmers
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
