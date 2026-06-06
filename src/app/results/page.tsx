import type { Metadata } from "next";
import { Award, GraduationCap, Star, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Success Stories & Academic Results",
  description: "Track verified high-tier exam scores and competitive ranking outcomes from Glorious Edu BD alumni.",
};

const HALL_OF_FAME = [
  { name: "Tahsin Rahman", rank: "1st Place", institution: "Dhaka Medical College (DMC)", session: "2023-2024" },
  { name: "Samiul Alam", rank: "BUET 4th Place", institution: "Civil Engineering, BUET", session: "2023-2024" },
  { name: "Fariha Kabir", rank: "12th Place", institution: "IBA, University of Dhaka", session: "2023-2024" },
  { name: "Zubair Al-Faisal", rank: "Medical 8th Place", institution: "Mymensingh Medical College", session: "2023-2024" },
];

export default function ResultsPage() {
  return (
    <div className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-h1 font-extrabold mb-4">Results Hub</h1>
          <p className="text-body text-primary/70">
            Review the verified results achieved by students utilizing our diagnostic preparation workflow.
          </p>
        </div>

        {/* Hall of Fame Highlights */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-h2 font-bold flex items-center gap-3">
              <Star className="text-accent" /> Board & Admission Achievers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HALL_OF_FAME.map((student, idx) => (
              <div
                key={idx}
                className="bg-white border border-border rounded-premium p-6 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <Award size={20} />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-1">
                  {student.name}
                </h3>
                <p className="text-xs font-bold text-secondary mb-3">
                  {student.rank}
                </p>
                <div className="text-xs text-primary/60 pt-3 border-t border-border space-y-1">
                  <p className="font-medium text-primary/80">{student.institution}</p>
                  <p>Admission Cycle: {student.session}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid Matrix */}
        <div className="bg-gradient-premium text-white rounded-large p-10 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <span className="block text-5xl font-extrabold text-accent mb-4">1,450+</span>
              <h3 className="text-lg font-bold uppercase tracking-wider text-white/90 mb-2">BUET & MIST Placements</h3>
              <p className="text-sm text-white/60">Verified listings of engineering qualifiers.</p>
            </div>
            <div>
              <span className="block text-5xl font-extrabold text-accent mb-4">1,120+</span>
              <h3 className="text-lg font-bold uppercase tracking-wider text-white/90 mb-2">Medical School Seats</h3>
              <p className="text-sm text-white/60">Top-tier public medical colleges representation.</p>
            </div>
            <div>
              <span className="block text-5xl font-extrabold text-accent mb-4">98.2%</span>
              <h3 className="text-lg font-bold uppercase tracking-wider text-white/90 mb-2">HSC Pass Rate</h3>
              <p className="text-sm text-white/60">Achieving outstanding grades across all boards.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}