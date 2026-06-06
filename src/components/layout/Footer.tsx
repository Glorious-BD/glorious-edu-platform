import Link from "next/link";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-white/10 pt-16 pb-8 z-10 relative">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Brief Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-heading text-xl font-extrabold tracking-wider text-white">
                GLORIOUS <span className="text-secondary">EDU BD</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              An elite academic and admission care program offering research-driven syllabus models to cultivate performance excellence.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-white/70">
                <Phone size={14} className="text-secondary" />
                <span>16244 (Local Toll-Free Support)</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <Mail size={14} className="text-secondary" />
                <span>info@gloriousedubd.com</span>
              </div>
            </div>
          </div>

          {/* Programs Quick-links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Academic Programs</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/programs" className="hover:text-white transition-colors">Class 8 Academic Care</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">SSC Preparation Program</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">HSC Core Board Curriculum</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Skill Development Courses</Link></li>
            </ul>
          </div>

          {/* Admission Quick-links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Admissions</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/admission" className="hover:text-white transition-colors">Apply Online</Link></li>
              <li><Link href="/admission" className="hover:text-white transition-colors">Scholarship Criteria</Link></li>
              <li><Link href="/results" className="hover:text-white transition-colors">Academic Hall of Fame</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Download Materials</Link></li>
            </ul>
          </div>

          {/* Central Headquarters Info */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Headquarters</h4>
            <p className="text-xs text-white/60 leading-relaxed flex items-start gap-2">
              <MapPin size={14} className="shrink-0 text-secondary mt-0.5" />
              Level 4, High-Tech Plaza, Indira Road, Farmgate, Dhaka-1215
            </p>
          </div>

        </div>

        {/* Legal and System Attributes Row */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {currentYear} Glorious Edu BD. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}