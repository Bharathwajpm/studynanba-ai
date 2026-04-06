import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, ChevronLeft, ChevronRight, BarChart3, Sparkles } from "lucide-react";
import { surveyQuestions, calculateCareerResults } from "@/data/survey";
import { useApp } from "@/context/AppContext";
import { useNavigate } from "react-router-dom";
import careerStepsImg from "@/assets/career-steps.png";
import jobHuntImg from "@/assets/job-hunt-bro.png";

export default function CareerSurveyPage() {
  const { setSurveyAnswers } = useApp();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(surveyQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [started, setStarted] = useState(false);

  const progress = ((answers.filter(a => a >= 0).length) / surveyQuestions.length) * 100;

  const handleAnswer = (optionIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[current] = optionIdx;
    setAnswers(newAnswers);
    if (current < surveyQuestions.length - 1) {
      setTimeout(() => setCurrent(current + 1), 300);
    }
  };

  const handleSubmit = () => {
    setSurveyAnswers(answers);
    setShowResults(true);
  };

  const results = calculateCareerResults(answers).slice(0, 5);

  if (!started && !showResults) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="rounded-3xl overflow-hidden mb-8 relative">
            <img src={careerStepsImg} alt="5 Steps to Career Success" className="w-full h-48 md:h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:p-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-1">🧠 Career Guidance Survey</h1>
                <p className="text-white/80 text-sm">Discover your ideal career path through AI-powered analysis</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-8 text-center glow-career">
            <div className="w-16 h-16 rounded-2xl bg-career/10 flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-career" />
            </div>
            <h2 className="text-xl font-display font-extrabold mb-2">Ready to Find Your Path? 🎯</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">Answer {surveyQuestions.length} questions to get personalized career recommendations based on your interests and strengths.</p>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {["🎯 Personalized Results", "⚡ Takes 10 minutes", "🧠 AI-Powered", "📊 30 Questions"].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full bg-career/10 text-career text-sm font-semibold">{tag}</span>
              ))}
            </div>
            <button onClick={() => setStarted(true)} className="gradient-btn px-10 py-3.5 rounded-2xl font-semibold text-base inline-flex items-center gap-2">
              Start Survey <Sparkles className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card rounded-2xl shadow-lg border border-border/50 p-8 text-center glow-career">
          <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-display font-extrabold mb-2">Your Career Results 📊</h1>
          <p className="text-muted-foreground mb-8">Based on your survey responses, here are your top career matches</p>

          <div className="space-y-4 mb-8">
            {results.map((r, i) => (
              <motion.div key={r.field} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="flex items-center gap-4">
                <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold ${i === 0 ? "gradient-bg text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-sm">{r.field}</span>
                    <span className="text-sm font-semibold text-career">{r.percentage}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${i === 0 ? "gradient-bg" : "bg-career/40"}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${r.percentage}%` }}
                      transition={{ duration: 1, delay: i * 0.15 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mb-8">
            <img src={jobHuntImg} alt="Job hunt illustration" className="w-48 mx-auto opacity-80" />
          </motion.div>

          <div className="flex gap-3 justify-center">
            <button onClick={() => { setShowResults(false); setStarted(false); setCurrent(0); setAnswers(new Array(surveyQuestions.length).fill(-1)); }} className="px-6 py-2.5 rounded-xl border border-input text-sm font-semibold hover:bg-muted transition-colors">
              🔄 Retake Survey
            </button>
            <button onClick={() => navigate("/dashboard")} className="gradient-btn px-6 py-2.5 rounded-xl text-sm font-semibold">
              📊 View Dashboard
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const q = surveyQuestions[current];

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-career/10 flex items-center justify-center">
            <Brain className="h-5 w-5 text-career" />
          </div>
          <div>
            <h1 className="text-xl font-display font-extrabold">🧠 Career Guidance Survey</h1>
            <p className="text-xs text-muted-foreground">Question {current + 1} of {surveyQuestions.length}</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground font-medium">Progress</span>
            <span className="font-bold text-career">{Math.round(progress)}%</span>
          </div>
          <div className="h-3 rounded-full bg-muted overflow-hidden">
            <motion.div className="h-full bg-career rounded-full" animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
            className="bg-card rounded-2xl shadow-lg border border-border/50 p-6 mb-6"
          >
            <h2 className="font-display font-bold text-lg mb-6">{q.question}</h2>
            <div className="space-y-3">
              {q.options.map((opt, idx) => (
                <button key={idx} onClick={() => handleAnswer(idx)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    answers[current] === idx ? "border-career bg-career/5 shadow-md" : "border-border hover:border-career/30 hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                      answers[current] === idx ? "border-career bg-career text-white" : "border-muted-foreground/30"
                    }`}>
                      {answers[current] === idx && "✓"}
                    </span>
                    <span className="font-medium text-sm">{opt.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between">
          <button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-input text-sm font-semibold disabled:opacity-30 hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
          {current === surveyQuestions.length - 1 ? (
            <button onClick={handleSubmit} disabled={answers.some(a => a < 0)} className="gradient-btn px-8 py-2.5 rounded-xl text-sm font-semibold disabled:opacity-50">
              🎯 See Results
            </button>
          ) : (
            <button onClick={() => setCurrent(Math.min(surveyQuestions.length - 1, current + 1))}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-input text-sm font-semibold hover:bg-muted transition-colors"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
