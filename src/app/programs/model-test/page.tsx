import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, HelpCircle, FileText, ArrowRight } from "lucide-react";
import { generateMetadataHelper } from "@/utils/seo";

export const metadata: Metadata = generateMetadataHelper({
  title: "Model Test Programs | Glorious Edu BD",
  description: "Register for state-standard simulated mock examinations for SSC, HSC, Medical, and University preparation.",
  path: "/programs/model-test",
});

interface ModelTestProgram {
  title: string;
  syllabus: string;
  totalExams: number;
  duration: string;
  fee: string;
  startDate: string;
  type: "SSC" | "HSC" | "Medical" | "University";
}

const MODEL_TESTS: ModelTestProgram[] = [
  {
    title: "Medical Admission Mock Exam Series",
    syllabus: "100% Admission Syllabus (Biology, Chemistry, Physics, GK & English)",
    totalExams: 32,
    duration: "2.5 Months",
    fee: "৳6,000",
    startDate: "June 01, 2025",
    type: "Medical",
  },
  {
    title: "Engineering Intensive Model Test",
    syllabus: "BUET, RUET, KUET, CUET, and MIST past patterns mapping",
    totalExams: 28,
    duration: "2 Months",
    fee: "৳7,000",
    startDate: "June 10, 2025",
    type: "University",
  },
  {
    title: "HSC Board Standard Model Test",
    syllabus: "Full HSC Curriculum (Science Group - Physics, Chemistry, Math, ICT)",
    totalExams: 20,
    duration: "1.5 Months",
    fee: "৳5,000",
    startDate: "May 25, 2025",
    type: "HSC",
  },
];

export default function ModelTestPage() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Dynamic header info */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-h1 font-extrabold mb-4 tracking-tight">Board & Admission Model Tests</h1>
          <p className="text-body text-primary/70 leading-relaxed">
            Rigorous mock exams that simulate exact test conditions, featuring real-time OM evaluations and performance reviews.
          </p>
        </header>

        {/* Dynamic Card Output */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODEL_TESTS.map((test, idx) => (
            <div 
              key={idx}
              className="bg-white border border-border rounded-large p-6 lg:p-8 flex flex-col justify-between hover:shadow-soft transition-all duration-300"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-secondary bg-secondary/5 px-2.5 py-1 rounded tracking-widest block mb-4 w-fit">
                  {test.type} Category
                </span>
                <h2 className="font-heading text-lg lg:text-xl font-bold text-primary mb-3 leading-snug">
                  {test.title}
                </h2>
                <p className="text-xs text-primary/60 mb-6 leading-relaxed flex items-start gap-2">
                  <BookmarkIcon size={14} className="shrink-0 text-secondary mt-0.5" />
                  <span>Syllabus: {test.syllabus}</span>
                </p>

                {/* Sub Metadata Parameters Grid */}
                <div className="grid grid-cols-2 gap-4 border-t border-border pt-4 mb-6 text-xs text-primary/70">
                  <div className="space-y-1.5">
                    <span className="block text-[10px] uppercase font-bold text-primary/40">Total Exams</span>
                    <span className="font-semibold text-primary">{test.totalExams} Sessions</span>
                  </div>
                  <div className="space-y-1.5">
                    <span className="block text-[10px] uppercase font-bold text-primary/40">Duration</span>
                    <span className="font-semibold text-primary">{test.duration}</span>
                  </div>
                  <div className="space-y-1.5">
                    <span className="block text-[10px] uppercase font-bold text-primary/40">Start Date</span>
                    <span className="font-semibold text-primary">{test.startDate}</span>
                  </div>
                  <div className="space-y-1.5">
                    <span className="block text-[10px] uppercase font-bold text-primary/40">Syllabus Format</span>
                    <span className="font-semibold text-primary">Standard</span>
                  </div>
                </div>
              </div>

              {/* Tuition Price and CTA footer */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-primary/40">Total Program Fee</span>
                  <span className="text-xl font-bold text-primary">{test.fee}</span>
                </div>
                <Link 
                  href="/admission"
                  className="btn-premium-primary !h-11 !px-5 text-xs flex items-center gap-2"
                >
                  Register Now <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// Minimal local bookmark indicator
function BookmarkIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
    </svg>
  );
}