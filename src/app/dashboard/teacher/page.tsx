"use client";

import { useState } from "react";
import { 
  Users, 
  Calendar, 
  PlusCircle, 
  FileSpreadsheet, 
  BookOpen, 
  UserCheck, 
  CheckCircle,
  FileText
} from "lucide-react";

interface BatchSummary {
  batchId: string;
  name: string;
  courseName: string;
  totalStudents: number;
  classTime: string;
}

export default function TeacherDashboard() {
  const [teacherInfo] = useState({
    name: "Dr. Rakibul Hasan",
    department: "Chemistry Department Lead",
    id: "TCH-2025-048",
  });

  const [assignedBatches] = useState<BatchSummary[]>([
    {
      batchId: "CH-Alpha-01",
      name: "Chemistry Alpha 01",
      courseName: "Medical Admission Program",
      totalStudents: 45,
      classTime: "11:30 AM - 01:30 PM (Sat, Mon)",
    },
    {
      batchId: "CH-Beta-02",
      name: "Chemistry Beta 02",
      courseName: "Engineering Admission Prep",
      totalStudents: 38,
      classTime: "02:00 PM - 04:00 PM (Sun, Tue)",
    },
  ]);

  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 space-y-8">
        
        {/* Portal Welcome Banner */}
        <div className="bg-white border border-border rounded-large p-6 lg:p-8 shadow-soft flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <Users size={32} />
            </div>
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Faculty Management Portal</span>
              <h1 className="text-h2 font-extrabold text-primary">{teacherInfo.name}</h1>
              <p className="text-xs text-primary/60 mt-1">
                ID: {teacherInfo.id} | {teacherInfo.department}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="btn-premium-secondary !h-11 text-xs gap-2">
              <Calendar size={15} /> Log Attendance
            </button>
            <button className="btn-premium-primary !h-11 text-xs gap-2">
              <PlusCircle size={15} /> Enter Diagnostic Marks
            </button>
          </div>
        </div>

        {/* Assigned Classes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Batches Overview List */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-h3 font-bold text-primary">Assigned Batches</h2>
            <div className="space-y-4">
              {assignedBatches.map((batch) => (
                <div 
                  key={batch.batchId} 
                  className="bg-white border border-border rounded-premium p-6 hover:shadow-soft transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-secondary uppercase bg-secondary/5 px-2.5 py-1 rounded">
                      Batch ID: {batch.batchId}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-primary pt-1">{batch.name}</h3>
                    <p className="text-xs text-primary/50">{batch.courseName}</p>
                    <p className="text-xs text-primary/60 font-semibold flex items-center gap-1.5 pt-1">
                      <Calendar size={12} /> {batch.classTime}
                    </p>
                  </div>

                  <div className="bg-surface border border-border px-4 py-3 rounded-premium text-center min-w-[120px] shrink-0">
                    <span className="block text-[10px] uppercase font-bold text-primary/40">Registered</span>
                    <span className="text-lg font-bold text-primary">{batch.totalStudents} Pupils</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Operations panel */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-h3 font-bold text-primary">Instructor Console</h2>
            <div className="bg-white border border-border rounded-large p-6 space-y-4 shadow-soft">
              <button className="w-full flex items-center justify-between p-3.5 rounded-premium border border-border hover:bg-surface transition-all text-xs font-bold uppercase tracking-wider text-primary">
                <span className="flex items-center gap-3">
                  <FileSpreadsheet size={16} className="text-secondary" /> Download Batch Sheets
                </span>
              </button>
              <button className="w-full flex items-center justify-between p-3.5 rounded-premium border border-border hover:bg-surface transition-all text-xs font-bold uppercase tracking-wider text-primary">
                <span className="flex items-center gap-3">
                  <UserCheck size={16} className="text-secondary" /> Update Student Records
                </span>
              </button>
              <button className="w-full flex items-center justify-between p-3.5 rounded-premium border border-border hover:bg-surface transition-all text-xs font-bold uppercase tracking-wider text-primary">
                <span className="flex items-center gap-3">
                  <FileText size={16} className="text-secondary" /> Submit Weekly Lesson Plans
                </span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}