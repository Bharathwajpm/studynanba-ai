import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeIndianRupee, TrendingDown, Clock, Award, Sparkles } from "lucide-react";
import { recommendLoans } from "@/data/loans";
import ScoreRing from "@/components/ScoreRing";

export default function LoansPage() {
  const [income, setIncome] = useState(200000);
  const [loanRequired, setLoanRequired] = useState(500000);
  const [courseType, setCourseType] = useState("Engineering");
  const [results, setResults] = useState<ReturnType<typeof recommendLoans>>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setResults(recommendLoans({ income, loanRequired, courseType }));
    setSearched(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl overflow-hidden mb-8 bg-gradient-to-r from-[hsl(38,92%,50%)] to-[hsl(28,85%,55%)] p-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <BadgeIndianRupee className="h-5 w-5 text-white" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">
            <Sparkles className="h-3 w-3" /> Smart Comparison
          </div>
        </div>
        <h1 className="text-3xl font-display font-extrabold text-white mb-1">💰 Education Loan Recommendations</h1>
        <p className="text-white/80">Compare banks and find the best education loan for you</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl shadow-lg border border-border/50 p-6 mb-8 glow-loan">
        <h2 className="font-display font-bold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-loan" /> Your Details
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mb-5">
          <div>
            <label className="text-sm text-muted-foreground font-medium">Annual Family Income (₹)</label>
            <input type="number" value={income} onChange={e => setIncome(Number(e.target.value))} className="w-full mt-1 px-3 py-2.5 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-loan/30 outline-none transition" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground font-medium">Loan Amount Required (₹)</label>
            <input type="number" value={loanRequired} onChange={e => setLoanRequired(Number(e.target.value))} className="w-full mt-1 px-3 py-2.5 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-loan/30 outline-none transition" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground font-medium">Course Type</label>
            <select value={courseType} onChange={e => setCourseType(e.target.value)} className="w-full mt-1 px-3 py-2.5 rounded-xl border border-input bg-background text-sm">
              {["Engineering", "Medical", "Arts & Science", "Management", "Law", "Agriculture", "Other"].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <button onClick={handleSearch} className="bg-loan hover:bg-loan/90 text-white px-8 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 shadow-lg">
          🔍 Find Best Loans
        </button>
      </motion.div>

      {searched && (
        <div className="space-y-4">
          {results.length === 0 ? (
            <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-8 text-center">
              <p className="text-muted-foreground">No banks found offering loans for this amount. Try a lower amount.</p>
            </div>
          ) : (
            results.map((bank, i) => (
              <motion.div key={bank.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className={`bg-card rounded-2xl shadow-lg border p-6 hover:shadow-2xl transition-all duration-300 ${i === 0 ? "border-loan/30 ring-1 ring-loan/20 glow-loan" : "border-border/50"}`}
              >
                {i === 0 && <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-loan/10 text-loan text-xs font-bold mb-3"><Award className="h-3 w-3" /> 🏆 Best Match</div>}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-lg">{bank.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{bank.eligibility}</p>
                  </div>
                  <ScoreRing score={bank.matchScore} size={56} label="Match" />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-schemes/5">
                    <TrendingDown className="h-4 w-4 text-schemes" />
                    <div>
                      <p className="text-xs text-muted-foreground">Interest Rate</p>
                      <p className="font-bold text-sm">{bank.interestRate}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-scholarship/5">
                    <Award className="h-4 w-4 text-scholarship" />
                    <div>
                      <p className="text-xs text-muted-foreground">Max Amount</p>
                      <p className="font-bold text-sm">₹{(bank.maxAmount / 100000).toFixed(0)}L</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-career/5">
                    <Clock className="h-4 w-4 text-career" />
                    <div>
                      <p className="text-xs text-muted-foreground">Repayment</p>
                      <p className="font-bold text-sm">{bank.repaymentYears} years</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-muted-foreground">Processing Fee: {bank.processingFee}</div>
              </motion.div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
