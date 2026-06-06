"use client";

import { useState } from "react";
import { 
  BarChart, 
  Users, 
  CreditCard, 
  TrendingUp, 
  Activity, 
  PlusCircle, 
  ArrowUpRight 
} from "lucide-react";

interface MetricCard {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ComponentType<any>;
}

export default function AdminDashboard() {
  const [metrics] = useState<MetricCard[]>([
    { title: "Monthly Dynamic Inflow", value: "৳1,842,500", change: "+14.5% versus last cycle", trend: "up", icon: CreditCard },
    { title: "Active Dynamic Students", value: "8,429 pupils", change: "+8.2% versus last cycle", trend: "up", icon: Users },
    { title: "Diagnostic Marks Average", value: "78.4%", change: "+2.1% performance curve", trend: "up", icon: TrendingUp },
  ]);

  const [recentRegistrations] = useState([
    { name: "Sufian Sani", targetCourse: "Medical Prep 2025", branch: "Farmgate Center", status: "Active" },
    { name: "Tasnim Alom", targetCourse: "Engineering Prep 2025", branch: "Uttara Center", status: "Active" },
    { name: "Fatima Kabir", targetCourse: "HSC Fast-Track 2025", branch: "Farmgate Center", status: "Pending Verification" },
  ]);

  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 space-y-8">
        
        {/* Workspace Title bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-border">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">Administrative Workspace</span>
            <h1 className="text-h2 font-extrabold text-primary">System Command Console</h1>
          </div>
          <div className="flex gap-3">
            <button className="btn-premium-secondary !h-11 text-xs gap-2">
              <PlusCircle size={15} /> Add Student Code
            </button>
            <button className="btn-premium-primary !h-11 text-xs gap-2">
              View Audit Logs
            </button>
          </div>
        </div>

        {/* Dynamic Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <div key={idx} className="bg-white border border-border rounded-large p-6 space-y-4 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary/40">{metric.title}</span>
                  <div className="p-2 bg-secondary/5 text-secondary rounded-lg">
                    <IconComponent size={20} />
                  </div>
                </div>
                <div>
                  <span className="text-3xl font-extrabold text-primary">{metric.value}</span>
                  <p className="text-xs text-success font-medium mt-1.5">{metric.change}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Operations and Log Feeds */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Active Registrations Log */}
          <div className="lg:col-span-8 bg-white border border-border rounded-large p-6 lg:p-8 shadow-soft">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <h3 className="font-heading text-lg font-bold text-primary">Live Registration Stream</h3>
              <span className="text-xs font-semibold text-secondary hover:underline cursor-pointer flex items-center gap-1">
                View All <ArrowUpRight size={14} />
              </span>
            </div>

            <div className="divide-y divide-border">
              {recentRegistrations.map((student, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 first:pt-0 last:pb-0 gap-2">
                  <div>
                    <h4 className="font-heading text-sm font-bold text-primary">{student.name}</h4>
                    <p className="text-xs text-primary/50">{student.targetCourse} • {student.branch}</p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded ${
                    student.status === "Active" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                  }`}>
                    {student.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Operations Sidebar */}
          <div className="lg:col-span-4 bg-white border border-border rounded-large p-6 shadow-soft space-y-6">
            <h3 className="font-heading text-lg font-bold text-primary pb-4 border-b border-border">Console Actions</h3>
            
            <div className="space-y-3">
              <button className="w-full text-left p-3.5 bg-surface hover:bg-surface-muted rounded-premium border border-border text-xs font-bold uppercase tracking-wider text-primary transition-all">
                Publish Dynamic Alert Notice
              </button>
              <button className="w-full text-left p-3.5 bg-surface hover:bg-surface-muted rounded-premium border border-border text-xs font-bold uppercase tracking-wider text-primary transition-all">
                Execute Routine Modification
              </button>
              <button className="w-full text-left p-3.5 bg-surface hover:bg-surface-muted rounded-premium border border-border text-xs font-bold uppercase tracking-wider text-primary transition-all">
                Generate Financial Close Ledger
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}