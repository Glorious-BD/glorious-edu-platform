"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle } from "lucide-react";

const BRANCHES = [
  {
    name: "Farmgate Central Center",
    address: "Level 4, High-Tech Plaza, Indira Road, Farmgate, Dhaka",
    phone: "+8801711223344",
    email: "farmgate@gloriousedubd.com",
  },
  {
    name: "Uttara Branch",
    address: "Sector 4, Executive Mansions, Rabindra Sarani, Uttara, Dhaka",
    phone: "+8801711223355",
    email: "uttara@gloriousedubd.com",
  },
  {
    name: "Chattogram Branch",
    address: "House 24, Road 2, Chawkbazar, Chattogram",
    phone: "+8801711223366",
    email: "chattogram@gloriousedubd.com",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-h1 font-extrabold mb-4">Contact Our Offices</h1>
          <p className="text-body text-primary/70">
            Get in touch with support, schedule a physical consultation, or locate one of our regional branches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Quick Contact & Branch Listing */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface rounded-large border border-border p-8 space-y-6">
              <h2 className="text-h3 font-bold text-primary">Need Instant Support?</h2>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/8801711223344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-500/5 hover:bg-green-500/10 transition-colors border border-green-500/10 rounded-premium text-green-700"
                >
                  <MessageSquare size={20} />
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-green-600/80">WhatsApp Support</span>
                    <span className="text-sm font-semibold">+8801711223344</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-secondary/5 border border-secondary/10 rounded-premium text-secondary">
                  <Phone size={20} />
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-secondary/80">Support Hotline</span>
                    <span className="text-sm font-semibold">16244 (Local Toll-Free)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Branches Card List */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary">Our Branches</h3>
              {BRANCHES.map((branch, idx) => (
                <div key={idx} className="border border-border rounded-premium p-6 space-y-2 hover:bg-surface/30">
                  <h4 className="font-heading font-bold text-primary text-base">{branch.name}</h4>
                  <p className="text-xs text-primary/60 flex items-start gap-2">
                    <MapPin size={14} className="shrink-0 text-primary/40 mt-0.5" />
                    {branch.address}
                  </p>
                  <p className="text-xs text-primary/70 font-semibold flex items-center gap-2">
                    <Phone size={14} className="text-primary/40" />
                    {branch.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Consultation Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-large border border-border p-8 shadow-elevation">
            <h2 className="text-h3 font-bold mb-6">Leave a Message</h2>
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary">Message Sent Successfully</h3>
                <p className="text-sm text-primary/60 max-w-sm mx-auto">
                  Our service desk will reply to your registered email address within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full h-12 px-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                      placeholder="e.g., Ahsan Kabir"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full h-12 px-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                      placeholder="e.g., ahsan@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Phone</label>
                  <input
                    required
                    type="tel"
                    className="w-full h-12 px-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                    placeholder="e.g., +8801700000000"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full p-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                    placeholder="Describe your inquiry..."
                  />
                </div>

                <button type="submit" className="btn-premium-primary w-full flex items-center justify-center gap-2">
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}