import type { Metadata } from "next";
import { AlertTriangle, Bell, Calendar, Pin } from "lucide-react";
import { generateMetadataHelper } from "@/utils/seo";

export const metadata: Metadata = generateMetadataHelper({
  title: "Notice Board | Glorious Edu BD",
  description: "Stay updated with verified notices, mock schedule updates, exam details, and routine modifications across all branches.",
  path: "/resources/notices",
});

interface Notice {
  title: string;
  description: string;
  publishedAt: string;
  priority: "high" | "normal";
  branch: string;
}

const NOTICES: Notice[] = [
  {
    title: "HSC 2025 Model Test Examination Schedule Released",
    description: "The complete, board-standard schedule for all active batches is now accessible. Registered candidates must collect admit credentials from their respective branch coordinators by May 15, 2025.",
    publishedAt: "May 10, 2025",
    priority: "high",
    branch: "All Branches",
  },
  {
    title: "Urgent: Admission Office Timing Updates (Farmgate Center)",
    description: "Please note that the helpdesk and counseling office at the Farmgate Central Center will remain open from 8:00 AM to 9:00 PM throughout the admission season to facilitate application processes.",
    publishedAt: "May 08, 2025",
    priority: "normal",
    branch: "Farmgate Central",
  },
  {
    title: "Monthly Physics Diagnostic Test (All Batches)",
    description: "The periodic Diagnostic Test covering electricity and mechanics units will be held on Friday, May 20, 2025. Marks earned will contribute to performance charts displayed in the Parent Portal.",
    publishedAt: "May 05, 2025",
    priority: "normal",
    branch: "All Branches",
  },
];

export default function NoticeBoardPage() {
  return (
    <div className="py-16 lg:py-24 bg-surface/30 min-h-screen">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Header info */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-h1 font-extrabold mb-4 tracking-tight">Official Notice Board</h1>
          <p className="text-body text-primary/70">
            Access critical alerts, timetable modifications, and branch announcements directly.
          </p>
        </header>

        {/* Notices layout */}
        <div className="max-w-4xl mx-auto space-y-6">
          {NOTICES.map((notice, idx) => {
            const isHighPriority = notice.priority === "high";
            return (
              <div 
                key={idx} 
                className={`bg-white border rounded-large p-6 lg:p-8 transition-all duration-300 hover:shadow-soft flex items-start gap-4 ${
                  isHighPriority ? "border-danger/30 bg-danger/[0.01]" : "border-border"
                }`}
              >
                {/* Visual Indicators */}
                <div className={`p-3 rounded-premium shrink-0 hidden sm:block ${
                  isHighPriority ? "bg-danger/10 text-danger" : "bg-secondary/10 text-secondary"
                }`}>
                  {isHighPriority ? <AlertTriangle size={24} /> : <Bell size={24} />}
                </div>

                {/* Content details */}
                <div className="space-y-3 flex-grow">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <span className="text-xs text-primary/50 flex items-center gap-1 font-semibold">
                      <Calendar size={12} /> {notice.publishedAt}
                    </span>
                    <span className="text-primary/20 text-xs hidden sm:block">•</span>
                    <span className="text-xs text-secondary font-bold uppercase tracking-wider">{notice.branch}</span>
                    {isHighPriority && (
                      <span className="text-[10px] font-bold text-danger bg-danger/10 px-2 py-0.5 rounded uppercase tracking-wider">
                        Urgent Action
                      </span>
                    )}
                  </div>

                  <h2 className="font-heading text-lg lg:text-xl font-bold text-primary leading-snug">
                    {notice.title}
                  </h2>

                  <p className="text-sm text-primary/70 leading-relaxed font-normal">
                    {notice.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}