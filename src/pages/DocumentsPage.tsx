import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Upload, FileCheck, AlertCircle, CheckCircle2, XCircle, File, Shield } from "lucide-react";

interface DocResult {
  name: string;
  status: "valid" | "invalid" | "missing";
  message: string;
}

function validateFile(file: File): DocResult {
  const name = file.name.toLowerCase();
  const validFormats = [".pdf", ".jpg", ".jpeg", ".png"];
  const hasValidFormat = validFormats.some(f => name.endsWith(f));

  if (!hasValidFormat) return { name: file.name, status: "invalid", message: "Invalid format. Use PDF, JPG, or PNG." };
  if (file.size > 5 * 1024 * 1024) return { name: file.name, status: "invalid", message: "File too large. Max 5MB." };
  if (file.size < 1024) return { name: file.name, status: "invalid", message: "File too small. May be corrupted." };

  const checks = [
    { keyword: "aadhar", label: "Aadhaar Card" },
    { keyword: "income", label: "Income Certificate" },
    { keyword: "community", label: "Community Certificate" },
    { keyword: "marksheet", label: "Mark Sheet" },
    { keyword: "photo", label: "Passport Photo" },
  ];

  const matched = checks.find(c => name.includes(c.keyword));
  if (matched) return { name: file.name, status: "valid", message: `${matched.label} detected. Format & size OK.` };
  return { name: file.name, status: "valid", message: "Document uploaded. Format & size validated." };
}

export default function DocumentsPage() {
  const [results, setResults] = useState<DocResult[]>([]);
  const [dragging, setDragging] = useState(false);

  const handleFiles = useCallback((files: FileList) => {
    const newResults = Array.from(files).map(validateFile);
    setResults(prev => [...prev, ...newResults]);
  }, []);

  const requiredDocs = ["Aadhaar Card", "Income Certificate", "Community Certificate", "Mark Sheet", "Passport Photo"];
  const uploaded = results.filter(r => r.status === "valid").length;

  const statusIcon = (s: string) => {
    if (s === "valid") return <CheckCircle2 className="h-5 w-5 text-schemes" />;
    if (s === "invalid") return <XCircle className="h-5 w-5 text-destructive" />;
    return <AlertCircle className="h-5 w-5 text-loan" />;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl overflow-hidden mb-8 bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(210,80%,55%)] p-8"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-display font-extrabold text-white mb-1">📄 Document Verification</h1>
        <p className="text-white/80">Upload and validate your documents before applying</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl shadow-lg border border-border/50 p-5 mb-6 glow-documents">
        <h2 className="font-display font-bold mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-documents" /> Required Documents
        </h2>
        <div className="flex flex-wrap gap-2">
          {requiredDocs.map(doc => (
            <span key={doc} className="px-3 py-2 rounded-xl bg-documents/10 text-documents text-xs font-semibold flex items-center gap-1.5">
              <File className="h-3.5 w-3.5" /> {doc}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className={`bg-card rounded-2xl shadow-lg border-2 border-dashed p-10 mb-6 transition-all text-center cursor-pointer ${
          dragging ? "border-documents bg-documents/5 scale-[1.02]" : "border-border hover:border-documents/40 hover:shadow-xl"
        }`}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={e => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); }}
        onClick={() => { const input = document.createElement("input"); input.type = "file"; input.multiple = true; input.accept = ".pdf,.jpg,.jpeg,.png"; input.onchange = () => input.files && handleFiles(input.files); input.click(); }}
      >
        <div className="w-16 h-16 rounded-2xl bg-documents/10 flex items-center justify-center mx-auto mb-4">
          <Upload className="h-8 w-8 text-documents" />
        </div>
        <p className="font-bold mb-1 text-lg">📁 Drag & drop files here</p>
        <p className="text-sm text-muted-foreground">or click to browse • PDF, JPG, PNG • Max 5MB</p>
      </motion.div>

      {results.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl shadow-lg border border-border/50 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-documents" /> ✅ Validation Results
            </h2>
            <span className="px-3 py-1 rounded-full bg-documents/10 text-documents text-sm font-semibold">{uploaded}/{results.length} valid</span>
          </div>
          <div className="space-y-3">
            {results.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                  r.status === "valid" ? "border-schemes/20 bg-schemes/5" : "border-destructive/20 bg-destructive/5"
                }`}
              >
                {statusIcon(r.status)}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm truncate">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.message}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
