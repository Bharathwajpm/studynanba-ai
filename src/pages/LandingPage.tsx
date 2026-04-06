import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Search, FileCheck, Brain, Landmark, BadgeIndianRupee, ArrowRight, Sparkles, Shield, Users } from "lucide-react";
import educationImg from "@/assets/education-rafiki.png";

const features = [
  { icon: GraduationCap, title: "🎓 Find Scholarships", desc: "AI-powered matching with Tamil Nadu & national scholarships", color: "bg-scholarship/10 text-scholarship", borderColor: "hover:border-scholarship/30", glow: "glow-scholarship" },
  { icon: Brain, title: "🧠 Career Guidance", desc: "Take a smart survey and discover your ideal career path", color: "bg-career/10 text-career", borderColor: "hover:border-career/30", glow: "glow-career" },
  { icon: BadgeIndianRupee, title: "💰 Loan Recommendations", desc: "Compare education loans and find the best rates", color: "bg-loan/10 text-loan", borderColor: "hover:border-loan/30", glow: "glow-loan" },
  { icon: FileCheck, title: "📄 Document Verification", desc: "Validate your documents before applying", color: "bg-documents/10 text-documents", borderColor: "hover:border-documents/30", glow: "glow-documents" },
  { icon: Landmark, title: "🏛️ Government Schemes", desc: "Explore state and central government schemes", color: "bg-schemes/10 text-schemes", borderColor: "hover:border-schemes/30", glow: "glow-schemes" },
  { icon: Sparkles, title: "✨ AI Eligibility Score", desc: "Get a percentage match for every scholarship", color: "bg-scholarship/10 text-scholarship", borderColor: "hover:border-scholarship/30", glow: "glow-scholarship" },
];

const stats = [
  { value: "500+", label: "Scholarships" },
  { value: "50K+", label: "Students Helped" },
  { value: "98%", label: "Accuracy" },
  { value: "6+", label: "Bank Partners" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-[0.07]" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-scholarship/10 blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-career/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-documents/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image - Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-5/12 flex justify-center"
            >
              <img src={educationImg} alt="Education illustration" className="w-full max-w-md drop-shadow-2xl" />
            </motion.div>

            {/* Text - Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-7/12 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4" /> AI-Powered Student Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] mb-6 tracking-tight">
                One Platform for{" "}
                <br className="hidden md:block" />
                Your Future –{" "}
                <span className="gradient-text">Scholarships, Career & Loans</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                AI-powered scholarship matching, career guidance surveys, education loan comparison, and government scheme discovery — all in one place for Tamil Nadu students.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link to="/scholarships" className="gradient-btn px-8 py-3.5 rounded-2xl font-semibold inline-flex items-center gap-2 text-base">
                  🎓 Check Eligibility <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/career-survey" className="px-8 py-3.5 rounded-2xl font-semibold border-2 border-career/30 text-career hover:bg-career/5 transition-all duration-300 inline-flex items-center gap-2 text-base">
                  🧠 Start Survey <Brain className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-4">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-extrabold gradient-text">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4">
            Everything You Need to <span className="gradient-text">Succeed</span> ✨
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive tools designed specifically for Tamil Nadu students to navigate scholarships, careers, and education financing.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className={`bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group ${f.borderColor} ${f.glow}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-display font-extrabold mb-3">Trusted by Students Across Tamil Nadu 🎯</h2>
            <p className="text-muted-foreground">Built with security, accuracy, and accessibility in mind</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "🔒 Secure & Private", desc: "Your data is encrypted and never shared with third parties" },
              { icon: Sparkles, title: "🤖 AI-Powered Matching", desc: "Smart algorithms analyze your profile for the best matches" },
              { icon: Users, title: "👥 Community Driven", desc: "Join 50,000+ students already using ScholarAI" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary-foreground mb-4">Ready to Shape Your Future? 🚀</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg max-w-xl mx-auto">Join thousands of Tamil Nadu students already using ScholarAI to find scholarships, plan careers, and secure education loans.</p>
            <Link to="/dashboard" className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-card text-foreground font-bold text-lg hover:bg-card/90 transition-all duration-300 shadow-2xl hover:scale-105">
              📊 Go to Dashboard <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-10">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <div className="flex items-center justify-center gap-2 mb-3">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="font-display font-bold text-foreground">ScholarAI</span>
          </div>
          <p>© 2026 ScholarAI – Tamil Nadu Student Scholarship, Career & Loan Guidance Platform</p>
        </div>
      </footer>
    </div>
  );
}
