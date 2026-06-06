"use client";

import { useState } from "react";
import { FileText, Download, Filter } from "lucide-react";

interface Item {
  title: string;
  category: "Physics" | "Chemistry" | "Biology" | "General Math";
  size: string;
  version: string;
}

const ITEMS_STORE: Item[] = [
  { title: "Quantum Physics & Wave Mechanics Formulas", category: "Physics", size: "2.4 MB", version: "V2.1" },
  { title: "Organic Chemistry Reaction Tree Diagram", category: "Chemistry", size: "6.1 MB", version: "V1.0" },
  { title: "Plant Tissue & Photosynthesis Notes", category: "Biology", size: "1.8 MB", version: "V3.2" },
  { title: "Integration & Calculus Quick Methods Guide", category: "General Math", size: "4.2 MB", version: "V2.0" },
];

export function ResourceSearchEngine() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Physics" | "Chemistry" | "Biology">("All");

  const filteredItems = ITEMS_STORE.filter((item) => {
    return activeCategory === "All" || item.category === activeCategory;
  });

  return (
    <div className="space-y-6">
      {/* Category Quick Filter Selectors */}
      <div className="flex gap-2 overflow-x-auto pb-2 border-b border-border">
        {(["All", "Physics", "Chemistry", "Biology"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-300 shrink-0 ${
              activeCategory === cat 
                ? "bg-secondary text-white" 
                : "bg-surface hover:bg-surface-muted text-primary/60 border border-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Elements Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="border border-border rounded-premium p-4 flex items-center justify-between hover:bg-surface/30">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-secondary/5 text-secondary rounded-lg shrink-0 mt-0.5">
                <FileText size={18} />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-primary line-clamp-1">{item.title}</h4>
                <p className="text-[10px] text-primary/50 mt-1 uppercase font-semibold">
                  {item.category} • {item.size} • PDF
                </p>
              </div>
            </div>
            <button className="p-2 text-primary/40 hover:text-secondary rounded-full hover:bg-surface transition-colors" aria-label="Download PDF">
              <Download size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}