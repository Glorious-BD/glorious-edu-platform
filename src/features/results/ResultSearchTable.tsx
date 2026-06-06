"use client";

import { useState } from "react";
import { Search, Trophy, ArrowRight } from "lucide-react";

interface MockResult {
  rollNo: string;
  name: string;
  course: string;
  totalMarks: number;
  obtainedMarks: number;
  grade: string;
  position: number;
}

const SAMPLE_RESULTS_DB: MockResult[] = [
  { rollNo: "HSC-1004", name: "Sadman Sakib", course: "HSC Core Physics Care", totalMarks: 100, obtainedMarks: 94, grade: "A+", position: 4 },
  { rollNo: "HSC-1022", name: "Anika Tahsin", course: "HSC Core Physics Care", totalMarks: 100, obtainedMarks: 88, grade: "A+", position: 12 },
  { rollNo: "MED-5002", name: "Rafid Zaman", course: "Medical Admission Prep", totalMarks: 100, obtainedMarks: 95, grade: "A+", position: 1 },
];

export function ResultSearchTable() {
  const [searchRoll, setSearchRoll] = useState("");
  const [selectedResult, setSelectedResult] = useState<MockResult | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const found = SAMPLE_RESULTS_DB.find(
      (res) => res.rollNo.toUpperCase() === searchRoll.trim().toUpperCase()
    );
    setSelectedResult(found || null);
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* Lookup Bar */}
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-grow">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30">
            <Search size={18} />
          </span>
          <input
            required
            type="text"
            placeholder="Enter Student Roll No. (e.g., HSC-1004)"
            value={searchRoll}
            onChange={(e) => setSearchRoll(e.target.value)}
            className="w-full h-12 pl-11 pr-4 rounded-[12px] border border-border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>
        <button type="submit" className="btn-premium-primary !h-12 !px-6 text-sm">
          Search
        </button>
      </form>

      {/* Output Segment */}
      {searched && (
        <div className="bg-white border border-border rounded-large p-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {selectedResult ? (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="p-2.5 bg-accent/10 text-accent rounded-premium">
                  <Trophy size={20} />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-primary">{selectedResult.name}</h4>
                  <p className="text-xs text-primary/50">Roll: {selectedResult.rollNo} | {selectedResult.course}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-surface p-4 rounded-premium border border-border text-center">
                  <span className="block text-[10px] uppercase font-bold text-primary/40">Score</span>
                  <span className="text-lg font-extrabold text-primary">
                    {selectedResult.obtainedMarks}/{selectedResult.totalMarks}
                  </span>
                </div>
                <div className="bg-surface p-4 rounded-premium border border-border text-center">
                  <span className="block text-[10px] uppercase font-bold text-primary/40">Grade</span>
                  <span className="text-lg font-extrabold text-secondary">{selectedResult.grade}</span>
                </div>
                <div className="bg-surface p-4 rounded-premium border border-border text-center">
                  <span className="block text-[10px] uppercase font-bold text-primary/40">Rank Position</span>
                  <span className="text-lg font-extrabold text-accent">#{selectedResult.position}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-sm text-primary/60 font-medium">
                No verified records discovered matching Roll Code <span className="font-bold text-primary">"{searchRoll}"</span>.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}