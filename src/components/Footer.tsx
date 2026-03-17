"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ShoppingBasket, 
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Afja General Trading
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Leading the way in FMCG distribution with a commitment to quality, reliability, and sustainable growth for our partners.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">About Us</Link></li>
              <li><Link href="/#products" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Our Products</Link></li>
              <li><Link href="/#distribution" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Distribution Network</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Contact Support</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Partner Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Stay updated with our latest products and news.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 w-full" />
              <button className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© 2026 Afja FMCG Distribution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
