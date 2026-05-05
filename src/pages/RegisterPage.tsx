import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert("Registration will work once backend is connected.");
  };

  return (
    <main className="section-padding flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="font-body text-muted-foreground">Join Bellore and discover Africa's finest</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-body text-xs font-medium text-foreground block mb-1">Full Name</label>
            <input
              required
              value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
              className="w-full px-4 py-3 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="font-body text-xs font-medium text-foreground block mb-1">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
              className="w-full px-4 py-3 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div className="relative">
            <label className="font-body text-xs font-medium text-foreground block mb-1">Password</label>
            <input
              type={showPass ? "text" : "password"}
              required
              value={form.password}
              onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
              className="w-full px-4 py-3 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:border-primary pr-10"
            />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-8 text-muted-foreground">
              {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <div>
            <label className="font-body text-xs font-medium text-foreground block mb-1">Confirm Password</label>
            <input
              type="password"
              required
              value={form.confirmPassword}
              onChange={e => setForm(p => ({ ...p, confirmPassword: e.target.value }))}
              className="w-full px-4 py-3 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <button type="submit" className="btn-gold w-full rounded-sm">Create Account</button>
        </form>

        <p className="font-body text-sm text-center text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold hover:underline">Sign In</Link>
        </p>
      </div>
    </main>
  );
}
