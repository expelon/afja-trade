"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Target, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Globe, 
  Users, 
  Heart,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      desc: "Transparency and ethics are the backbone of our operations, building trust with every delivery.",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: Heart,
      title: "Excellence",
      desc: "We pursue perfection in logistics, ensuring the highest standards for our global brand partners.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      icon: Sparkles,
      title: "Innovation",
      desc: "Leveraging tech-enabled supply chains to move essential goods at the speed of modern demand.",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      icon: Users,
      title: "Partnership",
      desc: "We don't just distribute; we grow together with our retailers and brand owners across the region.",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    }
  ];

  const milestones = [
    { year: "2015", event: "Afja General Trading founded with a vision for FMCG excellence." },
    { year: "2018", event: "Expanded our distribution network to cover over 50 cities." },
    { year: "2021", event: "Ranked as one of the fastest growing FMCG companies in the UAE." },
    { year: "2024", event: "Became the regional partner for 30+ global FMCG leaders." },
    { year: "2026", event: "Delivering quality to over 15,000 retail accounts daily." }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920" 
            alt="Afja Distribution Center" 
            fill
            className="object-cover opacity-60 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-7xl font-black text-white leading-tight mb-6">
              Empowering the <br />
              <span className="text-emerald-500">Global Supply Chain.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Afja General Trading is a premier FMCG distribution powerhouse, dedicated to bridging the gap between world-class brands and the heart of local communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-8 leading-[1.15]">
                A Decade of <span className="text-emerald-500">Unyielding Commitment</span> to Quality.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in the heart of the region's commercial hub, Afja began with a simple yet powerful mission: to redefine how essential goods reach the people who need them. What started as a local operation has transformed into a sophisticated logistics network.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Today, we stand as a trusted partner for global FMCG giants, managing everything from climate-controlled warehousing to complex last-mile distribution with surgical precision and deep local expertise.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-black text-emerald-600 mb-2">15k+</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Retail Partners</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-slate-900 mb-2">30+</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Global Brands</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <Image 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Warehouse Interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
              </div>
              {/* Floating element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Growth</p>
                    <p className="text-xl font-bold text-slate-900">100% Reliability</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built on Purpose</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Our guiding principles define every shipment we send and every partnership we build.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2.5rem] group"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-all duration-500">
                <Target className="text-emerald-500 w-8 h-8 group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                To serve as the most reliable bridge between global manufacturers and the local marketplace, ensuring that high-quality daily essentials are distributed efficiently, ethically, and sustainably across the entire region.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2.5rem] group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-all duration-500">
                <Globe className="text-blue-500 w-8 h-8 group-hover:text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                To become the premier omnichannel distribution leader in the FMCG sector, recognized globally for our logistical prowess, data-driven supply chain insights, and our unwavering commitment to quality and integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Core Principles</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">Values that Drive Us</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${v.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <v.icon className={`w-7 h-7 ${v.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Evolution</h2>
            <p className="text-slate-500">Tracking our growth and major achievements over the years.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {milestones.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500 z-10">
                  <ChevronRight className="w-5 h-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-black text-emerald-600 text-xl">{m.year}</div>
                  </div>
                  <div className="text-slate-600 font-medium">{m.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-emerald-600 rounded-3xl p-8 md:p-20 text-center text-white shadow-2xl shadow-emerald-600/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <h2 className="text-2xl md:text-5xl font-bold mb-8 relative z-10 leading-tight">
              Ready to Partner with <br /> 
              the Best in the Industry?
            </h2>
            <p className="text-lg text-emerald-50 max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
              Whether you're a manufacturer looking for world-class distribution or a retailer seeking consistent supply, Afja is your backbone for success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link href="/contact">
                <button className="bg-white text-emerald-600 px-6 py-4 md:px-10 md:py-5 rounded-full font-extrabold text-base md:text-lg hover:shadow-2xl transition-all shadow-xl active:scale-95 group flex items-center justify-center gap-2 w-full sm:w-auto">
                  Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
