"use client";

import { useState } from "react";
import { login } from "@/lib/auth-actions";
import { useRouter } from "next/navigation";
import { GlowButton } from "@/components/ui/GlowButton";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await login(formData);

    if (result.success) {
      router.push("/admin");
      router.refresh();
    } else {
      setError(result.error || "Login failed");
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-primary text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Access</h1>
          <p className="text-white/60">Please enter your password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter admin password"
              className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-cyan transition-colors"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20">
              {error}
            </div>
          )}

          <GlowButton 
            type="submit" 
            className="w-full py-4 flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? "Authenticating..." : "Login"}
          </GlowButton>
        </form>
      </div>
    </div>
  );
}
