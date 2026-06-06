"use client";

import { useState } from "react";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  FileText, 
  GraduationCap, 
  LineChart, 
  TrendingUp, 
  User 
} from "lucide-react";

interface CourseProgress {
  courseName: string;
  batchName: string;
  attendanceRate: number;
  completedLessons: number;
  totalLessons: number;
  nextExamDate: string;
}

export default function StudentDashboard() {
  const [studentInfo] = useState({
    name: "Sadman Sakib",
    id: "STU-2025-0849",
    classLevel: "HSC 2025 (Science)",
    group: "Physics, Chemistry, Math",
  });

  const [enrolledCourses] = useState<CourseProgress[]>([
    {
      courseName: "HSC Fast-Track Physics Care",
      batchName: "PH-Beta-02",
      attendanceRate: 94.5,
      completedLessons: 18,
      totalLessons: 24,
      nextExamDate: "2025-05-15",
    },
    {
      courseName: "Chemistry Organic Synthesis",
      batchName: "CH-Alpha-01",
      attendanceRate: 88.0,
      completedLessons: 14,
      totalLessons: 20,
      nextExamDate: "2025-05-19",
    },
  ]);

  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 space-y-8">
        
        {/* Welcome Banner */}
        <div className="bg-white border border-border rounded-large p-6 lg:p-8 shadow-soft flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <User size={32} />
            </div>
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Student Portal</span>
              <h1 className="text-h2 font-extrabold text-primary">{studentInfo.name}</h1>
              <p className="text-xs text-primary/60 mt-1">
                ID: {studentInfo.id} | {studentInfo.classLevel}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface px-4 py-3 rounded-premium border border-border text-center min-w-[100px]">
              <span className="block text-xs font-bold text-primary/40 uppercase">Overall Attendance</span>
              <span className="text-lg font-bold text-primary">91.25%</span>
            </div>
            <div className="bg-surface px-4 py-3 rounded-premium border border-border text-center min-w-[100px]">
              <span className="block text-xs font-bold text-primary/40 uppercase">Class Position</span>
              <span className="text-lg font-bold text-accent">#04</span>
            </div>
          </div>
        </div>

        {/* Dashboard Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Active Courses List */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-h3 font-bold text-primary">Enrolled Courses</h2>
            <div className="space-y-4">
              {enrolledCourses.map((course, idx) => (
                <div key={idx} className="bg-white border border-border rounded-premium p-6 hover:shadow-soft transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-primary">{course.courseName}</h3>
                      <p className="text-xs text-primary/50">Batch: {course.batchName}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-secondary bg-secondary/5 px-2.5 py-1 rounded-md w-fit">
                      <Clock size={12} /> Next Exam: {course.nextExamDate}
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-primary/70">
                      <span>Syllabus Completion</span>
                      <span>{Math.round((course.completedLessons / course.totalLessons) * 100)}%</span>
                    </div>
                    <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-secondary transition-all duration-500" 
                        style={{ width: `${(course.completedLessons / course.totalLessons) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-primary/50 pt-1">
                      <span>{course.completedLessons} of {course.totalLessons} Lectures Attended</span>
                      <span>Attendance: {course.attendanceRate}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-h3 font-bold text-primary">Quick Tools</h2>
            <div className="bg-white border border-border rounded-large p-6 space-y-4 shadow-soft">
              <button className="w-full flex items-center justify-between p-3 rounded-premium border border-border hover:bg-surface transition-all text-sm font-semibold text-primary">
                <span className="flex items-center gap-3">
                  <Calendar size={18} className="text-secondary" /> Daily Class Schedule
                </span>
                <span className="text-xs text-primary/40">View</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-premium border border-border hover:bg-surface transition-all text-sm font-semibold text-primary">
                <span className="flex items-center gap-3">
                  <FileText size={18} className="text-secondary" /> Download Lecture Notes
                </span>
                <span className="text-xs text-primary/40">12 Files</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-premium border border-border hover:bg-surface transition-all text-sm font-semibold text-primary">
                <span className="flex items-center gap-3">
                  <LineChart size={18} className="text-secondary" /> View Performance Metrics
                </span>
                <span className="text-xs text-primary/40">Check</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}