"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { KeyRound, ShieldAlert, User, UserCheck, Users } from "lucide-react";

type LoginRole = "student" | "parent" | "teacher";

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<LoginRole>("student");
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated role-based redirection routing to dashboards
    setTimeout(() => {
      setIsSubmitting(false);
      if (selectedRole === "student") {
        router.push("/dashboard/student");
      } else if (selectedRole === "parent") {
        router.push("/dashboard/parent");
      } else {
        router.push("/");
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface/50 py-12 px-6">
      <div className="max-w-md w-full bg-white border border-border rounded-large p-8 shadow-elevation space-y-6">
        
        {/* Banner Title */}
        <div className="text-center space-y-2">
          <h1 className="text-h2 font-extrabold text-primary">Portal Login</h1>
          <p className="text-xs text-primary/60">Choose your account type to access resources.</p>
        </div>

        {/* Role Selectors Group */}
        <div className="grid grid-cols-3 gap-2 bg-surface p-1 rounded-premium border border-border">
          {(["student", "parent", "teacher"] as const).map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setSelectedRole(role)}
              className={`py-2 text-xs font-bold uppercase tracking-wider rounded-premium transition-all duration-200 ${
                selectedRole === role
                  ? "bg-white text-secondary shadow-soft border border-border"
                  : "text-primary/50 hover:text-primary"
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Action Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-primary/70 uppercase tracking-widest mb-2">Portal Access Code / Email</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/30">
                <User size={16} />
              </span>
              <input
                required
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                className="w-full h-11 pl-10 pr-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                placeholder={selectedRole === "student" ? "STU-2025-XXXX" : "email@domain.com"}
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-primary/70 uppercase tracking-widest mb-2">Password</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/30">
                <KeyRound size={16} />
              </span>
              <input
                required
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                className="w-full h-11 pl-10 pr-4 rounded-premium border border-border focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-premium-primary w-full flex items-center justify-center gap-2 !h-11"
          >
            {isSubmitting ? "Authenticating..." : "Access Dashboard"}
          </button>
        </form>

        {/* Security / Help Sub-notice */}
        <div className="flex items-center gap-2 text-xs text-primary/50 justify-center">
          <ShieldAlert size={14} />
          <span>Forgot credentials? Contact your branch office.</span>
        </div>

      </div>
    </div>
  );
}