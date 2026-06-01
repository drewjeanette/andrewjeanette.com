import React, { useState, useRef } from 'react';
import { FileText, CheckCircle, AlertTriangle, RefreshCw, Wand2, Search, Upload, X, FileType, Trash2 } from 'lucide-react';

interface Improvement {
  original: string;
  improved: string;
  reason: string;
}

interface AnalysisResult {
  score: number;
  atsStatus: 'High' | 'Medium' | 'Low';
  keywords: string[];
  improvements: Improvement[];
  missingKeywords: string[];
}

const SmartResume: React.FC = () => {
  const [resumeText, setResumeText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setResumeText(''); // Clear text if file is selected
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
      setResumeText('');
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  const handleAnalyze = () => {
    if (!resumeText.trim() && !selectedFile) return;

    setIsAnalyzing(true);

    // Simulate AI Processing Delay
    setTimeout(() => {
      // Mock logic to generate results based on text length/content
      const wordCount = resumeText.split(' ').length;
      const hasNumbers = /\d/.test(resumeText);
      const hasActionVerbs = /managed|led|developed|created|analyzed/i.test(resumeText);
      
      // Randomize slightly for demo feel
      let baseScore = selectedFile ? 72 : 65; 
      
      if (wordCount > 100) baseScore += 10;
      if (hasNumbers) baseScore += 5;
      if (hasActionVerbs) baseScore += 10;
      const finalScore = Math.min(Math.floor(baseScore + Math.random() * 10), 98);

      setResult({
        score: finalScore,
        atsStatus: finalScore > 80 ? 'High' : finalScore > 60 ? 'Medium' : 'Low',
        keywords: ['Project Management', 'Data Analysis', 'Leadership', 'Strategic Planning', 'SQL', 'Teamwork'].filter(() => Math.random() > 0.3),
        missingKeywords: ['Python', 'Agile', 'Budgeting'],
        improvements: [
            {
                original: "Responsible for managing the team and handling sales data.",
                improved: "Spearheaded a cross-functional team of 10, optimizing sales data workflows to increase efficiency by 15%.",
                reason: "Weak passive voice replaced with strong action verbs and metrics."
            },
            {
                original: "Helped with the database project.",
                improved: "Collaborated on the migration of enterprise databases, ensuring 99.9% data integrity during the transition.",
                reason: "Vague description expanded to show specific impact and technical context."
            }
        ]
      });
      setIsAnalyzing(false);
    }, 2500);
  };

  const handleReset = () => {
    setResult(null);
    setResumeText('');
    setSelectedFile(null);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  // VIEW 1: Input
  if (!result && !isAnalyzing) {
    return (
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-200">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
            <Wand2 className="text-blue-600" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Smart Resume Analyzer</h2>
          <p className="text-slate-500 mt-2">Upload your resume (PDF) or paste text to get AI-powered feedback.</p>
        </div>

        <div className="space-y-6">
          
          {/* Hidden Input */}
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
            className="hidden" 
          />

          {!selectedFile ? (
            <div className="space-y-4">
                {/* Drag & Drop Area */}
                <div 
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full mb-3 group-hover:scale-110 transition-transform">
                        <Upload className="text-slate-400 group-hover:text-blue-500" size={24} />
                    </div>
                    <p className="text-slate-900 font-bold">Click to Upload or Drag & Drop</p>
                    <p className="text-slate-500 text-sm mt-1">PDF, DOCX, or TXT (Max 5MB)</p>
                </div>

                <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <span className="relative bg-white px-4 text-sm text-slate-400 font-bold uppercase">Or Paste Text</span>
                </div>

                <textarea
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  placeholder="Paste your resume content here..."
                  className="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-0 outline-none resize-none text-slate-700 placeholder:text-slate-400 transition-colors"
                />
            </div>
          ) : (
            /* File Selected State */
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-center justify-between animate-fade-in">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600">
                        <FileType size={32} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">{selectedFile.name}</h4>
                        <p className="text-slate-500 text-sm">{(selectedFile.size / 1024).toFixed(0)} KB • Ready to analyze</p>
                    </div>
                </div>
                <button 
                    onClick={removeFile}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-white rounded-full transition-all"
                >
                    <Trash2 size={20} />
                </button>
            </div>
          )}

          <button
            onClick={handleAnalyze}
            disabled={!selectedFile && resumeText.length < 20}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Search size={20} />
            {selectedFile ? 'Analyze Document' : 'Analyze Text'}
          </button>
        </div>
      </div>
    );
  }

  // VIEW 2: Loading
  if (isAnalyzing) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-12 rounded-xl shadow-lg border border-slate-200 text-center">
        <div className="mb-8 relative">
           <div className="w-20 h-20 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
           <Wand2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 animate-pulse" size={24} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Analyzing Resume...</h3>
        <p className="text-slate-500">Scanning for ATS keywords, action verbs, and impact metrics.</p>
      </div>
    );
  }

  // VIEW 3: Results
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Score Card */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-6">
          <div className="relative w-24 h-24 flex items-center justify-center">
             <svg className="w-full h-full transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="#f1f5f9" strokeWidth="8" fill="transparent" />
                <circle 
                    cx="48" cy="48" r="40" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    fill="transparent" 
                    strokeDasharray={251.2} 
                    strokeDashoffset={251.2 - (251.2 * result!.score) / 100}
                    className={`${getScoreColor(result!.score)} transition-all duration-1000 ease-out`}
                />
             </svg>
             <span className={`absolute text-2xl font-bold ${getScoreColor(result!.score)}`}>{result!.score}</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Resume Score</h3>
            <p className="text-slate-500 text-sm">Based on structure & content</p>
          </div>
        </div>

        {/* ATS Status */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-green-600" size={24} />
                <h3 className="text-lg font-bold text-slate-900">ATS Compatibility</h3>
            </div>
            <p className="text-slate-500 text-sm mb-3">Your resume is <span className="font-bold text-slate-900">{result!.atsStatus}</span> probability to pass automated screeners.</p>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${result!.atsStatus === 'High' ? 'bg-green-500' : 'bg-yellow-500'} w-[85%]`}></div>
            </div>
        </div>

        {/* Detected Skills */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Detected Keywords</h3>
            <div className="flex flex-wrap gap-2">
                {result!.keywords.map(k => (
                    <span key={k} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded border border-blue-100">
                        {k}
                    </span>
                ))}
                 {result!.missingKeywords.map(k => (
                    <span key={k} className="px-2 py-1 bg-slate-50 text-slate-400 text-xs font-bold rounded border border-dashed border-slate-300 decoration-line-through">
                        {k}
                    </span>
                ))}
            </div>
        </div>
      </div>

      {/* AI Rewriter */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Wand2 size={20} className="text-purple-600" /> AI Bullet Point Enhancer
                </h3>
                <p className="text-slate-500 text-sm mt-1">We found passive sentences. Here is how to fix them.</p>
            </div>
            <button onClick={handleReset} className="text-slate-400 hover:text-slate-600">
                <X size={24} />
            </button>
        </div>

        <div className="divide-y divide-slate-100">
            {result!.improvements.map((imp, idx) => (
                <div key={idx} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wide">
                            <AlertTriangle size={14} /> Original
                        </div>
                        <p className="text-slate-600 bg-red-50 p-4 rounded-lg border border-red-100 text-sm italic">
                            "{imp.original}"
                        </p>
                    </div>
                    
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-wide">
                            <CheckCircle size={14} /> AI Suggestion
                        </div>
                        <p className="text-slate-800 bg-green-50 p-4 rounded-lg border border-green-100 text-sm font-medium">
                            "{imp.improved}"
                        </p>
                        <p className="text-xs text-slate-400 pl-1">Reason: {imp.reason}</p>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="p-6 bg-slate-50 border-t border-slate-200 text-center">
             <button 
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-blue-400 hover:text-blue-600 text-slate-600 font-bold rounded-lg transition-all shadow-sm"
             >
                <RefreshCw size={18} /> Analyze Another Resume
             </button>
        </div>
      </div>
    </div>
  );
};

export default SmartResume;