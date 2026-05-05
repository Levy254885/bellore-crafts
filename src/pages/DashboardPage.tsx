import { User, Package, MapPin, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <main className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-8">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="space-y-2">
            {[
              { icon: User, label: "Profile", active: true },
              { icon: Package, label: "Orders", to: "/orders" },
              { icon: MapPin, label: "Addresses" },
              { icon: LogOut, label: "Logout" },
            ].map(item => (
              <div key={item.label}>
                {item.to ? (
                  <Link to={item.to} className="flex items-center gap-3 px-4 py-3 rounded-sm font-body text-sm text-foreground hover:bg-secondary transition-colors">
                    <item.icon size={18} /> {item.label}
                  </Link>
                ) : (
                  <button className={`flex items-center gap-3 px-4 py-3 rounded-sm font-body text-sm w-full text-left transition-colors ${item.active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}>
                    <item.icon size={18} /> {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Profile Content */}
          <div className="md:col-span-2 bg-card border border-border rounded-sm p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground mb-6">Profile Information</h2>
            <div className="space-y-4">
              {[
                { label: "Full Name", value: "Guest User" },
                { label: "Email", value: "guest@bellore.com" },
                { label: "Member Since", value: "March 2026" },
              ].map(field => (
                <div key={field.label}>
                  <p className="font-body text-xs font-medium text-muted-foreground mb-1">{field.label}</p>
                  <p className="font-body text-sm text-foreground">{field.value}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-muted-foreground mt-6 p-3 bg-secondary rounded-sm">
              Profile editing will be available once the backend is connected.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
