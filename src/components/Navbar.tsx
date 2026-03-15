"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBasket, 
  Menu, 
  X
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/#products' },
    { name: 'About Us', href: '/#about' },
    { name: 'Distribution', href: '/#distribution' },
  ];

  // Force scrolled state (visible) if not on home page
  const showSolidNav = isScrolled || !isHome;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${showSolidNav ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Left: Brand Name */}
        <div className="flex justify-start">
          <Link href="/" className={`text-xl font-bold tracking-tight transition-colors duration-300 ${showSolidNav ? 'text-slate-900' : 'text-white'}`}>
            Afja General Trading
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex justify-center items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-semibold transition-all duration-300 hover:text-emerald-500 whitespace-nowrap ${showSolidNav ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex justify-end items-center gap-4">
          <Link href="/contact" className="hidden md:block bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
            Contact
          </Link>

          <button 
            className="md:hidden p-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={showSolidNav ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={showSolidNav ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 flex flex-col gap-5 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-emerald-600/20 mt-2 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
