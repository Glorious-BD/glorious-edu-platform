"use client";

import { useState } from "react";
import { Calendar, MapPin, Users, Ticket, ArrowRight, CheckCircle } from "lucide-react";

interface AcademicEvent {
  id: string;
  title: string;
  category: "Seminar" | "Workshop" | "Orientation" | "Competition";
  date: string;
  time: string;
  location: string;
  capacity: number;
  description: string;
}

const EVENTS_DATABASE: AcademicEvent[] = [
  {
    id: "EV-001",
    title: "Medical Admission Strategy Seminar 2025",
    category: "Seminar",
    date: "2025-05-25",
    time: "10:30 AM - 01:00 PM",
    location: "Farmgate Central Auditorium, Dhaka",
    capacity: 150,
    description: "A comprehensive seminar covering high-yield syllabus breakdowns and exam time management tips from senior medical experts.",
  },
  {
    id: "EV-002",
    title: "Engineering Physics Practical Workshop",
    category: "Workshop",
    date: "2025-06-05",
    time: "02:00 PM - 05:00 PM",
    location: "Uttara Center Lab, Dhaka",
    capacity: 60,
    description: "Hands-on diagnostic problem solving for advanced electricity, magnetism, and wave mechanics modules.",
  },
];

export default function EventsBoardPage() {
  const [activeTab, setActiveTab] = useState<"All" | "Seminar" | "Workshop" | "Competition">("All");
  const [rsvpSuccess, setRsvpSuccess] = useState<Record<string, boolean>>({});

  const filteredEvents = EVENTS_DATABASE.filter((event) => {
    return activeTab === "All" || event.category === activeTab;
  });

  const handleRSVP = (eventId: string) => {
    setRsvpSuccess((prev) => ({ ...prev, [eventId]: true }));
  };

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Module Header */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-h1 font-extrabold mb-4 tracking-tight">Seminars & Academic Events</h1>
          <p className="text-body text-primary/70">
            Register for our upcoming academic strategy seminars, hands-on physics workshops, and high-tier student orientations.
          </p>
        </header>

        {/* Filter Controls */}
        <div className="flex gap-2 overflow-x-auto pb-4 border-b border-border mb-12 justify-start lg:justify-center scrollbar-none">
          {(["All", "Seminar", "Workshop", "Competition"] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-premium shrink-0 transition-all duration-300 ${
                activeTab === category 
                  ? "bg-secondary text-white shadow-soft" 
                  : "bg-surface text-primary/60 border border-border hover:bg-surface-muted"
              }`}
            >
              {category}s
            </button>
          ))}
        </div>

        {/* Card Output List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white border border-border rounded-large p-6 lg:p-8 flex flex-col justify-between hover:shadow-soft transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-secondary bg-secondary/5 px-2.5 py-1 rounded tracking-widest">
                    {event.category}
                  </span>
                  <span className="text-xs text-primary/40 font-semibold flex items-center gap-1">
                    <Users size={12} /> Limit: {event.capacity} seats
                  </span>
                </div>

                <h3 className="font-heading text-lg lg:text-xl font-bold text-primary leading-snug">
                  {event.title}
                </h3>

                <p className="text-sm text-primary/65 leading-relaxed">
                  {event.description}
                </p>

                {/* Sub Metadata parameters */}
                <div className="grid grid-cols-2 gap-4 border-t border-border pt-4 text-xs text-primary/70">
                  <div className="space-y-1">
                    <span className="block text-[10px] uppercase font-bold text-primary/40">Event Schedule</span>
                    <span className="font-semibold text-primary">{event.date} • {event.time}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] uppercase font-bold text-primary/40">Location</span>
                    <span className="font-semibold text-primary">{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-border mt-6">
                {rsvpSuccess[event.id] ? (
                  <div className="flex items-center justify-center gap-2 p-2.5 bg-success/5 border border-success/10 rounded-premium text-success text-xs font-bold uppercase tracking-wider">
                    <CheckCircle size={16} /> RSVP Booked Successfully
                  </div>
                ) : (
                  <button 
                    onClick={() => handleRSVP(event.id)}
                    className="btn-premium-primary w-full text-xs font-bold uppercase tracking-wider !h-11 flex items-center justify-center gap-2"
                  >
                    <Ticket size={14} /> RSVP Seat Admission <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}