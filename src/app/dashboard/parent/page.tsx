"use client";

import { useState } from "react";
import { 
  UserCheck, 
  CreditCard, 
  TrendingUp, 
  BellRing, 
  FileCheck,
  Smartphone
} from "lucide-react";

interface ChildStats {
  name: string;
  studentId: string;
  lastAttendanceDate: string;
  attendanceStatus: "Present" | "Absent" | "Late";
  gpaProgress: string;
  paymentDue: number;
}

export default function ParentDashboard() {
  const [childData] = useState<ChildStats>({
    name: "Sadman Sakib",
    studentId: "STU-2025-0849",
    lastAttendanceDate: "2025-05-11",
    attendanceStatus: "Present",
    gpaProgress: "A+ (85.2%)",
    paymentDue: 4500,
  });

  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 space-y-8">
        
        {/* Portal Header */}
        <div className="bg-white border border-border rounded-large p-6 lg:p-8 shadow-soft flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Parent / Guardian Portal</span>
            <h1 className="text-h2 font-extrabold text-primary">Guardian Dashboard</h1>
            <p className="text-xs text-primary/60 mt-1">
              Primary Ward: <span className="font-bold text-primary">{childData.name}</span> ({childData.studentId})
            </p>
          </div>
          <div className="flex items-center gap-3 p-3 bg-accent/5 border border-accent/10 rounded-premium">
            <Smartphone size={20} className="text-accent" />
            <div className="text-xs">
              <span className="block font-bold text-primary">SMS Notifications</span>
              <span className="text-primary/60 font-semibold">Enabled (+88017***123)</span>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Attendance Tracking Card */}
          <div className="bg-white border border-border rounded-large p-6 space-y-6 shadow-soft">
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <div className="p-2 bg-success/10 text-success rounded-lg">
                <UserCheck size={20} />
              </div>
              <h3 className="font-heading font-bold text-primary">Daily Attendance</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-primary/60">Last Checked Date:</span>
                <span className="text-primary">{childData.lastAttendanceDate}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-primary/60">Status:</span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  childData.attendanceStatus === "Present" 
                    ? "bg-success/10 text-success" 
                    : "bg-danger/10 text-danger"
                }`}>
                  {childData.attendanceStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Academic Report Progress */}
          <div className="bg-white border border-border rounded-large p-6 space-y-6 shadow-soft">
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <div className="p-2 bg-secondary/10 text-secondary rounded-lg">
                <TrendingUp size={20} />
              </div>
              <h3 className="font-heading font-bold text-primary">Academic Grade</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-primary/60">Batch Average Grade:</span>
                <span className="text-primary">{childData.gpaProgress}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-primary/60">Exam Progress Reports:</span>
                <button className="text-xs text-secondary font-bold hover:underline">
                  Download Report PDF
                </button>
              </div>
            </div>
          </div>

          {/* Payment Status Check */}
          <div className="bg-white border border-border rounded-large p-6 space-y-6 shadow-soft">
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <div className="p-2 bg-accent/10 text-accent rounded-lg">
                <CreditCard size={20} />
              </div>
              <h3 className="font-heading font-bold text-primary">Tuition Invoices</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-primary/60">Due Tuition Fee:</span>
                <span className="text-primary font-bold">৳{childData.paymentDue}</span>
              </div>
              <button className="btn-premium-gold !h-10 text-xs w-full">
                Pay Tuition Fee Online
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}