import { useState } from "react";
import { motion } from "framer-motion";
import { Landmark, ExternalLink, Building2, Globe } from "lucide-react";
import { schemes } from "@/data/schemes";

export default function SchemesPage() {
  const [filter, setFilter] = useState<"all" | "state" | "national">("all");

  const filtered = schemes.filter(s => filter === "all" || s.type === filter);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl overflow-hidden mb-8 bg-gradient-to-r from-[hsl(142,72%,29%)] to-[hsl(160,65%,35%)] p-8"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <Landmark className="h-5 w-5 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-display font-extrabold text-white mb-1">🏛️ Government Schemes</h1>
        <p className="text-white/80">Tamil Nadu & National schemes for students</p>
      </motion.div>

      <div className="flex gap-2 mb-6">
        {([
          { key: "all" as const, label: "All Schemes", icon: Globe },
          { key: "state" as const, label: "Tamil Nadu", icon: Building2 },
          { key: "national" as const, label: "National", icon: Landmark },
        ]).map(f => (
          <button key={f.key} onClick={() => setFilter(f.key)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all inline-flex items-center gap-2 ${
              filter === f.key ? "bg-schemes text-white shadow-lg" : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            <f.icon className="h-4 w-4" /> {f.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((s, i) => (
          <motion.div key={s.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="bg-card rounded-2xl shadow-lg border border-border/50 p-5 hover:shadow-2xl hover:-translate-y-0.5 hover:border-schemes/20 transition-all duration-300 glow-schemes"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${s.type === "state" ? "bg-loan/10" : "bg-scholarship/10"}`}>
                <Landmark className={`h-5 w-5 ${s.type === "state" ? "text-loan" : "text-scholarship"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-base">{s.name}</h3>
                <p className="text-xs text-muted-foreground font-medium">{s.provider}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold shrink-0 ${s.type === "state" ? "bg-loan/10 text-loan" : "bg-scholarship/10 text-scholarship"}`}>
                {s.type === "state" ? "TN" : "National"}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{s.description}</p>
            <div className="space-y-1.5 mb-4 p-3 rounded-xl bg-muted/30">
              <p className="text-xs"><span className="font-bold">Eligibility:</span> <span className="text-muted-foreground">{s.eligibility}</span></p>
              <p className="text-xs"><span className="font-bold">Benefits:</span> <span className="text-muted-foreground">{s.benefits}</span></p>
            </div>
            <a href={s.applyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-schemes hover:bg-schemes/90 text-white px-4 py-1.5 rounded-xl text-xs font-semibold transition-all hover:scale-105 shadow-md">
              Apply <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
