"use client";

import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Send, 
  Globe
} from 'lucide-react';

const ContactPage = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      value: "+971 4 123 4567",
      desc: "Monday - Friday, 9am - 6pm",
      color: "bg-blue-500"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@afja.ae",
      desc: "We reply within 24 hours",
      color: "bg-emerald-500"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-4 border border-emerald-500/20">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              Let&apos;s Start a <span className="text-emerald-500">Conversation</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re looking to partner with us, inquire about our products, or need distribution support, our team is here to help you scale.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {contactDetails.map((detail, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white hover:border-emerald-500/30 transition-all group text-center flex flex-col items-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${detail.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <detail.icon className={`w-7 h-7 ${detail.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{detail.title}</h3>
              <p className="text-lg font-semibold text-slate-800 mb-1">{detail.value}</p>
              <p className="text-sm text-slate-500">{detail.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-white"
          >
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Send us a Message</h2>
              <p className="text-slate-500">Fill out the form below and we&apos;ll get back to you shortly.</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none">
                  <option>Partnership Inquiry</option>
                  <option>Product Information</option>
                  <option>Distribution Request</option>
                  <option>General Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-3 group active:scale-[0.98]">
                Submit Request
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
