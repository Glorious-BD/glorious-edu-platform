"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({ isOpen, onClose, title, children, className }: DialogProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dynamic Backdrop Mask */}
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Card Structure */}
      <div className={cn(
        "relative w-full max-w-lg bg-white rounded-large border border-border shadow-elevation p-6 z-10 animate-in fade-in zoom-in-95 duration-200",
        className
      )}>
        <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
          {title && <h3 className="font-heading text-lg font-bold text-primary">{title}</h3>}
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-surface text-primary/40 hover:text-primary transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}