"use client";

import { useState } from "react";
import { FileText, Download, Bookmark, Search, SlidersHorizontal } from "lucide-react";

interface StudyMaterial {
  title: string;
  course: string;
  subject: string;
  fileSize: string;
  materialType: "Lecture Slide" | "Class Note" | "Homework Sheet";
  dateAdded: string;
}

const STUDY_MATERIALS: StudyMaterial[] = [
  {
    title: "Electrochemistry Reduction Potentials Guide",
    course: "Medical Admission Program",
    subject: "Chemistry",
    fileSize: "3.2 MB",
    materialType: "Lecture Slide",
    dateAdded: "2025-05-10",
  },
  {
    title: "Thermodynamics Standard Work Equations Sheet",
    course: "Engineering Admission Prep",
    subject: "Physics",
    fileSize: "1.8 MB",
    materialType: "Class Note",
    dateAdded: "2025-05-08",
  },
  {
    title: "Organic Chemistry Carbonyl Compound Tests",
    course: "Medical Admission Program",
    subject: "Chemistry",
    fileSize: "2.4 MB",
    materialType: "Homework Sheet",
    dateAdded: "2025-05-06",
  },
];

export default function StudentMaterialsPage() {
  const [activeSubjectFilter, setActiveSubjectFilter] = useState<"All" | "Chemistry" | "Physics">("All");

  const filteredMaterials = STUDY_MATERIALS.filter((item) => {
    return activeSubjectFilter === "All" || item.subject === activeSubjectFilter;
  });

  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 space-y-8">
        
        {/* Module Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-border">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest font-sans">Resources Portal</span>
            <h1 className="text-h2 font-extrabold text-primary">Course Materials</h1>
          </div>
          
          {/* Quick Filters */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-premium border border-border w-fit">
            {(["All", "Chemistry", "Physics"] as const).map((subject) => (
              <button
                key={subject}
                onClick={() => setActiveSubjectFilter(subject)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-premium transition-all duration-200 ${
                  activeSubjectFilter === subject 
                    ? "bg-secondary text-white" 
                    : "text-primary/60 hover:text-primary"
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Materials List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMaterials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-border rounded-large p-6 flex flex-col justify-between hover:shadow-soft transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold text-secondary bg-secondary/5 px-2 py-0.5 rounded tracking-wider">
                    {item.materialType}
                  </span>
                  <span className="text-xs text-primary/40 font-semibold">{item.dateAdded}</span>
                </div>

                <h3 className="font-heading text-base font-bold text-primary mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-primary/50 font-semibold">{item.course} • {item.subject}</p>
              </div>

              {/* Download CTA footer */}
              <div className="pt-6 border-t border-border mt-6 flex items-center justify-between text-xs font-semibold">
                <span className="text-primary/40">File Size: {item.fileSize}</span>
                <button className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-bold">
                  <Download size={14} /> Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}