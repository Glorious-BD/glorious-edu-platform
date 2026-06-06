"use client";

import { useState } from "react";
import { CreditCard, Download, FileText, CheckCircle, Clock } from "lucide-react";

interface Invoice {
  id: string;
  invoiceNo: string;
  amount: number;
  dueDate: string;
  status: "paid" | "unpaid";
  paymentMethod?: string;
  transactionId?: string;
}

const CUSTOM_INVOICES: Invoice[] = [
  {
    id: "INV-001",
    invoiceNo: "GE-2025-0982",
    amount: 15000,
    dueDate: "2025-05-15",
    status: "paid",
    paymentMethod: "bKash Mobile",
    transactionId: "TRX-BK-90281",
  },
  {
    id: "INV-002",
    invoiceNo: "GE-2025-1045",
    amount: 4500,
    dueDate: "2025-06-01",
    status: "unpaid",
  },
];

export default function StudentPaymentsPage() {
  const [invoices] = useState<Invoice[]>(CUSTOM_INVOICES);

  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 space-y-8">
        
        {/* Module Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-border">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest font-sans">Billing Portal</span>
            <h1 className="text-h2 font-extrabold text-primary">Invoices & Payments</h1>
          </div>
        </div>

        {/* Invoices List */}
        <div className="space-y-6 max-w-4xl">
          {invoices.map((invoice) => {
            const isPaid = invoice.status === "paid";
            return (
              <div 
                key={invoice.id}
                className="bg-white border border-border rounded-large p-6 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-border">
                  <div className="space-y-1">
                    <span className="text-xs text-primary/40 font-bold uppercase tracking-wider">Invoice Code</span>
                    <h3 className="font-heading text-base font-bold text-primary">{invoice.invoiceNo}</h3>
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded w-fit ${
                    isPaid ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                  }`}>
                    {invoice.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-primary/70 mb-4 font-semibold">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-primary/40 mb-1">Billing Amount</span>
                    <span className="text-primary font-extrabold text-base">৳{invoice.amount}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-primary/40 mb-1">Due Date</span>
                    <span className="text-primary">{invoice.dueDate}</span>
                  </div>
                  {isPaid && (
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-primary/40 mb-1">Transaction ID</span>
                      <span className="text-primary font-mono text-xs">{invoice.transactionId}</span>
                    </div>
                  )}
                </div>

                {/* Download invoice or proceed to payment gateways */}
                <div className="flex justify-end gap-3 pt-4 border-t border-border mt-4">
                  {isPaid ? (
                    <button className="inline-flex items-center gap-2 text-xs font-bold text-secondary hover:text-primary transition-colors">
                      <Download size={14} /> Download Payment Receipt
                    </button>
                  ) : (
                    <button className="btn-premium-gold !h-10 text-xs gap-2 !px-4">
                      <CreditCard size={14} /> Proceed with Mobile Payment
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}