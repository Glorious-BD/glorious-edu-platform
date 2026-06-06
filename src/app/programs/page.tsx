"use client";

import { useState } from "react";
import ProgramCard from "@/components/shared/ProgramCard";
import { Search } from "lucide-react";

type ProgramCategory = "All" | "Academic" | "Admission" | "Model Test" | "Skills";

interface ProgramItem {
  title: string;
  category: "Academic" | "Admission" | "Model Test" | "Skills";
  duration: string;
  fees: string;
  description: string;
  slug: string;
}

const ALL_PROGRAMS: ProgramItem[] = [
  {
    title: "Class 8 General Academic Care",
    category: "Academic",
    duration: "10 Months",
    fees: "৳12,000",
    description: "Deep fundamental syllabus development focusing on core concepts of Math, General Science, and English.",
    slug: "class-8-academic",
  },
  {
    title: "SSC Intensive Model Test Program",
    category: "Model Test",
    duration: "2 Months",
    fees: "৳6,000",
    description: "Daily examination modules closely emulating board conditions with meticulous grading and video solutions.",
    slug: "ssc-model-test",
  },
  {
    title: "Medical Admission Program",
    category: "Admission",
    duration: "4 Months",
    fees: "৳15,000",
    description: "Comprehensive medical test mentoring including biology concept maps, organic chemistry sessions, and GK resources.",
    slug: "medical-admission",
  },
  {
    title: "Engineering Admission Prep",
    category: "Admission",
    duration: "5 Months",
    fees: "৳18,000",
    description: "Rigorous focus on multi-tier physics problems, advanced mathematics proofs, and architectural insights.",
    slug: "engineering-admission",
  },
  {
    title: "Freelancing & Career Skills",
    category: "Skills",
    duration: "3 Months",
    fees: "৳8,000",
    description: "Practical project workflows covering frontend interfaces, vector assets creation, and client communication protocols.",
    slug: "freelancing-skills",
  },
  {
    title: "HSC Fast-Track Academic Care",
    category: "Academic",
    duration: "1 Year",
    fees: "৳22,000",
    description: "Structured academic delivery for Physics, Chemistry, and Advanced Mathematics to secure high marks.",
    slug: "hsc-academic",
  },
];

const CATEGORIES: ProgramCategory[] = ["All", "Academic", "Admission", "Model Test", "Skills"];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState<ProgramCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = ALL_PROGRAMS.filter((program) => {
    const matchesCategory = activeCategory === "All" || program.category === activeCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          program.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-h1 font-extrabold mb-4">Academic & Admission Programs</h1>
          <p className="text-body text-primary/70">
            Choose from a comprehensive list of structured programs tailored for every academic milestone in your journey.
          </p>
        </div>

        {/* Filters Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 border-b border-border pb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-premium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-secondary text-white"
                    : "bg-surface text-primary/70 hover:bg-surface-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/40">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
            />
          </div>
        </div>

        {/* Card Grid Layout */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.slug} {...program} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-border rounded-large">
            <p className="text-primary/50 text-base">No programs found matching your filters.</p>
          </div>
        )}

      </div>
    </div>
  );
}