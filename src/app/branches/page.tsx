import type { Metadata } from "next";
import { Phone, Mail, MapPin, ShieldCheck, Clock } from "lucide-react";
import { generateMetadataHelper } from "@/utils/seo";

export const metadata: Metadata = generateMetadataHelper({
  title: "Branch Network & Academic Facilities | Glorious Edu BD",
  description: "Locate and connect with our elite diagnostic study centers in Farmgate, Uttara, and Chawkbazar.",
  path: "/branches",
});

interface BranchDetails {
  name: string;
  address: string;
  phone: string;
  email: string;
  facilities: string[];
  timing: string;
}

const REGIONAL_BRANCHES: BranchDetails[] = [
  {
    name: "Farmgate Central Headquarters, Dhaka",
    address: "Level 4, High-Tech Plaza, Indira Road, Farmgate, Dhaka-1215",
    phone: "+8801711223344",
    email: "farmgate@gloriousedubd.com",
    facilities: ["Advanced Biology Wet-Lab", "Computerized OM Evaluation Hub", "Multimedia-equipped Lecture Halls"],
    timing: "8:00 AM - 9:00 PM (Daily)",
  },
  {
    name: "Uttara Executive Center, Dhaka",
    address: "Sector 4, Executive Mansions, Rabindra Sarani, Uttara, Dhaka-1230",
    phone: "+8801711223355",
    email: "uttara@gloriousedubd.com",
    facilities: ["Dedicated Question Bank Archive", "Student Self-Study Cubicles", "One-on-One Mentorship Booths"],
    timing: "9:00 AM - 8:00 PM (Closed Friday)",
  },
  {
    name: "Chawkbazar Diagnostic Center, Chattogram",
    address: "House 24, Road 2, Chawkbazar, Chattogram-4000",
    phone: "+8801711223366",
    email: "chattogram@gloriousedubd.com",
    facilities: ["Interactive Smartboard Classrooms", "24/7 Digital Portal Support Desk", "Student Counseling Chamber"],
    timing: "9:00 AM - 8:00 PM (Closed Friday)",
  },
];

export default function BranchesPage() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Dynamic header info */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-h1 font-extrabold mb-4 tracking-tight">Our Regional Academic Centers</h1>
          <p className="text-body text-primary/70 leading-relaxed">
            Every facility is systematically configured to support elite preparation and maintain rigorous testing environments.
          </p>
        </header>

        {/* Directory Listing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {REGIONAL_BRANCHES.map((branch, idx) => (
            <div 
              key={idx}
              className="bg-white border border-border rounded-large p-6 lg:p-8 flex flex-col justify-between hover:shadow-soft transition-all duration-300"
            >
              <div className="space-y-6">
                <h2 className="font-heading text-lg lg:text-xl font-bold text-primary leading-snug">
                  {branch.name}
                </h2>

                {/* Information matrix */}
                <div className="space-y-3 text-sm text-primary/70 border-b border-border pb-6">
                  <p className="flex items-start gap-2.5">
                    <MapPin size={16} className="shrink-0 text-secondary mt-0.5" />
                    <span className="leading-relaxed">{branch.address}</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Phone size={16} className="text-secondary" />
                    <span>{branch.phone}</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Mail size={16} className="text-secondary" />
                    <span>{branch.email}</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Clock size={16} className="text-secondary" />
                    <span>Timings: {branch.timing}</span>
                  </p>
                </div>

                {/* Amenities List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary/40">In-house Facilities</h4>
                  <ul className="space-y-2 text-xs text-primary/70">
                    {branch.facilities.map((fac, facIdx) => (
                      <li key={facIdx} className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-success shrink-0" />
                        <span>{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-8 mt-6 border-t border-border">
                <a 
                  href={`mailto:${branch.email}`}
                  className="btn-premium-secondary w-full text-xs font-bold uppercase tracking-wider !h-11"
                >
                  Contact Coordinator
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}