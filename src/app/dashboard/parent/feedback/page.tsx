"use client";

import { useState } from "react";
import { MessageSquare, User, Smartphone, CheckCircle, BellRing } from "lucide-react";

interface TeacherFeedback {
  date: string;
  teacherName: string;
  subject: string;
  comment: string;
}

const FEEDBACK_LIST: TeacherFeedback[] = [
  {
    date: "2025-05-09",
    teacherName: "Dr. Rakibul Hasan",
    subject: "Chemistry",
    comment: "Sadman demonstrates strong comprehension of molecular structures but requires additional focus on balancing redox equations during weekly mock trials.",
  },
];

export default function ParentFeedbackPage() {
  const [feedback] = useState<TeacherFeedback[]>(FEEDBACK_LIST);
  const [smsPreferences, setSmsPreferences] = useState({
    attendance: true,
    results: true,
    notices: false,
  });

  const handleToggle = (key: keyof typeof smsPreferences) => {
    setSmsPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 space-y-8">
        
        {/* Module Header */}
        <div className="pb-6 border-b border-border">
          <span className="text-xs font-bold text-accent uppercase tracking-widest font-sans">Mentorship Hub</span>
          <h1 className="text-h2 font-extrabold text-primary mt-1">Instructor Feedback & Alerts</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Teacher Feedback Column */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-h3 font-bold text-primary">Instructor Comments</h2>
            
            <div className="space-y-4">
              {feedback.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-border rounded-large p-6 space-y-4 shadow-soft"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border text-xs font-semibold text-primary/50">
                    <span className="flex items-center gap-1.5 text-primary">
                      <User size={14} className="text-primary/40" /> {item.teacherName} ({item.subject})
                    </span>
                    <span>Date Logged: {item.date}</span>
                  </div>

                  <p className="text-sm text-primary/75 leading-relaxed font-normal italic bg-surface/50 border-l-2 border-accent p-4 rounded-r-premium">
                    "{item.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SMS Broadcast Preferences Sidebar */}
          <div className="lg:col-span-4 bg-white border border-border rounded-large p-6 shadow-soft space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-border text-secondary">
              <Smartphone size={20} />
              <h3 className="font-heading text-base font-bold text-primary">SMS Broadcast Settings</h3>
            </div>

            <p className="text-xs text-primary/60 leading-relaxed font-medium">
              Toggle automatic real-time SMS broadcasts dispatched to your registered parent contact number.
            </p>

            <div className="space-y-4 pt-2">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-xs font-bold uppercase tracking-wider text-primary/70">Attendance Logs</span>
                <input
                  type="checkbox"
                  checked={smsPreferences.attendance}
                  onChange={() => handleToggle("attendance")}
                  className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-xs font-bold uppercase tracking-wider text-primary/70">Diagnostic Results</span>
                <input
                  type="checkbox"
                  checked={smsPreferences.results}
                  onChange={() => handleToggle("results")}
                  className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-xs font-bold uppercase tracking-wider text-primary/70">Urgent Board Notices</span>
                <input
                  type="checkbox"
                  checked={smsPreferences.notices}
                  onChange={() => handleToggle("notices")}
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