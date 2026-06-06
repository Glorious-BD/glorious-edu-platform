"use client";

import { useState } from "react";
import { Clock, MapPin, User, Bookmark } from "lucide-react";

interface ClassRoutineItem {
  day: string;
  subject: string;
  teacher: string;
  startTime: string;
  endTime: string;
  roomNo: string;
  batchName: string;
}

const MOCK_ROUTINES: ClassRoutineItem[] = [
  { day: "Saturday", subject: "Physics (Mechanics)", teacher: "Engr. Tanvir Ahmed", startTime: "09:00 AM", endTime: "11:00 AM", roomNo: "Room 402", batchName: "PH-Beta-02" },
  { day: "Saturday", subject: "Chemistry (Organic)", teacher: "Dr. Rakibul Hasan", startTime: "11:30 AM", endTime: "01:30 PM", roomNo: "Room 402", batchName: "PH-Beta-02" },
  { day: "Monday", subject: "Advanced Math (Calculus)", teacher: "Afsana Rahman", startTime: "09:00 AM", endTime: "11:00 AM", roomNo: "Room 305", batchName: "PH-Beta-02" },
  { day: "Wednesday", subject: "Physics Mock Evaluation", teacher: "Engr. Tanvir Ahmed", startTime: "02:00 PM", endTime: "04:00 PM", roomNo: "Exam Hall A", batchName: "PH-Beta-02" },
];

const DAYS_OF_WEEK = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function RoutineViewer() {
  const [selectedDay, setSelectedDay] = useState<string>("Saturday");

  const dailyRoutines = MOCK_ROUTINES.filter((item) => item.day === selectedDay);

  return (
    <div className="bg-white border border-border rounded-large p-6 lg:p-8 shadow-soft">
      {/* Horizontal Day Selector */}
      <div className="flex gap-2 overflow-x-auto pb-4 border-b border-border mb-6 scrollbar-none">
        {DAYS_OF_WEEK.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-premium shrink-0 transition-all duration-300 ${
              selectedDay === day 
                ? "bg-secondary text-white shadow-soft" 
                : "bg-surface text-primary/60 border border-border hover:bg-surface-muted"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Daily Routine Items List */}
      {dailyRoutines.length > 0 ? (
        <div className="space-y-4">
          {dailyRoutines.map((item, idx) => (
            <div 
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-border rounded-premium bg-surface/35 hover:bg-surface/60 transition-colors gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-secondary uppercase bg-secondary/5 px-2 py-0.5 rounded">
                    {item.batchName}
                  </span>
                  <h4 className="font-heading text-base font-bold text-primary">{item.subject}</h4>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-primary/60">
                  <span className="flex items-center gap-1">
                    <User size={12} className="text-primary/40" /> {item.teacher}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-primary/40" /> {item.roomNo}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-primary/70 bg-white border border-border px-3.5 py-2 rounded-premium w-fit shrink-0">
                <Clock size={13} className="text-secondary" />
                <span>{item.startTime} - {item.endTime}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed border-border rounded-premium">
          <p className="text-sm text-primary/50 font-medium">No active lectures scheduled for {selectedDay}.</p>
        </div>
      )}
    </div>
  );
}