import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                
                {/* Logo & Copyright */}
                <div>
                    <h2 className="text-lg font-bold">SANDER HOUDIJK</h2>
                    <p className="text-gray-400">&copy; <a href="https://sanderhd.me/">sanderhd.me</a> 2025 - All rights reserved</p>
                </div>

                {/* About Us */}
                <div>
                    <h2 className="text-lg font-bold">ABOUT US</h2>
                    <p>Email: contact@sanderhd.me</p>
                    <p>KVK: 00000000</p>
                    <p>VAT: (NL)000000000B01</p>
                </div>

                {/* Links */}
                <div>
                    <h2 className="text-lg font-bold">LINKS</h2>
                    <ul className="space-y-1">
                        <li>
                            <a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
