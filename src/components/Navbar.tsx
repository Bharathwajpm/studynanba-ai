import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Menu, X, Sun, Moon, Languages } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "🏠 Home" },
  { path: "/dashboard", label: "📊 Dashboard" },
  { path: "/scholarships", label: "🎓 Scholarships" },
  { path: "/career-survey", label: "🧠 Career" },
  { path: "/loans", label: "💰 Loans" },
  { path: "/schemes", label: "🏛️ Schemes" },
  { path: "/documents", label: "📄 Documents" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode, language, setLanguage } = useApp();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl">
          <GraduationCap className="h-7 w-7 text-primary" />
          <span className="gradient-text">ScholarAI</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setLanguage(language === "en" ? "ta" : "en")} className="p-2 rounded-lg hover:bg-muted transition-colors" title="Toggle Language">
            <Languages className="h-4 w-4" />
          </button>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg hover:bg-muted transition-colors">
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button className="md:hidden p-2 rounded-lg hover:bg-muted" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border/50"
          >
            <div className="p-4 flex flex-col gap-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
