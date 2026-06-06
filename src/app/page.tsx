import Link from "next/link";
import Hero from "@/components/marketing/Hero";
import ProgramCard from "@/components/shared/ProgramCard";

const samplePrograms = [
  {
    title: "Medical Admission Program",
    category: "Admission" as const,
    duration: "4 Months",
    fees: "৳15,000",
    description: "Intensive medical admission test coaching with full syllabus coverage, daily mock exams, and premium class materials.",
    slug: "medical-admission",
  },
  {
    title: "Engineering Admission Prep",
    category: "Admission" as const,
    duration: "5 Months",
    fees: "৳18,000",
    description: "Structured program covering BUET, RUET, KUET, CUET, and IUT admission modules with experienced peer teachers.",
    slug: "engineering-admission",
  },
  {
    title: "HSC Academic Program",
    category: "Academic" as const,
    duration: "1 Year",
    fees: "৳22,000",
    description: "Comprehensive class preparation guidelines for Physics, Chemistry, Math, and ICT strictly following current boards specifications.",
    slug: "hsc-academic",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Overview Statistics Section */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-h2 font-bold mb-4">Elite Success Stories</h2>
            <p className="text-body text-primary/70">
              We focus on structural progress maps. Check our tracked parameters for active students across Bangladesh.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-premium border border-border text-center">
              <span className="block text-4xl font-extrabold text-secondary mb-2">950+</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary/50">Medical Selections</span>
            </div>
            <div className="bg-white p-6 rounded-premium border border-border text-center">
              <span className="block text-4xl font-extrabold text-secondary mb-2">1,200+</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary/50">Engineering Selections</span>
            </div>
            <div className="bg-white p-6 rounded-premium border border-border text-center">
              <span className="block text-4xl font-extrabold text-secondary mb-2">3,400+</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary/50">University Selections</span>
            </div>
            <div className="bg-white p-6 rounded-premium border border-border text-center">
              <span className="block text-4xl font-extrabold text-secondary mb-2">5,000+</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary/50">GPA 5 Achievers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-xl">
              <h2 className="text-h2 font-bold mb-4">Our Premium Programs</h2>
              <p className="text-body text-primary/70">
                Rigorous, research-driven curricula designed to bridge the gap between classroom teaching and board/university evaluations.
              </p>
            </div>
            <Link href="/programs" className="btn-premium-secondary mt-6 md:mt-0 !h-[48px] text-sm">
              View All Programs
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePrograms.map((program) => (
              <ProgramCard key={program.slug} {...program} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}