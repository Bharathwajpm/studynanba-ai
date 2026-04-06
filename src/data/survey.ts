export interface SurveyQuestion {
  id: number;
  question: string;
  options: { text: string; scores: Record<string, number> }[];
}

export const careerFields = ["CSE", "ECE", "EEE", "Mechanical", "Civil", "MBBS", "Law", "Arts", "Commerce", "Design", "AGRI"];

export const surveyQuestions: SurveyQuestion[] = [
  { id: 1, question: "Which subject do you enjoy the most?", options: [
    { text: "Mathematics & Logic", scores: { CSE: 5, ECE: 4, EEE: 3, Mechanical: 3 } },
    { text: "Biology & Life Sciences", scores: { MBBS: 5, AGRI: 4, Arts: 2 } },
    { text: "Language & Literature", scores: { Law: 4, Arts: 5, Commerce: 2 } },
    { text: "Drawing & Creative Work", scores: { Design: 5, Civil: 3, Arts: 3 } },
  ]},
  { id: 2, question: "How do you prefer to solve problems?", options: [
    { text: "Writing code or algorithms", scores: { CSE: 5, ECE: 3 } },
    { text: "Hands-on experiments", scores: { EEE: 4, Mechanical: 4, MBBS: 3 } },
    { text: "Research and analysis", scores: { Law: 4, Commerce: 3, MBBS: 3 } },
    { text: "Visual design and prototyping", scores: { Design: 5, Civil: 3 } },
  ]},
  { id: 3, question: "What kind of work environment appeals to you?", options: [
    { text: "Tech office with computers", scores: { CSE: 5, ECE: 3, Design: 3 } },
    { text: "Hospital or lab", scores: { MBBS: 5 } },
    { text: "Courtroom or government office", scores: { Law: 5, Commerce: 2 } },
    { text: "Construction site or factory", scores: { Civil: 5, Mechanical: 4, EEE: 3 } },
  ]},
  { id: 4, question: "Which activity do you prefer in free time?", options: [
    { text: "Building apps or websites", scores: { CSE: 5, Design: 3 } },
    { text: "Reading about science", scores: { MBBS: 4, ECE: 3, EEE: 2 } },
    { text: "Debating and discussions", scores: { Law: 5, Arts: 3 } },
    { text: "Tinkering with electronics", scores: { ECE: 5, EEE: 4, Mechanical: 2 } },
  ]},
  { id: 5, question: "What's your learning style?", options: [
    { text: "Logical step-by-step", scores: { CSE: 4, EEE: 3, Commerce: 3 } },
    { text: "Visual & diagrams", scores: { Design: 5, Civil: 3, MBBS: 2 } },
    { text: "Reading & memorizing", scores: { Law: 4, MBBS: 4, Arts: 3 } },
    { text: "Hands-on practice", scores: { Mechanical: 5, ECE: 4, EEE: 3 } },
  ]},
  { id: 6, question: "Which industry excites you?", options: [
    { text: "IT & Software", scores: { CSE: 5, ECE: 2 } },
    { text: "Healthcare", scores: { MBBS: 5 } },
    { text: "Business & Finance", scores: { Commerce: 5, Law: 2 } },
    { text: "Manufacturing & Energy", scores: { Mechanical: 4, EEE: 5, Civil: 2 } },
  ]},
  { id: 7, question: "Do you enjoy public speaking?", options: [
    { text: "Yes, I love it", scores: { Law: 5, Arts: 3, Commerce: 2 } },
    { text: "Sometimes", scores: { MBBS: 2, Design: 2, Commerce: 2 } },
    { text: "Not really", scores: { CSE: 3, ECE: 3, Mechanical: 2 } },
    { text: "I prefer writing", scores: { Arts: 4, Law: 3, Design: 2 } },
  ]},
  { id: 8, question: "How important is salary to you?", options: [
    { text: "Very important", scores: { CSE: 4, Commerce: 4, MBBS: 3 } },
    { text: "Important but not #1", scores: { ECE: 3, EEE: 3, Law: 3 } },
    { text: "I value passion more", scores: { Arts: 5, Design: 4 } },
    { text: "I want to serve society", scores: { MBBS: 4, Law: 3, Civil: 3, AGRI: 3 } },
  ]},
  { id: 9, question: "Do you like working with numbers?", options: [
    { text: "Love it!", scores: { CSE: 4, Commerce: 5, ECE: 3 } },
    { text: "It's okay", scores: { EEE: 3, Mechanical: 3, Civil: 2 } },
    { text: "Not my strength", scores: { Arts: 4, Law: 3, Design: 3 } },
    { text: "Only in context", scores: { MBBS: 2, Commerce: 2, AGRI: 2 } },
  ]},
  { id: 10, question: "What role do you see yourself in 10 years?", options: [
    { text: "Software architect / CTO", scores: { CSE: 5, ECE: 2 } },
    { text: "Doctor / Surgeon", scores: { MBBS: 5 } },
    { text: "Business owner / CEO", scores: { Commerce: 5, Law: 2 } },
    { text: "Designer / Creative director", scores: { Design: 5, Arts: 3 } },
  ]},
  { id: 11, question: "How do you feel about fieldwork outdoors?", options: [
    { text: "Love being outdoors", scores: { AGRI: 5, Civil: 4, Mechanical: 2 } },
    { text: "Prefer indoors mostly", scores: { CSE: 4, Design: 3, Commerce: 3 } },
    { text: "Mixed – both are fine", scores: { ECE: 3, EEE: 3, MBBS: 2 } },
    { text: "Only if necessary", scores: { Law: 2, Arts: 2 } },
  ]},
  { id: 12, question: "Which tool would you most like to master?", options: [
    { text: "Programming languages (Python, Java)", scores: { CSE: 5, ECE: 3 } },
    { text: "Medical instruments", scores: { MBBS: 5 } },
    { text: "Adobe Creative Suite / Figma", scores: { Design: 5, Arts: 3 } },
    { text: "AutoCAD / SolidWorks", scores: { Mechanical: 5, Civil: 4 } },
  ]},
  { id: 13, question: "How do you approach teamwork?", options: [
    { text: "I like leading the team", scores: { Commerce: 4, Law: 3, CSE: 2 } },
    { text: "I'm a great collaborator", scores: { Design: 3, MBBS: 3, AGRI: 2 } },
    { text: "I work best alone", scores: { Arts: 4, CSE: 3, ECE: 2 } },
    { text: "I adapt to the situation", scores: { EEE: 3, Mechanical: 3, Civil: 2 } },
  ]},
  { id: 14, question: "What kind of books do you read?", options: [
    { text: "Science fiction & tech", scores: { CSE: 4, ECE: 3 } },
    { text: "History & politics", scores: { Law: 4, Arts: 4 } },
    { text: "Business & self-help", scores: { Commerce: 5, Law: 2 } },
    { text: "Nature & environment", scores: { AGRI: 5, Civil: 2, MBBS: 2 } },
  ]},
  { id: 15, question: "How do you handle stress?", options: [
    { text: "Solve puzzles or code", scores: { CSE: 4, ECE: 3 } },
    { text: "Exercise or sports", scores: { Mechanical: 3, MBBS: 2, AGRI: 2 } },
    { text: "Art, music, or writing", scores: { Arts: 5, Design: 4 } },
    { text: "Talk it out with friends", scores: { Law: 3, Commerce: 3 } },
  ]},
  { id: 16, question: "Which school project did you enjoy most?", options: [
    { text: "Science fair experiment", scores: { ECE: 4, EEE: 4, MBBS: 3 } },
    { text: "Debate competition", scores: { Law: 5, Arts: 3 } },
    { text: "Art or poster making", scores: { Design: 5, Arts: 3 } },
    { text: "Building a model", scores: { Mechanical: 5, Civil: 4 } },
  ]},
  { id: 17, question: "How interested are you in agriculture?", options: [
    { text: "Very interested", scores: { AGRI: 5 } },
    { text: "Somewhat interested", scores: { AGRI: 3, Civil: 2 } },
    { text: "Not much", scores: { CSE: 2, Commerce: 2, Design: 2 } },
    { text: "Not at all", scores: { Law: 2, Arts: 2, MBBS: 2 } },
  ]},
  { id: 18, question: "Do you enjoy watching documentaries about?", options: [
    { text: "Technology & AI", scores: { CSE: 5, ECE: 3 } },
    { text: "Medical breakthroughs", scores: { MBBS: 5 } },
    { text: "Crime & justice", scores: { Law: 5 } },
    { text: "Architecture & design", scores: { Civil: 4, Design: 4 } },
  ]},
  { id: 19, question: "How good are you with machines?", options: [
    { text: "I can fix anything", scores: { Mechanical: 5, EEE: 4 } },
    { text: "I understand basics", scores: { ECE: 3, Civil: 3 } },
    { text: "Not my area", scores: { Arts: 3, Law: 3, Commerce: 2 } },
    { text: "I prefer software over hardware", scores: { CSE: 5, Design: 3 } },
  ]},
  { id: 20, question: "What motivates you the most?", options: [
    { text: "Innovation and creating new things", scores: { CSE: 4, Design: 4, ECE: 3 } },
    { text: "Helping people directly", scores: { MBBS: 5, Law: 3, AGRI: 2 } },
    { text: "Financial independence", scores: { Commerce: 5, CSE: 2 } },
    { text: "Building lasting structures", scores: { Civil: 5, Mechanical: 3 } },
  ]},
  { id: 21, question: "How do you feel about chemistry?", options: [
    { text: "Love it – reactions fascinate me", scores: { MBBS: 4, AGRI: 3 } },
    { text: "It's okay", scores: { EEE: 2, Mechanical: 2 } },
    { text: "I prefer physics", scores: { ECE: 4, EEE: 4, Mechanical: 3 } },
    { text: "Not interested in science", scores: { Arts: 4, Law: 4, Commerce: 3 } },
  ]},
  { id: 22, question: "Would you like to work with the government?", options: [
    { text: "Yes, public service appeals to me", scores: { Law: 5, Civil: 3, AGRI: 3 } },
    { text: "Maybe – depends on the role", scores: { Commerce: 3, EEE: 2 } },
    { text: "I prefer private sector", scores: { CSE: 4, Design: 3, Commerce: 3 } },
    { text: "I want to be an entrepreneur", scores: { Commerce: 5, Design: 2, CSE: 2 } },
  ]},
  { id: 23, question: "How do you feel about long study hours?", options: [
    { text: "I can study 10+ hours easily", scores: { MBBS: 5, Law: 4 } },
    { text: "I prefer practical over theory", scores: { Mechanical: 4, ECE: 4, EEE: 3 } },
    { text: "Moderate study is fine", scores: { Commerce: 3, Arts: 3, AGRI: 2 } },
    { text: "I learn by doing projects", scores: { CSE: 5, Design: 4 } },
  ]},
  { id: 24, question: "What type of app would you build?", options: [
    { text: "A social media platform", scores: { CSE: 5, Design: 3 } },
    { text: "A health tracking app", scores: { MBBS: 4, CSE: 2 } },
    { text: "A farm management tool", scores: { AGRI: 5, CSE: 2 } },
    { text: "An e-commerce store", scores: { Commerce: 5, Design: 3 } },
  ]},
  { id: 25, question: "How important is creativity in your career?", options: [
    { text: "Essential – I need creative freedom", scores: { Design: 5, Arts: 5 } },
    { text: "Nice to have but not critical", scores: { CSE: 3, ECE: 2 } },
    { text: "I prefer structured work", scores: { Commerce: 4, Law: 3, EEE: 2 } },
    { text: "Creativity in problem-solving", scores: { Mechanical: 3, Civil: 3, MBBS: 2 } },
  ]},
  { id: 26, question: "Which global issue concerns you most?", options: [
    { text: "Climate change & environment", scores: { AGRI: 5, Civil: 4 } },
    { text: "Healthcare accessibility", scores: { MBBS: 5 } },
    { text: "Digital divide & cybersecurity", scores: { CSE: 5, ECE: 3 } },
    { text: "Economic inequality", scores: { Commerce: 4, Law: 4 } },
  ]},
  { id: 27, question: "Do you enjoy working with data?", options: [
    { text: "Yes, data analysis excites me", scores: { CSE: 5, Commerce: 4 } },
    { text: "Only for specific purposes", scores: { MBBS: 3, AGRI: 2, ECE: 2 } },
    { text: "I prefer creative outputs", scores: { Design: 5, Arts: 4 } },
    { text: "I prefer physical work", scores: { Mechanical: 4, Civil: 4 } },
  ]},
  { id: 28, question: "How do you see technology's role?", options: [
    { text: "Technology IS the future", scores: { CSE: 5, ECE: 4, Design: 2 } },
    { text: "A tool to solve real problems", scores: { MBBS: 3, AGRI: 3, EEE: 3 } },
    { text: "Useful but not everything", scores: { Law: 3, Arts: 3, Commerce: 2 } },
    { text: "I prefer traditional methods", scores: { Mechanical: 2, Civil: 2 } },
  ]},
  { id: 29, question: "What's your communication strength?", options: [
    { text: "Presenting ideas clearly", scores: { Law: 5, Commerce: 3 } },
    { text: "Writing detailed reports", scores: { Arts: 4, MBBS: 3 } },
    { text: "Creating visuals", scores: { Design: 5, Civil: 2 } },
    { text: "Technical documentation", scores: { CSE: 4, ECE: 3, EEE: 3 } },
  ]},
  { id: 30, question: "If money wasn't an issue, what would you do?", options: [
    { text: "Build a tech startup", scores: { CSE: 5, Commerce: 3, Design: 2 } },
    { text: "Open a free clinic", scores: { MBBS: 5 } },
    { text: "Start an organic farm", scores: { AGRI: 5 } },
    { text: "Create art & travel the world", scores: { Arts: 5, Design: 4 } },
  ]},
];

export function calculateCareerResults(answers: number[]): { field: string; score: number; percentage: number }[] {
  const scores: Record<string, number> = {};
  careerFields.forEach(f => scores[f] = 0);

  answers.forEach((answerIdx, qIdx) => {
    if (qIdx < surveyQuestions.length && answerIdx >= 0) {
      const option = surveyQuestions[qIdx].options[answerIdx];
      if (option) {
        Object.entries(option.scores).forEach(([field, score]) => {
          scores[field] = (scores[field] || 0) + score;
        });
      }
    }
  });

  const maxPossible = surveyQuestions.length * 5;
  return Object.entries(scores)
    .map(([field, score]) => ({ field, score, percentage: Math.round((score / maxPossible) * 100) }))
    .sort((a, b) => b.score - a.score);
}
