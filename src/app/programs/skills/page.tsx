import type { Metadata } from "next";
import ProgramCard from "@/components/shared/ProgramCard";
import { Code, MessageSquare, Terminal, Award } from "lucide-react";
import { generateMetadataHelper } from "@/utils/seo";

export const metadata: Metadata = generateMetadataHelper({
  title: "Skill Development Programs | Glorious Edu BD",
  description: "Acquire high-demand professional skills in ICT, Spoken English, Freelancing, and Career Readiness.",
  path: "/programs/skills",
});

interface SkillCourse {
  title: string;
  duration: string;
  fees: string;
  description: string;
  slug: string;
}

const SKILL_COURSES: SkillCourse[] = [
  {
    title: "English Communication & Spoken Mastery",
    duration: "3 Months",
    fees: "৳5,000",
    description: "Develop professional English communication, presentation, and public speaking skills with senior instructors.",
    slug: "spoken-english",
  },
  {
    title: "ICT Board & Programming Fundamentals",
    duration: "4 Months",
    fees: "৳6,000",
    description: "Master full Board ICT curriculums along with introductory HTML, CSS, and basic C programming modules.",
    slug: "ict-programming",
  },
  {
    title: "Freelancing Career Track",
    duration: "3 Months",
    fees: "৳8,000",
    description: "Step-by-step career track covering digital design assets creation, localizations, and platform operations.",
    slug: "freelancing-track",
  },
];

export default function SkillsPage() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Dynamic header info */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-h1 font-extrabold mb-4 tracking-tight">Professional Skill Development</h1>
          <p className="text-body text-primary/70 leading-relaxed">
            Gain high-demand professional skills and career preparation along with your academic curriculum.
          </p>
        </header>

        {/* Dynamic Card output */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_COURSES.map((course) => (
            <ProgramCard
              key={course.slug}
              title={course.title}
              category="Skills"
              duration={course.duration}
              fees={course.fees}
              description={course.description}
              slug={course.slug}
            />
          ))}
        </div>

      </div>
    </div>
  );
}