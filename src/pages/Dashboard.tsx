import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Brain, BadgeIndianRupee, Landmark, FileCheck, TrendingUp, User, ArrowRight, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { scholarships, calculateEligibilityScore } from "@/data/scholarships";
import { calculateCareerResults } from "@/data/survey";
import ScoreRing from "@/components/ScoreRing";

export default function Dashboard() {
  const { profile, surveyAnswers } = useApp();

  const topScholarships = scholarships
    .map(s => ({ ...s, score: calculateEligibilityScore(s, profile) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const careerResults = surveyAnswers.length > 0 ? calculateCareerResults(surveyAnswers).slice(0, 3) : [];

  const cards = [
    { icon: GraduationCap, title: "🎓 Eligible Scholarships", value: topScholarships.filter(s => s.score >= 50).length + " found", link: "/scholarships", gradient: "from-[hsl(239,84%,67%)] to-[hsl(263,70%,50%)]", glow: "glow-scholarship" },
    { icon: Brain, title: "🧠 Career Matches", value: careerResults.length > 0 ? careerResults[0].field : "Take Survey", link: "/career-survey", gradient: "from-[hsl(263,70%,50%)] to-[hsl(280,70%,60%)]", glow: "glow-career" },
    { icon: BadgeIndianRupee, title: "💰 Loan Options", value: "6 Banks", link: "/loans", gradient: "from-[hsl(38,92%,50%)] to-[hsl(28,92%,55%)]", glow: "glow-loan" },
    { icon: Landmark, title: "🏛️ Govt Schemes", value: "8 Available", link: "/schemes", gradient: "from-[hsl(142,72%,29%)] to-[hsl(160,72%,35%)]", glow: "glow-schemes" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="glass-card rounded-3xl p-6 md:p-8 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shrink-0">
            <User className="h-7 w-7 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-extrabold">Welcome, {profile.name}! 👋</h1>
            <p className="text-muted-foreground">📊 Here's your personalized overview</p>
          </div>
          <div className="ml-auto hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Sparkles className="h-4 w-4" /> AI Dashboard
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card, i) => (
          <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Link to={card.link} className={`block rounded-2xl p-5 bg-card shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] ${card.glow}`}>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-3`}>
                <card.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">{card.title}</p>
              <p className="font-display font-extrabold text-xl">{card.value}</p>
              <div className="flex items-center gap-1 text-primary text-xs font-medium mt-2">
                View <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-card rounded-2xl shadow-lg border border-border/50 p-6 mb-6 glow-scholarship">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display font-extrabold text-lg flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-scholarship/10 flex items-center justify-center"><TrendingUp className="h-4 w-4 text-scholarship" /></div>
            Top Scholarships for You 🎓
          </h2>
          <Link to="/scholarships" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">View All <ArrowRight className="h-3 w-3" /></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {topScholarships.map(s => (
            <div key={s.id} className="rounded-xl border border-border/50 p-4 flex items-center gap-4 hover:shadow-md transition-all duration-200 hover:border-scholarship/30">
              <ScoreRing score={s.score} size={56} />
              <div className="min-w-0">
                <p className="font-bold text-sm truncate">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.amount}</p>
                <p className="text-xs text-muted-foreground">{s.provider}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-card rounded-2xl shadow-lg border border-border/50 p-6 glow-career">
          <h2 className="font-display font-extrabold text-lg mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-career/10 flex items-center justify-center"><Brain className="h-4 w-4 text-career" /></div>
            Career Suggestions 🧠
          </h2>
          {careerResults.length > 0 ? (
            <div className="space-y-3">
              {careerResults.map((r, i) => (
                <div key={r.field} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full gradient-bg text-primary-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm">{r.field}</span>
                      <span className="text-xs font-medium text-career">{r.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div className="h-full rounded-full bg-career" initial={{ width: 0 }} animate={{ width: `${r.percentage}%` }} transition={{ duration: 1, delay: 0.5 + i * 0.2 }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 rounded-xl section-career">
              <Brain className="h-10 w-10 text-career mx-auto mb-3 opacity-50" />
              <p className="text-muted-foreground text-sm mb-4">Take the career survey to get personalized suggestions</p>
              <Link to="/career-survey" className="gradient-btn px-6 py-2.5 rounded-xl text-sm font-semibold inline-block">🧠 Start Survey</Link>
            </div>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-card rounded-2xl shadow-lg border border-border/50 p-6">
          <h2 className="font-display font-extrabold text-lg mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><Sparkles className="h-4 w-4 text-primary" /></div>
            Quick Actions ⚡
          </h2>
          <div className="space-y-3">
            {[
              { to: "/documents", icon: FileCheck, color: "text-documents", bg: "bg-documents/10", title: "📄 Verify Documents", desc: "Upload and validate your documents" },
              { to: "/loans", icon: BadgeIndianRupee, color: "text-loan", bg: "bg-loan/10", title: "💰 Compare Loans", desc: "Find the best education loan" },
              { to: "/schemes", icon: Landmark, color: "text-schemes", bg: "bg-schemes/10", title: "🏛️ Explore Schemes", desc: "Government schemes for students" },
            ].map(item => (
              <Link key={item.to} to={item.to} className="flex items-center gap-3 p-4 rounded-xl border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-200 group">
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center`}>
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
