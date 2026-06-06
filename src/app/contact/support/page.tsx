"use client";

import { useState } from "react";
import { MessageSquare, Phone, Calendar, CheckCircle, Info } from "lucide-react";

export default function SupportCenterPage() {
  const [ticketData, setTicketData] = useState({ fullName: "", studentId: "", issueType: "Academic Support", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 lg:py-24 bg-surface/35 min-h-screen">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Module Title Header */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-h1 font-extrabold mb-4 tracking-tight">Support & Counseling Center</h1>
          <p className="text-body text-primary/70">
            Submit a support ticket for technical portal access issues, or reserve a session with an academic counselor.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Quick Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-border rounded-large p-6 space-y-4 shadow-soft">
              <h2 className="text-lg font-bold text-primary border-b border-border pb-4">Helpdesk Hotlines</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-primary/70 font-semibold">
                  <Phone size={16} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-primary/40 mb-0.5">Call Technical Support</span>
                    <span className="text-primary">+8801711223399</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-primary/70 font-semibold">
                  <MessageSquare size={16} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-primary/40 mb-0.5">Email Support Desk</span>
                    <span className="text-primary">support@gloriousedubd.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Counseling Reminder */}
            <div className="p-4 bg-secondary/5 border border-secondary/10 rounded-premium text-secondary">
              <p className="text-xs leading-relaxed font-semibold">
                Academic counseling sessions are held physically at our Farmgate Central Center on Saturdays and Mondays. Reservations must be booked 24 hours in advance.
              </p>
            </div>
          </div>

          {/* Ticket Ingestion Form */}
          <div className="lg:col-span-7 bg-white border border-border rounded-large p-6 lg:p-8 shadow-elevation">
            <h3 className="font-heading text-lg font-bold text-primary border-b border-border pb-4 mb-6">File a Support Ticket</h3>
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary">Ticket Submitted</h3>
                <p className="text-xs text-primary/60 max-w-sm mx-auto">
                  Your reference ID is logged. A support specialist will follow up within 12 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-sm font-semibold text-primary/70">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full h-11 px-4 rounded-premium border border-border text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Student ID (Optional)</label>
                    <input
                      type="text"
                      className="w-full h-11 px-4 rounded-premium border border-border text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
                      placeholder="STU-2025-XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Issue Type / Category</label>
                  <select
                    className="w-full h-11 px-4 rounded-premium border border-border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
                  >
                    <option value="Academic Support">Academic Support Query</option>
                    <option value="Portal Access Issue">Portal / Password Retrieval</option>
                    <option value="Billing Discrepancy">Tuition / Payment Verification</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full p-4 rounded-premium border border-border text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
                    placeholder="Describe your issue or specify a counseling date..."
                  />
                </div>

                <button type="submit" className="btn-premium-primary w-full flex items-center justify-center gap-2 !h-11 text-xs font-bold uppercase tracking-wider">
                  Submit Ticket
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}