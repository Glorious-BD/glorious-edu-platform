import { User, Student, Course, Result, Enrollment } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.gloriousedubd.com/v1";

interface FetchOptions extends RequestInit {
  token?: string;
}

// Global Standardized API Client Wrapper
async function apiClient<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { token, headers, ...customConfig } = options;

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    defaultHeaders["Authorization"] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    method: "GET",
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    ...customConfig,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody?.message || `API HTTP Error status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

// Type-Safe Backend Integration Routines
export const apiService = {
  // Course Endpoints
  courses: {
    getAll: (options?: FetchOptions) => 
      apiClient<Course[]>("/courses", options),
    
    getBySlug: (slug: string, options?: FetchOptions) => 
      apiClient<Course>(`/courses/slug/${slug}`, options),
  },

  // Student Profiling Endpoints
  students: {
    getProfile: (studentId: string, options?: FetchOptions) => 
      apiClient<Student>(`/students/${studentId}`, options),
    
    getEnrollments: (studentId: string, options?: FetchOptions) => 
      apiClient<Enrollment[]>(`/students/${studentId}/enrollments`, options),
  },

  // Exam and Result Analysis Endpoints
  results: {
    getByStudentId: (studentId: string, options?: FetchOptions) => 
      apiClient<Result[]>(`/results/student/${studentId}`, options),
  },

  // Lead Generation and Multi-step Admissions Ingestion
  admissions: {
    createLead: (leadPayload: Record<string, unknown>, options?: FetchOptions) => 
      apiClient<{ success: boolean; leadId: string }>("/admissions/lead", {
        method: "POST",
        body: JSON.stringify(leadPayload),
        ...options,
      }),
  },
};