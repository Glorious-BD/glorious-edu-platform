"use client";

import { useState } from "react";
import { Trophy, Star, ArrowUpRight, Search } from "lucide-react";

type AchieverCategory = "All" | "Medical" | "Engineering" | "University" | "GPA 5";

interface AchieverProfile {
  name: string;
  achievement: string;
  institution: string;
  category: "Medical" | "Engineering" | "University" | "GPA 5";
  batchYear: string;
  quote?: string;
}

const ACHIEVERS: AchieverProfile[] = [
  {
    name: "Samiul Alam",
    achievement: "BUET Merit Position: 4th",
    institution: "Bangladesh University of Engineering and Technology",
    category: "Engineering",
    batchYear: "Batch 2024",
    quote: "The conceptual clarity of the Physics and Chemistry lecture modules allowed me to maintain accuracy under exam conditions.",
  },
  {
    name: "Tahsin Rahman",
    achievement: "DMC merit Position: 1st (National)",
    institution: "Dhaka Medical College (DMC)",
    category: "Medical",
    batchYear: "Batch 2024",
    quote: "Glorious biology and chemistry flashcards saved prep time during critical revision phases.",
  },
  {
    name: "Anika Chowdhury",
    achievement: "GPA 5.00 in HSC Board",
    institution: "Viqarunnisa Noon College",
    category: "GPA 5",
    batchYear: "Batch 2024",
    quote: "Regular feedback sessions and customized performance charts allowed me to isolate weak marks areas.",
  },
];

export default function SuccessStoriesPage() {
  const [activeCategory, setActiveCategory] = useState<AchieverCategory>("All");

  const filteredAchievers = ACHIEVERS.filter((item) => {
    return activeCategory === "All" || item.category === activeCategory;
  });

  return (
    <div className="py-16 lg:py-24 bg-surface/35 min-h-screen">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Header Block */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-h1 font-extrabold mb-4 tracking-tight">Academic Success Stories</h1>
          <p className="text-body text-primary/70">
            Meet the alumni who achieved their academic and university admission goals.
          </p>
        </header>

        {/* Interactive category filters */}
        <div className="flex gap-2 overflow-x-auto pb-4 border-b border-border mb-12 justify-start lg:justify-center scrollbar-none">
          {(["All", "Medical", "Engineering", "University", "GPA 5"] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-premium shrink-0 transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-secondary text-white shadow-soft" 
                  : "bg-white text-primary/60 border border-border hover:bg-surface"
              }`}
            >
              {category} Achievers
            </button>
          ))}
        </div>

        {/* Achievers Card output */}
        {filteredAchievers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAchievers.map((achiever, idx) => (
              <div 
                key={idx}
                className="bg-white border border-border rounded-large p-6 lg:p-8 flex flex-col justify-between hover:shadow-soft transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                    <span className="text-xs font-bold text-secondary">{achiever.category} Stream</span>
                    <span className="text-xs text-primary/40 font-semibold">{achiever.batchYear}</span>
                  </div>

                  <h3 className="font-heading text-lg lg:text-xl font-bold text-primary mb-1">
                    {achiever.name}
                  </h3>
                  <p className="text-xs font-bold text-secondary mb-4">{achiever.achievement}</p>
                  <p className="text-xs text-primary/50 font-semibold mb-6">{achiever.institution}</p>

                  {achiever.quote && (
                    <blockquote className="text-sm italic text-primary/75 bg-surface/50 border-l-2 border-secondary/35 p-4 rounded-r-premium leading-relaxed">
                      "{achiever.quote}"
                    </blockquote>
                  )}
                </div>

                <div className="pt-6 border-t border-border mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Verified placement</span>
                  <Trophy size={16} className="text-accent" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-border bg-white rounded-large">
            <p className="text-sm text-primary/50 font-semibold">No success stories verified for this category yet.</p>
          </div>
        )}

      </div>
    </div>
  );
}