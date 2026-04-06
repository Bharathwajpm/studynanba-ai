export interface Scheme {
  id: string;
  name: string;
  provider: string;
  description: string;
  eligibility: string;
  benefits: string;
  applyLink: string;
  type: "state" | "national";
}

export const schemes: Scheme[] = [
  { id: "1", name: "Free Laptop Scheme", provider: "TN Govt", description: "Free laptops for students joining college after 12th std.", eligibility: "12th pass, TN domicile", benefits: "Free laptop", applyLink: "https://www.tn.gov.in", type: "state" },
  { id: "2", name: "Moovalur Ramamirtham Scheme", provider: "TN Govt", description: "Financial assistance for girl students to pursue higher education.", eligibility: "Girl student, 12th pass", benefits: "₹1,000/month", applyLink: "https://www.tn.gov.in", type: "state" },
  { id: "3", name: "CM Fellowship", provider: "TN Govt", description: "Fellowship for meritorious students pursuing research.", eligibility: "PG with 60%+", benefits: "₹25,000/month", applyLink: "https://www.tn.gov.in", type: "state" },
  { id: "4", name: "National Scholarship Portal (NSP)", provider: "Central Govt", description: "Single-window for central and state scholarships.", eligibility: "Various criteria", benefits: "Multiple scholarships", applyLink: "https://scholarships.gov.in", type: "national" },
  { id: "5", name: "PM Vidya Lakshmi", provider: "Central Govt", description: "Portal for education loan and scholarship information.", eligibility: "Indian student", benefits: "Loan & scholarship access", applyLink: "https://www.vidyalakshmi.co.in", type: "national" },
  { id: "6", name: "Inspire Scholarship", provider: "DST, Govt of India", description: "For top 1% students in science stream.", eligibility: "Top 1% in board exams", benefits: "₹80,000/year", applyLink: "https://online-inspire.gov.in", type: "national" },
  { id: "7", name: "Free Bus Pass Scheme", provider: "TN Govt", description: "Free bus pass for school and college students in Tamil Nadu.", eligibility: "Student in TN institution", benefits: "Free bus travel", applyLink: "https://www.tn.gov.in", type: "state" },
  { id: "8", name: "PMSSS", provider: "Central Govt", description: "PM Special Scholarship Scheme for J&K and Ladakh students.", eligibility: "Domicile of J&K/Ladakh", benefits: "Up to ₹3 lakh/year", applyLink: "https://www.aicte-india.org/schemes/students-development-schemes/pmsss", type: "national" },
];
