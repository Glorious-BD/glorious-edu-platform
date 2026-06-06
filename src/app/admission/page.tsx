"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Check, ClipboardList, User, ShieldAlert, ArrowRight, Loader2 } from "lucide-react";

interface AdmissionFormData {
  // Student Info
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  classLevel: string;
  groupName: string;
  schoolName: string;
  // Parent Info
  parentName: string;
  parentPhone: string;
  parentOccupation: string;
  // Program Details
  courseId: string;
  branchId: string;
}

const STEPS = [
  { id: 1, name: "Personal Details", icon: User },
  { id: 2, name: "Parent & Academic Info", icon: ClipboardList },
  { id: 3, name: "Program Selection", icon: ShieldAlert },
];

export default function AdmissionPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<AdmissionFormData>({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "Male",
    classLevel: "HSC",
    groupName: "Science",
    schoolName: "",
    parentName: "",
    parentPhone: "",
    parentOccupation: "",
    courseId: "",
    branchId: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      // Simulate API verification call linking back to NestJS / PostgreSQL layer
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setIsSubmitted(true);
    });
  };

  return (
    <div className="py-20 lg:py-28 bg-surface/50 min-h-screen">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-h1 font-extrabold mb-4">Admission Process</h1>
            <p className="text-body text-primary/70">
              Submit your dynamic application form. Our registrar will evaluate details against target parameters within 48 hours.
            </p>
          </div>

          {/* Stepper Progress bar */}
          <div className="mb-12 flex justify-between items-center relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-border -z-10" />
            {STEPS.map((step) => {
              const StepIcon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;

              return (
                <div key={step.id} className="flex flex-col items-center bg-transparent z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-secondary text-white border-secondary"
                        : isCompleted
                        ? "bg-success text-white border-success"
                        : "bg-white text-primary/40 border-border"
                    }`}
                  >
                    {isCompleted ? <Check size={18} /> : <StepIcon size={18} />}
                  </div>
                  <span className={`text-xs font-semibold mt-2 hidden md:block ${
                    isActive ? "text-secondary" : "text-primary/40"
                  }`}>
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Main Card Wrapper */}
          <div className="bg-white rounded-large border border-border p-8 shadow-elevation">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto">
                  <Check size={32} />
                </div>
                <h2 className="text-h2 font-bold text-primary">Application Submitted Successfully</h2>
                <p className="text-body text-primary/70 max-w-md mx-auto">
                  Your entry code has been dispatched. Our team will verify credentials against standard class listings and reach out promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                    }}
                    className="btn-premium-primary"
                  >
                    Return to Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Personal Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-h3 font-bold border-b border-border pb-3">Personal Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Student Full Name</label>
                        <input
                          required
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                          placeholder="e.g., Sadman Sakib"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                          placeholder="e.g., sadman@gmail.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Phone Number</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                          placeholder="e.g., +8801700000000"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Date of Birth</label>
                        <input
                          required
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Gender</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-premium border border-border bg-white focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Parent & Academic Info */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-h3 font-bold border-b border-border pb-3">Parent & Academic Background</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Parent/Guardian Name</label>
                        <input
                          required
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                          placeholder="Parent Name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Emergency Phone</label>
                        <input
                          required
                          type="tel"
                          name="parentPhone"
                          value={formData.parentPhone}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                          placeholder="Parent Phone"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Guardian Occupation</label>
                        <input
                          type="text"
                          name="parentOccupation"
                          value={formData.parentOccupation}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                          placeholder="Occupation"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">School/College Name</label>
                        <input
                          required
                          type="text"
                          name="schoolName"
                          value={formData.schoolName}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                          placeholder="e.g., Notre Dame College"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Program Selection */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-h3 font-bold border-b border-border pb-3">Program & Location Selection</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Target Class Level</label>
                        <select
                          name="classLevel"
                          value={formData.classLevel}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-premium border border-border bg-white focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                        >
                          <option value="Class 8">Class 8</option>
                          <option value="SSC">SSC</option>
                          <option value="HSC">HSC</option>
                          <option value="University Admission">University Admission</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Target Course Program</label>
                        <select
                          required
                          name="courseId"
                          value={formData.courseId}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-premium border border-border bg-white focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                        >
                          <option value="">-- Choose Course --</option>
                          <option value="med-2025">Medical Admission Program</option>
                          <option value="eng-2025">Engineering Admission Prep</option>
                          <option value="hsc-2025">HSC Academic Care</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">Branch Location</label>
                        <select
                          required
                          name="branchId"
                          value={formData.branchId}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-premium border border-border bg-white focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                        >
                          <option value="">-- Select Branch --</option>
                          <option value="farmgate">Farmgate Central Branch, Dhaka</option>
                          <option value="uttara">Uttara Executive Center, Dhaka</option>
                          <option value="chattogram">Chawkbazar Branch, Chattogram</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Navigation Controls */}
                <div className="flex justify-between items-center border-t border-border pt-6 mt-8">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className="btn-premium-secondary !h-11 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Back
                  </button>

                  {currentStep < STEPS.length ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn-premium-primary !h-11 flex items-center gap-2"
                    >
                      Continue <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isPending}
                      className="btn-premium-gold !h-11 flex items-center justify-center min-w-[140px] disabled:opacity-75"
                    >
                      {isPending ? <Loader2 size={18} className="animate-spin" /> : "Submit Application"}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}