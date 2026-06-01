import React, { useState } from 'react';
import { ArrowLeft, Trophy, Calculator, DollarSign, MousePointerClick, FileSearch, Palette } from 'lucide-react';
import QuizBowl from './tools/QuizBowl';
import BreakEvenCalc from './tools/BreakEvenCalc';
import SalaryEstimator from './tools/SalaryEstimator';
import SmartResume from './tools/SmartResume';
import BrandPalette from './tools/BrandPalette';

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

const ToolsSection: React.FC = () => {
  const [activeToolId, setActiveToolId] = useState<string | null>(null);

  const tools: Tool[] = [
    {
      id: 'quiz',
      name: "Quiz Bowl",
      description: "Interactive study application for Business domains with 6 subject categories.",
      icon: <Trophy size={56} strokeWidth={1.5} />,
      component: <QuizBowl />
    },
    {
      id: 'breakeven',
      name: "Break-Even Calculator",
      description: "Analyze fixed and variable costs to visualize profitability points with dynamic charts.",
      icon: <Calculator size={56} strokeWidth={1.5} />,
      component: <BreakEvenCalc />
    },
    {
      id: 'salary',
      name: "Salary Estimator",
      description: "Estimate net pay, tax deductions, and income distribution for hourly or annual wages.",
      icon: <DollarSign size={56} strokeWidth={1.5} />,
      component: <SalaryEstimator />
    },
    {
      id: 'resume',
      name: "Smart Resume Analyzer",
      description: "AI-powered tool to rate skills, rewrite bullet points, and check ATS compatibility.",
      icon: <FileSearch size={56} strokeWidth={1.5} />,
      component: <SmartResume />
    },
    {
      id: 'brand',
      name: "Brand Palette Creator",
      description: "Upload a logo to generate 5 distinctive color palettes, fonts, and UI styles.",
      icon: <Palette size={56} strokeWidth={1.5} />,
      component: <BrandPalette />
    }
  ];

  const activeTool = tools.find(t => t.id === activeToolId);

  return (
    <div className="animate-fade-in min-h-[600px]">
      {!activeTool ? (
        /* Dashboard Grid View */
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">DS 3850 Tools & Projects</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              A collection of interactive business logic and data visualization tools developed using React and TypeScript.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {tools.map((tool) => (
              <button 
                key={tool.id}
                onClick={() => setActiveToolId(tool.id)}
                className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 aspect-square hover:border-blue-400 hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center h-full justify-center">
                    <div className="mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                        {tool.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{tool.name}</h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 px-2 opacity-80 group-hover:opacity-100 transition-opacity line-clamp-3">
                        {tool.description}
                    </p>
                    
                    <div className="mt-auto opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2 border-b-2 border-blue-600 pb-1">
                        Launch Tool <MousePointerClick size={14} />
                    </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Active Tool Detail View */
        <div className="animate-fade-in-up">
            <div className="max-w-7xl mx-auto mb-8">
                <button 
                    onClick={() => setActiveToolId(null)}
                    className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-bold uppercase tracking-wide text-sm group py-2 px-4 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 w-fit"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Dashboard
                </button>
            </div>
            
            {activeTool.component}
        </div>
      )}
    </div>
  );
};

export default ToolsSection;