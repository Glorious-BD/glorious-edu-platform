"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Results", href: "/results" },
  { name: "Faculty", href: "/faculty" },
  { name: "Resources", href: "/resources" },
  { name: "Admission", href: "/admission" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading text-xl font-extrabold tracking-wider text-primary">
              GLORIOUS <span className="text-secondary">EDU BD</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-small font-medium tracking-wide transition-colors duration-200 hover:text-secondary ${
                    isActive ? "text-secondary" : "text-primary/70"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Group */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login" className="text-small font-medium text-primary/80 hover:text-primary transition-colors">
              Student Login
            </Link>
            <Link href="/admission" className="btn-premium-primary !h-[44px] !px-5 text-sm">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-primary lg:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-border bg-white"
          >
            <div className="space-y-1 px-6 pb-6 pt-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-3 text-base font-medium transition-colors ${
                      isActive ? "text-secondary" : "text-primary/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="mt-6 pt-6 border-t border-border flex flex-col space-y-4">
                <Link
                  href="/login"
                  className="text-center py-2 text-base font-medium text-primary/80"
                >
                  Student Login
                </Link>
                <Link
                  href="/admission"
                  className="btn-premium-primary text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}