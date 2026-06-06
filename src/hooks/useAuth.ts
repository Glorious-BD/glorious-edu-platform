"use client";

import { useState, useEffect } from "react";
import { UserRole } from "@/types";

interface SessionUser {
  id: string;
  name: string;
  role: UserRole;
  token: string;
}

export function useAuth() {
  const [session, setSession] = useState<SessionUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check client-side authentication parameters
    const checkAuth = () => {
      try {
        const stored = window.localStorage.getItem("gedu_session");
        if (stored) {
          setSession(JSON.parse(stored));
        }
      } catch (err) {
        console.warn("Auth session extraction failed", err);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = (userData: SessionUser) => {
    setSession(userData);
    window.localStorage.setItem("gedu_session", JSON.stringify(userData));
  };

  const logout = () => {
    setSession(null);
    window.localStorage.removeItem("gedu_session");
  };

  return {
    session,
    isAuthenticated: !!session,
    isLoading,
    login,
    logout,
  };
}