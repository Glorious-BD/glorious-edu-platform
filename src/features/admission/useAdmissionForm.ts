"use client";

import { useState, useTransition } from "react";
import { apiService } from "@/services/api";

export function useAdmissionForm(onSuccess: () => void) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
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

  const handleUpdate = (updates: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const submitForm = async () => {
    setError(null);
    startTransition(async () => {
      try {
        const payload = {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          metadata: {
            dob: formData.dob,
            gender: formData.gender,
            class_level: formData.classLevel,
            group_name: formData.groupName,
            school_name: formData.schoolName,
            parent_name: formData.parentName,
            parent_phone: formData.parentPhone,
            parent_occupation: formData.parentOccupation,
          },
          course_id: formData.courseId,
          branch_id: formData.branchId,
        };

        const response = await apiService.admissions.createLead(payload);
        if (response.success) {
          onSuccess();
        } else {
          setError("Incomplete data submission. Check selection fields.");
        }
      } catch (err: any) {
        setError(err.message || "Unable to process application. Verify connection.");
      }
    });
  };

  return {
    currentStep,
    setCurrentStep,
    formData,
    handleUpdate,
    submitForm,
    isPending,
    error,
  };
}