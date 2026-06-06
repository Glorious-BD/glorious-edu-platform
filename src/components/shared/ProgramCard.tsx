"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

interface ProgramCardProps {
  title: string;
  category: "Academic" | "Admission" | "Model Test" | "Skills";
  duration: string;
  fees: string;
  description: string;
  slug: string;
}

export default function ProgramCard({
  title,
  category,
  duration,
  fees,
  description,
  slug,
}: ProgramCardProps) {
  return (
    <div className="group relative rounded-premium border border-border bg-white p-6 transition-all duration-300 hover:shadow-elevation hover:border-secondary/20 flex flex-col justify-between">
      <div>
        {/* Category Tag */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-surface-muted text-primary/70">
            <Tag size={12} />
            {category}
          </span>
          <span className="text-xs font-semibold text-secondary bg-secondary/5 px-2.5 py-1 rounded-md">
            Active
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-primary/65 mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-4 py-4 border-t border-border mb-6">
          <div className="flex items-center gap-2 text-xs text-primary/60">
            <Clock size={14} className="text-secondary/70" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-primary/60">
            <BookOpen size={14} className="text-secondary/70" />
            <span>Online & Offline</span>
          </div>
        </div>
      </div>

      {/* Button & Price Footer */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <span className="block text-[10px] uppercase font-bold tracking-wider text-primary/40">Tuition Fee</span>
          <span className="text-lg font-bold text-primary">{fees}</span>
        </div>
        
        <Link 
          href={`/programs/${slug}`}
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border group-hover:bg-secondary group-hover:border-secondary group-hover:text-white text-primary transition-all duration-300"
          aria-label={`Learn more about ${title}`}
        >
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}