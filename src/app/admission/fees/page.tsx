"use client";

import { useState } from "react";
import { Calculator, CheckCircle, Info, ShieldAlert } from "lucide-react";

interface TuitionFee {
  programName: string;
  monthlyFee: number;
  onetimeFee: number;
}

const PROGRAM_FEES: TuitionFee[] = [
  { programName: "HSC Fast-Track Academic Care", monthlyFee: 2500, onetimeFee: 15000 },
  { programName: "Medical Admission Prep", monthlyFee: 0, onetimeFee: 15000 },
  { programName: "Engineering Admission Prep", monthlyFee: 0, onetimeFee: 18000 },
];

export default function FeesCalculatorPage() {
  const [sscGpa, setSscGpa] = useState<number>(5.00);
  const [hscGpa, setHscGpa] = useState<number>(5.00);
  const [selectedProgramIdx, setSelectedProgramIdx] = useState<number>(0);

  const selectedProgram = PROGRAM_FEES[selectedProgramIdx];

  // Scholarship waiver algorithm based on standard metrics
  const calculateWaiver = () => {
    const avgGpa = (sscGpa + hscGpa) / 2;
    if (avgGpa === 5.00) return 40; // 40% Waiver for Double Golden A+
    if (avgGpa >= 4.8) return 20;  // 20% Waiver
    if (avgGpa >= 4.5) return 10;  // 10% Waiver
    return 0;
  };

  const waiverPercent = calculateWaiver();
  const baseCost = selectedProgram.onetimeFee;
  const waiverValue = (baseCost * waiverPercent) / 100;
  const adjustedCost = baseCost - waiverValue;

  return (
    <div className="py-16 lg:py-24 bg-surface/35 min-h-screen">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Dynamic header info */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-h1 font-extrabold mb-4 tracking-tight">Tuition & Scholarship Guide</h1>
          <p className="text-body text-primary/70 leading-relaxed">
            Select your program and enter your academic GPA to check tuition details and eligibility for dynamic scholarship waivers.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Form Controls */}
          <div className="lg:col-span-6 bg-white border border-border rounded-large p-6 lg:p-8 space-y-6 shadow-soft">
            <h2 className="text-lg font-bold text-primary flex items-center gap-2 pb-4 border-b border-border">
              <Calculator size={18} className="text-secondary" /> Scholarship Estimator
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Target Program</label>
                <select
                  value={selectedProgramIdx}
                  onChange={(e) => setSelectedProgramIdx(Number(e.target.value))}
                  className="w-full h-11 px-4 rounded-premium border border-border bg-white text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
                >
                  {PROGRAM_FEES.map((fee, idx) => (
                    <option key={idx} value={idx}>{fee.programName}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">SSC GPA (0 - 5.00)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="5"
                    value={sscGpa}
                    onChange={(e) => setSscGpa(Math.min(5, Math.max(0, Number(e.target.value))))}
                    className="w-full h-11 px-4 rounded-premium border border-border text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">HSC GPA (0 - 5.00)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="5"
                    value={hscGpa}
                    onChange={(e) => setHscGpa(Math.min(5, Math.max(0, Number(e.target.value))))}
                    className="w-full h-11 px-4 rounded-premium border border-border text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Result Calculation Output Card */}
          <div className="lg:col-span-6 bg-white border border-border rounded-large p-6 lg:p-8 space-y-6 shadow-elevation">
            <h3 className="text-base font-bold text-primary uppercase tracking-wider border-b border-border pb-4">Estimated Fee Summary</h3>

            <div className="space-y-4 text-sm font-semibold">
              <div className="flex justify-between items-center text-primary/60">
                <span>Program One-time Fee:</span>
                <span className="text-primary">৳{baseCost}</span>
              </div>
              <div className="flex justify-between items-center text-primary/60">
                <span>Scholarship Waiver:</span>
                <span className="text-success">{waiverPercent}% Waiver</span>
              </div>
              <div className="flex justify-between items-center text-primary/60">
                <span>Waiver Amount:</span>
                <span className="text-success">- ৳{waiverValue}</span>
              </div>
              <div className="flex justify-between items-center text-primary pt-4 border-t border-border text-lg font-bold">
                <span>Payable Tuition Fee:</span>
                <span className="text-secondary">৳{adjustedCost}</span>
              </div>
            </div>

            {waiverPercent > 0 ? (
              <div className="flex items-start gap-2 p-3.5 bg-success/5 border border-success/10 rounded-premium text-success">
                <CheckCircle size={16} className="shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed font-semibold">
                  You are eligible for a {waiverPercent}% scholarship waiver based on your GPA. Bring your official academic transcripts to complete enrollment.
                </p>
              </div>
            ) : (
              <div className="flex items-start gap-2 p-3.5 bg-warning/5 border border-warning/10 rounded-premium text-warning-700">
                <Info size={16} className="shrink-0 mt-0.5 text-warning" />
                <p className="text-xs leading-relaxed font-semibold">
                  No waiver is calculated for this GPA range. Contact your branch program coordinator to inquire about optional financial aid.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}