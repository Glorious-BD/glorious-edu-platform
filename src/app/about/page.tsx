import type { Metadata } from "next";
import { Award, Compass, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the mission, vision, and teaching methodology of Glorious Edu BD.",
};

export default function AboutPage() {
  return (
    <div className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Core Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-h1 font-extrabold mb-6">Our Story & Mission</h1>
          <p className="text-lg text-primary/70 leading-relaxed">
            Founded with a vision to redefine traditional learning frameworks, Glorious Edu BD combines 
            scientific analytical techniques with holistic mentorship structures to establish clear paths to success.
          </p>
        </div>

        {/* Mission & Vision Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-surface rounded-large border border-border p-8">
            <div className="w-12 h-12 rounded-premium bg-secondary/10 flex items-center justify-center text-secondary mb-6">
              <Compass size={24} />
            </div>
            <h2 className="text-h3 font-bold mb-4">Our Vision</h2>
            <p className="text-primary/70 leading-relaxed">
              To build a digitally integrated learning ecosystem in Bangladesh that provides high-performing pupils 
              with the structured critical-thinking toolsets needed to thrive in admission assessments and real-world scenarios.
            </p>
          </div>

          <div className="bg-surface rounded-large border border-border p-8">
            <div className="w-12 h-12 rounded-premium bg-accent/10 flex items-center justify-center text-accent mb-6">
              <Award size={24} />
            </div>
            <h2 className="text-h3 font-bold mb-4">Our Mission</h2>
            <p className="text-primary/70 leading-relaxed">
              Delivering high-fidelity lecture patterns, personalized diagnostic assessments, and responsive mentorship modules 
              to maximize potential while eliminating typical academic friction.
            </p>
          </div>
        </div>

        {/* Teaching Methodology Metric Blocks */}
        <div className="border-t border-border pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-h2 font-bold mb-4">The Glorious Methodology</h2>
            <p className="text-primary/70">
              Our structures don't rely on rote memory. We emphasize deep conceptual clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
                <Users size={20} />
              </div>
              <h3 className="text-lg font-bold mb-2">Focused Mentorship</h3>
              <p className="text-sm text-primary/65">Interactive groups of high-performing peers overseen directly by top department leads.</p>
            </div>
            <div className="p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
                <Award size={20} />
              </div>
              <h3 className="text-lg font-bold mb-2">Daily Diagnostic Testing</h3>
              <p className="text-sm text-primary/65">Automatic mistake profiling platforms mapped onto distinct board paradigms.</p>
            </div>
            <div className="p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
                <Heart size={20} />
              </div>
              <h3 className="text-lg font-bold mb-2">Support Systems</h3>
              <p className="text-sm text-primary/65">We work closely with parents through automated attendance SMS updates and analytical reports.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}