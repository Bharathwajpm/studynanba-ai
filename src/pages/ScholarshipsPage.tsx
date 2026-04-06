import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, GraduationCap, ExternalLink } from "lucide-react";
import { scholarships, calculateEligibilityScore } from "@/data/scholarships";
import { useApp } from "@/context/AppContext";
import ScoreRing from "@/components/ScoreRing";
import scholarshipImg from "@/assets/scholarship-money.png";

export default function ScholarshipsPage() {
  const { profile, setProfile } = useApp();
  const [casteFilter, setCasteFilter] = useState("All");
  const [educationFilter, setEducationFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const castes = ["All", "General", "BC", "MBC", "SC", "ST", "Minority"];
  const educations = ["All", "10th", "12th", "College"];

  const filtered = scholarships
    .map(s => ({ ...s, score: calculateEligibilityScore(s, profile) }))
    .filter(s => {
      if (casteFilter !== "All" && !s.category.includes(casteFilter)) return false;
      if (educationFilter !== "All" && !s.educationLevel.includes(educationFilter)) return false;
      if (searchQuery && !s.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => b.score - a.score);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="relative rounded-3xl overflow-hidden mb-8 bg-gradient-to-r from-[hsl(239,84%,67%)] to-[hsl(263,70%,50%)] p-8"
      >
        <div className="flex items-center justify-between relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold mb-3">
              <GraduationCap className="h-3.5 w-3.5" /> AI-Powered Matching
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-2">🎓 Scholarships</h1>
            <p className="text-white/80 max-w-md">AI-matched scholarships based on your profile. Update your details below for better matches.</p>
          </div>
          <img src={scholarshipImg} alt="Scholarship" className="hidden md:block w-40 h-28 object-cover rounded-2xl shadow-xl" />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl shadow-lg border border-border/50 p-5 mb-6">
        <p className="text-sm font-bold mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-scholarship" /> Your Profile (used for AI matching)
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <label className="text-xs text-muted-foreground font-medium">Name</label>
            <input value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} className="w-full mt-1 px-3 py-2.5 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-scholarship/30 outline-none transition" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-medium">Caste</label>
            <select value={profile.caste} onChange={e => setProfile({ ...profile, caste: e.target.value })} className="w-full mt-1 px-3 py-2.5 rounded-xl border border-input bg-background text-sm">
              {castes.filter(c => c !== "All").map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-medium">Annual Income (₹)</label>
            <input type="number" value={profile.income} onChange={e => setProfile({ ...profile, income: Number(e.target.value) })} className="w-full mt-1 px-3 py-2.5 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-scholarship/30 outline-none transition" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-medium">Education</label>
            <select value={profile.education} onChange={e => setProfile({ ...profile, education: e.target.value })} className="w-full mt-1 px-3 py-2.5 rounded-xl border border-input bg-background text-sm">
              {["10th", "12th", "College"].map(e => <option key={e} value={e}>{e}</option>)}
            </select>
          </div>
        </div>
      </motion.div>

      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input placeholder="Search scholarships..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-2xl border border-input bg-background text-sm focus:ring-2 focus:ring-scholarship/30 outline-none transition" />
        </div>
        <button onClick={() => setShowFilters(!showFilters)} className="px-5 py-3 rounded-2xl border border-input bg-background text-sm flex items-center gap-2 hover:bg-muted transition-colors font-medium">
          <Filter className="h-4 w-4" /> Filters
        </button>
      </div>

      {showFilters && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="flex gap-3 mb-6 flex-wrap">
          <div className="flex gap-2 items-center">
            <span className="text-sm text-muted-foreground font-medium">Caste:</span>
            {castes.map(c => (
              <button key={c} onClick={() => setCasteFilter(c)} className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${casteFilter === c ? "bg-scholarship text-white shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>{c}</button>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-sm text-muted-foreground font-medium">Education:</span>
            {educations.map(e => (
              <button key={e} onClick={() => setEducationFilter(e)} className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${educationFilter === e ? "bg-scholarship text-white shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>{e}</button>
            ))}
          </div>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((s, i) => (
          <motion.div key={s.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="bg-card rounded-2xl shadow-lg border border-border/50 p-5 hover:shadow-2xl hover:-translate-y-0.5 hover:border-scholarship/20 transition-all duration-300 glow-scholarship"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0 mr-3">
                <h3 className="font-display font-bold text-base truncate">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.provider} • {s.amount}</p>
              </div>
              <ScoreRing score={s.score} size={52} label="Match" />
            </div>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{s.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {s.category.map(c => <span key={c} className="px-2.5 py-0.5 bg-scholarship/10 text-scholarship rounded-full text-xs font-semibold">{c}</span>)}
              {s.educationLevel.map(e => <span key={e} className="px-2.5 py-0.5 bg-career/10 text-career rounded-full text-xs font-semibold">{e}</span>)}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Deadline: {s.deadline}</span>
              <a href={s.applyLink} target="_blank" rel="noopener noreferrer" className="bg-scholarship hover:bg-scholarship/90 text-white px-4 py-1.5 rounded-xl text-xs font-semibold transition-all hover:scale-105 shadow-md inline-flex items-center gap-1.5">
                Apply Now <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
