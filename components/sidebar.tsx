"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Camera,
  BarChart3,
  Calendar,
  Target,
  Newspaper,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Instagram Manager", href: "/instagram", icon: Camera },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Content Calendar", href: "/calendar", icon: Calendar },
  { label: "Competitor Tracker", href: "/competitors", icon: Target },
  { label: "News Consolidator", href: "/news", icon: Newspaper },
];

export function SidebarContent() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="flex h-14 items-center border-b border-sidebar-border px-6">
        <h1 className="text-lg font-bold text-sidebar-accent-foreground">
          Social Dashboard
        </h1>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-sidebar-border md:block">
      <SidebarContent />
    </aside>
  );
}
