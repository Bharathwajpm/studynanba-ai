import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserProfile {
  name: string;
  caste: string;
  income: number;
  education: string;
}

interface AppState {
  profile: UserProfile;
  setProfile: (p: UserProfile) => void;
  surveyAnswers: number[];
  setSurveyAnswers: (a: number[]) => void;
  language: "en" | "ta";
  setLanguage: (l: "en" | "ta") => void;
  darkMode: boolean;
  setDarkMode: (d: boolean) => void;
}

const defaultProfile: UserProfile = { name: "Student", caste: "BC", income: 150000, education: "12th" };

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [surveyAnswers, setSurveyAnswers] = useState<number[]>([]);
  const [language, setLanguage] = useState<"en" | "ta">("en");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <AppContext.Provider value={{ profile, setProfile, surveyAnswers, setSurveyAnswers, language, setLanguage, darkMode, setDarkMode }}>
      <div className={darkMode ? "" : "light"}>{children}</div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
}
