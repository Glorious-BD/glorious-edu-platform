// Shared UUID Database entity parameters
export interface BaseEntity {
  id: string; // UUID Primary Key
  created_at: string;
  updated_at?: string;
}

// User role configurations mapping to PostgreSQL setup
export type UserRole = "super_admin" | "branch_admin" | "teacher" | "student" | "parent" | "staff";

export interface User extends BaseEntity {
  email: string;
  phone: string;
  password_hash: string;
  role: UserRole;
  status: "active" | "inactive" | "pending";
}

export interface Student extends BaseEntity {
  user_id: string; // Foreign Key pointing to Users
  student_code: string; // System generated enrollment sequence
  branch_id: string; // Foreign Key pointing to Branches
  guardian_id?: string; // Foreign Key pointing to Parents
  school_name?: string;
  college_name?: string;
  class_level: "Class 8" | "SSC" | "HSC" | "University Admission";
  group_name?: "Science" | "Commerce" | "Arts";
  dob: string;
  gender: "Male" | "Female" | "Other";
}

export interface Parent extends BaseEntity {
  user_id: string; // Foreign Key pointing to Users
  occupation?: string;
  nid_number?: string;
  emergency_phone: string;
}

export interface Teacher extends BaseEntity {
  user_id: string; // Foreign Key pointing to Users
  designation: string;
  subject: string;
  bio?: string;
  joining_date: string;
}

export interface Branch extends BaseEntity {
  name: string;
  slug: string;
  address: string;
  phone: string;
  email: string;
  manager_id?: string; // Foreign Key pointing to User
}

export interface Course extends BaseEntity {
  title: string;
  slug: string;
  description: string;
  course_type: "Academic" | "SSC" | "HSC" | "Medical" | "Engineering" | "University" | "Skill";
  duration_months: number;
  course_fee: number;
  status: "active" | "inactive";
}

export interface Batch extends BaseEntity {
  course_id: string; // Foreign Key pointing to Courses
  teacher_id: string; // Foreign Key pointing to Teachers
  branch_id: string; // Foreign Key pointing to Branches
  name: string;
  capacity: number;
  start_date: string;
  end_date: string;
  status: "upcoming" | "active" | "completed";
}

export interface Enrollment extends BaseEntity {
  student_id: string; // Foreign Key pointing to Students
  batch_id: string; // Foreign Key pointing to Batches
  enrollment_date: string;
  status: "pending" | "active" | "cancelled" | "completed";
}

export interface Exam extends BaseEntity {
  course_id: string; // Foreign Key pointing to Courses
  batch_id?: string; // Foreign Key pointing to Batches
  title: string;
  exam_type: "online" | "offline";
  total_marks: number;
  exam_date: string;
  duration: number; // in minutes
}

export interface Result extends BaseEntity {
  exam_id: string; // Foreign Key pointing to Exams
  student_id: string; // Foreign Key pointing to Students
  obtained_marks: number;
  percentage: number;
  grade: string;
  rank?: number;
  remarks?: string;
}