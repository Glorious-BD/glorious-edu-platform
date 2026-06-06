"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Shield, Users, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Decorative Radial Backdrop Ambient Lighting */}
      <div className="absolute inset-0 bg-gradient-radial-accent pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Context Content Area */}
          <div className="lg:col-span-7 flex flex-col space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-secondary/5 border border-secondary/10 px-3 py-1.5 rounded-full w-fit"
            >
              <Zap size={14} className="text-secondary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                Elite Educational Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-hero leading-tight text-primary font-extrabold tracking-tight"
            >
              Excellence in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Education & Action
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-primary/70 max-w-xl font-normal leading-relaxed"
            >
              Glorious Edu BD provides structural, elite-grade academic instruction 
              and competitive exam preparation. Discover tailored workflows configured to help students achieve standard-setting results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/admission" className="btn-premium-primary gap-2 text-base">
                Apply Now <ArrowUpRight size={18} />
              </Link>
              <Link href="/programs" className="btn-premium-secondary text-base">
                Explore Programs
              </Link>
            </motion.div>

            {/* Micro-Social Proof Trust Matrix */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-12 border-t border-border"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">10k+</span>
                <span className="text-xs text-primary/60 font-medium uppercase tracking-wide">Students Served</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">100+</span>
                <span className="text-xs text-primary/60 font-medium uppercase tracking-wide">Elite Educators</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">96%</span>
                <span className="text-xs text-primary/60 font-medium uppercase tracking-wide">Success Rate</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Premium Interface Preview */}
          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-large border border-border bg-white shadow-elevation p-6 overflow-hidden max-w-md mx-auto lg:ml-auto"
            >
              <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-semibold text-primary/40 uppercase tracking-widest">Student Portal Preview</span>
              </div>

              {/* Graphical UI Representation */}
              <div className="space-y-4">
                <div className="p-4 bg-surface rounded-premium border border-border flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary">Current Performance</h4>
                      <p className="text-xs text-primary/50">Top percentile ranking</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-secondary">98.4%</span>
                </div>

                <div className="p-4 bg-surface rounded-premium border border-border flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary">Active Enrollments</h4>
                      <p className="text-xs text-primary/50">Medical & Engineering Prep</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium bg-accent/10 text-accent/90 px-2.5 py-1 rounded-full">Elite Tier</span>
                </div>

                <div className="p-4 bg-surface rounded-premium border border-border flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-500/10 rounded-lg text-success">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary">Upcoming Classes</h4>
                      <p className="text-xs text-primary/50">Starts in 30 minutes</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-success bg-green-500/10 px-2 py-1 rounded-full animate-pulse">Live</span>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}