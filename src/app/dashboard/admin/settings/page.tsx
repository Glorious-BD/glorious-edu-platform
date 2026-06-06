"use client";

import { useState } from "react";
import { Settings, Shield, CreditCard, Network, Save, BellRing } from "lucide-react";

export default function AdminSettingsPage() {
  const [gatewayStatus, setGatewayStatus] = useState({
    bKashActive: true,
    nagadActive: false,
    creditCardActive: true,
  });

  const [systemAlerts, setSystemAlerts] = useState({
    maintenanceMode: false,
    restrictRegistrations: false,
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 space-y-8">
        
        {/* Module Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-border">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-1">
              <Settings size={14} /> Global Configuration Console
            </span>
            <h1 className="text-h2 font-extrabold text-primary mt-1">Platform Settings</h1>
          </div>
          <button 
            onClick={handleSave} 
            disabled={isSaving}
            className="btn-premium-primary !h-11 text-xs gap-2"
          >
            <Save size={15} /> {isSaving ? "Saving..." : "Save Settings"}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Payment Gateway Configurations */}
          <div className="lg:col-span-6 bg-white border border-border rounded-large p-6 lg:p-8 space-y-6 shadow-soft">
            <h2 className="text-lg font-bold text-primary flex items-center gap-2 pb-4 border-b border-border">
              <CreditCard size={18} className="text-secondary" /> Active Payment Gateways
            </h2>

            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-primary/70">bKash Mobile Payment</span>
                  <span className="text-[10px] text-primary/40 font-medium">Automatic verification</span>
                </div>
                <input
                  type="checkbox"
                  checked={gatewayStatus.bKashActive}
                  onChange={() => setGatewayStatus(prev => ({ ...prev, bKashActive: !prev.bKashActive }))}
                  className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-primary/70">Nagad Mobile Payment</span>
                  <span className="text-[10px] text-primary/40 font-medium">Manual ledger integration</span>
                </div>
                <input
                  type="checkbox"
                  checked={gatewayStatus.nagadActive}
                  onChange={() => setGatewayStatus(prev => ({ ...prev, nagadActive: !prev.nagadActive }))}
                  className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-primary/70">Visa / Mastercard Processor</span>
                  <span className="text-[10px] text-primary/40 font-medium">SSLCommerz secure routing</span>
                </div>
                <input
                  type="checkbox"
                  checked={gatewayStatus.creditCardActive}
                  onChange={() => setGatewayStatus(prev => ({ ...prev, creditCardActive: !prev.creditCardActive }))}
                  className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* System Control Settings */}
          <div className="lg:col-span-6 bg-white border border-border rounded-large p-6 lg:p-8 space-y-6 shadow-soft">
            <h2 className="text-lg font-bold text-primary flex items-center gap-2 pb-4 border-b border-border">
              <Shield size={18} className="text-secondary" /> System Security Flags
            </h2>

            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-primary/70">Maintenance Mode</span>
                  <span className="text-[10px] text-primary/40 font-medium">Lock portal login routes</span>
                </div>
                <input
                  type="checkbox"
                  checked={systemAlerts.maintenanceMode}
                  onChange={() => setSystemAlerts(prev => ({ ...prev, maintenanceMode: !prev.maintenanceMode }))}
                  className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-primary/70">Restrict Lead Ingestion</span>
                  <span className="text-[10px] text-primary/40 font-medium">Temporary freeze on admissions</span>
                </div>
                <input
                  type="checkbox"
                  checked={systemAlerts.restrictRegistrations}
                  onChange={() => setSystemAlerts(prev => ({ ...prev, restrictRegistrations: !prev.restrictRegistrations }))}
                  className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary cursor-pointer"
                />
              </label>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}