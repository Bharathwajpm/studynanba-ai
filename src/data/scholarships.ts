export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  amount: string;
  deadline: string;
  category: string[];
  incomeLimit: number;
  educationLevel: string[];
  description: string;
  applyLink: string;
}

export const scholarships: Scholarship[] = [
  { id: "1", name: "BC/MBC Scholarship", provider: "TN Govt", amount: "₹12,000/year", deadline: "2026-06-30", category: ["BC", "MBC"], incomeLimit: 200000, educationLevel: ["12th", "College"], description: "For BC/MBC students pursuing higher education in Tamil Nadu.", applyLink: "https://www.scholarships.gov.in" },
  { id: "2", name: "SC/ST Post-Matric Scholarship", provider: "Central Govt", amount: "₹25,000/year", deadline: "2026-05-15", category: ["SC", "ST"], incomeLimit: 250000, educationLevel: ["12th", "College"], description: "Central government scholarship for SC/ST students.", applyLink: "https://scholarships.gov.in" },
  { id: "3", name: "EVR Nagammai Scholarship", provider: "TN Govt", amount: "₹10,000/year", deadline: "2026-07-31", category: ["BC", "MBC", "SC", "ST"], incomeLimit: 150000, educationLevel: ["College"], description: "For girl students from economically weaker sections.", applyLink: "https://www.scholarships.gov.in" },
  { id: "4", name: "First Graduate Scholarship", provider: "TN Govt", amount: "₹8,000/year", deadline: "2026-06-15", category: ["General", "BC", "MBC", "SC", "ST"], incomeLimit: 300000, educationLevel: ["College"], description: "For first-generation graduates from any community.", applyLink: "https://www.scholarships.gov.in" },
  { id: "5", name: "AICTE Pragati Scholarship", provider: "AICTE", amount: "₹50,000/year", deadline: "2026-08-31", category: ["General", "BC", "MBC", "SC", "ST"], incomeLimit: 800000, educationLevel: ["College"], description: "For girl students in AICTE approved technical institutions.", applyLink: "https://www.aicte-india.org/schemes/students-development-schemes/PRAGATI" },
  { id: "6", name: "NSP Merit Scholarship", provider: "Central Govt", amount: "₹20,000/year", deadline: "2026-09-30", category: ["General", "BC", "MBC"], incomeLimit: 600000, educationLevel: ["12th", "College"], description: "National merit-based scholarship for top performers.", applyLink: "https://scholarships.gov.in" },
  { id: "7", name: "Minority Scholarship", provider: "TN Govt", amount: "₹15,000/year", deadline: "2026-07-15", category: ["Minority"], incomeLimit: 200000, educationLevel: ["10th", "12th", "College"], description: "For students from minority communities.", applyLink: "https://www.scholarships.gov.in" },
  { id: "8", name: "Adi Dravidar Scholarship", provider: "TN Govt", amount: "₹18,000/year", deadline: "2026-06-30", category: ["SC"], incomeLimit: 200000, educationLevel: ["10th", "12th", "College"], description: "Comprehensive scholarship for Adi Dravidar students.", applyLink: "https://www.scholarships.gov.in" },
];

export function calculateEligibilityScore(scholarship: Scholarship, profile: { caste: string; income: number; education: string }): number {
  let score = 0;
  if (scholarship.category.includes(profile.caste) || scholarship.category.includes("General")) score += 40;
  if (profile.income <= scholarship.incomeLimit) score += 35;
  else if (profile.income <= scholarship.incomeLimit * 1.2) score += 15;
  if (scholarship.educationLevel.includes(profile.education)) score += 25;
  return Math.min(score, 100);
}
