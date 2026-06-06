import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, GraduationCap, Link2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Faculty Directory",
  description: "Meet the academic team, department leads, and senior researchers guiding our students.",
};

interface Teacher {
  id: string;
  name: string;
  designation: string;
  subject: string;
  institution: string;
  experience: string;
  photoUrl: string;
}

const INSTRUCTORS: Teacher[] = [
  {
    id: "1",
    name: "Dr. Rakibul Hasan",
    designation: "Head of Chemistry Department",
    subject: "Organic & Physical Chemistry",
    institution: "BUET, Chemical Eng.",
    experience: "12+ Years",
    photoUrl: "/assets/faculty/f1.jpg",
  },
  {
    id: "2",
    name: "Afsana Rahman",
    designation: "Senior Mathematics Lecturer",
    subject: "Higher Mathematics & Calculus",
    institution: "University of Dhaka, App. Math",
    experience: "8+ Years",
    photoUrl: "/assets/faculty/f2.jpg",
  },
  {
    id: "3",
    name: "Engr. Tanvir Ahmed",
    designation: "Head of Physics Division",
    subject: "Theoretical Mechanics & Electrodynamics",
    institution: "BUET, Electrical & Electronics Eng.",
    experience: "10+ Years",
    photoUrl: "/assets/faculty/f3.jpg",
  },
  {
    id: "4",
    name: "Sajjad Hossain",
    designation: "Senior Biology Lead",
    subject: "Human Physiology & Genetics",
    institution: "Dhaka Medical College (DMC)",
    experience: "7+ Years",
    photoUrl: "/assets/faculty/f4.jpg",
  },
];

export default function FacultyPage() {
  return (
    <div className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Page title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-h1 font-extrabold mb-4">Our Elite Faculty</h1>
          <p className="text-body text-primary/70">
            Learn from standard-setting academic specialists and researchers with proven track records of guiding students to top admission placements.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSTRUCTORS.map((teacher) => (
            <div
              key={teacher.id}
              className="group bg-white border border-border rounded-premium overflow-hidden transition-all duration-300 hover:shadow-elevation"
            >
              {/* Image Container with Fallback Placeholder */}
              <div className="relative h-72 w-full bg-surface-muted flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-premium opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                <GraduationCap size={48} className="text-primary/20 absolute" />
                {/* Real Optimized next/image would load if present */}
                <div className="absolute inset-0 flex items-center justify-center font-bold text-primary/30 text-xs">
                  {teacher.name} Photo
                </div>
              </div>

              {/* Bio Details */}
              <div className="p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-secondary mb-1 block">
                  {teacher.subject}
                </span>
                <h3 className="font-heading text-lg font-bold text-primary mb-1">
                  {teacher.name}
                </h3>
                <p className="text-xs font-semibold text-primary/60 mb-4">
                  {teacher.designation}
                </p>

                {/* Sub-parameters */}
                <div className="space-y-2 border-t border-border pt-4">
                  <div className="flex items-center gap-2 text-xs text-primary/70">
                    <GraduationCap size={14} className="text-primary/40" />
                    <span>{teacher.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-primary/70">
                    <BookOpen size={14} className="text-primary/40" />
                    <span>{teacher.experience} Teaching Exp.</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}