"use client";

import { useState } from "react";
import { Download, FileText, Search, Video, FileQuestion, BookMarked } from "lucide-react";

interface Resource {
  title: string;
  type: "Notes" | "Question Bank" | "Video Lecture" | "Suggestion";
  fileSize: string;
  classLevel: string;
  downloadCount: string;
}

const SAMPLE_RESOURCES: Resource[] = [
  {
    title: "Organic Chemistry Roadmap & Conversions",
    type: "Notes",
    fileSize: "4.8 MB",
    classLevel: "HSC 2025",
    downloadCount: "1.2k",
  },
  {
    title: "BUET Last 15 Years Physics Solved Question Bank",
    type: "Question Bank",
    fileSize: "12.4 MB",
    classLevel: "Admission",
    downloadCount: "2.8k",
  },
  {
    title: "Calculus Limits & Integrations Core Blueprint",
    type: "Video Lecture",
    fileSize: "320 MB",
    classLevel: "HSC 2025",
    downloadCount: "950",
  },
  {
    title: "Class 8 General Science Target Board Suggestions",
    type: "Suggestion",
    fileSize: "2.1 MB",
    classLevel: "Class 8",
    downloadCount: "4.1k",
  },
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<"All" | "Notes" | "Question Bank" | "Suggestion">("All");

  const filteredResources = SAMPLE_RESOURCES.filter((resource) => {
    return activeTab === "All" || resource.type === activeTab;
  });

  return (
    <div className="py-20 lg:py-28 bg-surface/35 min-h-screen">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-h1 font-extrabold mb-4">Resource Center</h1>
          <p className="text-body text-primary/70">
            Access vetted PDF lecture materials, questions archives, and guidelines from your program.
          </p>
        </div>

        {/* Resources Panel Selector */}
        <div className="flex justify-center gap-2 mb-12 border-b border-border pb-6">
          {(["All", "Notes", "Question Bank", "Suggestion"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-premium transition-all duration-300 ${
                activeTab === tab ? "bg-primary text-white" : "bg-white text-primary/60 border border-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table & List View */}
        <div className="bg-white rounded-large border border-border overflow-hidden shadow-soft">
          <div className="divide-y divide-border">
            {filteredResources.map((resource, index) => {
              const Icon = resource.type === "Notes" ? FileText : resource.type === "Question Bank" ? FileQuestion : BookMarked;

              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-surface/50 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="p-3 bg-secondary/5 text-secondary rounded-premium">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-primary mb-1">
                        {resource.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary/50">
                        <span>Class: {resource.classLevel}</span>
                        <span>•</span>
                        <span>Format: PDF</span>
                        <span>•</span>
                        <span>Size: {resource.fileSize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0 border-border">
                    <span className="text-xs font-semibold text-primary/40">
                      {resource.downloadCount} Downloads
                    </span>
                    <button className="inline-flex items-center gap-2 text-xs font-bold text-secondary hover:text-primary transition-colors">
                      <Download size={14} /> Download File
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}