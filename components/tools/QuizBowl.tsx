import React, { useState } from 'react';
import { Trophy, AlertCircle, CheckCircle, RefreshCw, BookOpen, ChevronRight, ArrowLeft, BarChart, Database, Code, Users, Briefcase, DollarSign } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  questions: Question[];
}

const QUIZ_DATA: QuizCategory[] = [
  {
    id: 'app-dev',
    title: 'Business App Development',
    icon: <Code size={32} />,
    description: 'Test your knowledge on SDLC, Programming logic, and Web Technologies.',
    questions: [
      { id: 1, text: "What does IDE stand for in software development?", options: ["Integrated Development Environment", "Internal Data Exchange", "Internet Development Engine", "Interface Design Element"], correctAnswer: 0 },
      { id: 2, text: "Which loop structure is guaranteed to execute at least once?", options: ["For Loop", "While Loop", "Do-While Loop", "If-Else Statement"], correctAnswer: 2 },
      { id: 3, text: "In a 0-indexed array, what is the index of the first element?", options: ["1", "0", "-1", "A"], correctAnswer: 1 },
      { id: 4, text: "Which of these is a pillar of Object-Oriented Programming?", options: ["Compilation", "Encapsulation", "Interpretation", "Iteration"], correctAnswer: 1 },
      { id: 5, text: "What phase of the SDLC typically follows Development?", options: ["Planning", "Design", "Testing", "Maintenance"], correctAnswer: 2 },
      { id: 6, text: "Which HTML tag is used to create a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], correctAnswer: 1 },
      { id: 7, text: "Which keyword is used to declare a variable in modern JavaScript?", options: ["var", "dim", "let", "int"], correctAnswer: 2 },
      { id: 8, text: "What is Git primarily used for?", options: ["Database Management", "Version Control", "Graphic Design", "Network Security"], correctAnswer: 1 },
      { id: 9, text: "Which Agile framework uses 'Sprints'?", options: ["Waterfall", "Scrum", "Kanban", "Lean"], correctAnswer: 1 },
      { id: 10, text: "What is a 'Class' in programming?", options: ["A function", "A variable", "A blueprint for creating objects", "A database table"], correctAnswer: 2 },
    ]
  },
  {
    id: 'finance',
    title: 'Principles of Finance',
    icon: <DollarSign size={32} />,
    description: 'Questions on TVM, Financial Statements, and Risk Analysis.',
    questions: [
      { id: 1, text: "What is the formula for Net Income?", options: ["Assets - Liabilities", "Revenue - Expenses", "Cash + Receivables", "Equity - Debt"], correctAnswer: 1 },
      { id: 2, text: "What concept states that a dollar today is worth more than a dollar tomorrow?", options: ["Inflation Theory", "Time Value of Money", "Opportunity Cost", "Liquidity Preference"], correctAnswer: 1 },
      { id: 3, text: "Which asset is considered the most liquid?", options: ["Inventory", "Accounts Receivable", "Cash", "Real Estate"], correctAnswer: 2 },
      { id: 4, text: "Which metric is commonly used to measure risk in finance?", options: ["Mean", "Standard Deviation", "Mode", "Median"], correctAnswer: 1 },
      { id: 5, text: "A market characterized by rising prices is called a:", options: ["Bear Market", "Bull Market", "Stagnant Market", "Volatile Market"], correctAnswer: 1 },
      { id: 6, text: "What is the primary benefit of diversification?", options: ["Higher returns", "Reduced risk", "Lower taxes", "Faster growth"], correctAnswer: 1 },
      { id: 7, text: "In the accounting equation, Assets equal:", options: ["Liabilities + Owner's Equity", "Liabilities - Owner's Equity", "Revenue + Expenses", "Cash + Inventory"], correctAnswer: 0 },
      { id: 8, text: "A portion of profits paid to shareholders is called a:", options: ["Coupon", "Interest", "Dividend", "Retainer"], correctAnswer: 2 },
      { id: 9, text: "What does ROI stand for?", options: ["Rate of Inflation", "Return on Investment", "Risk of Investment", "Revenue on Income"], correctAnswer: 1 },
      { id: 10, text: "Which financial statement reports a company's financial position at a specific point in time?", options: ["Income Statement", "Statement of Cash Flows", "Balance Sheet", "Retained Earnings Statement"], correctAnswer: 2 },
    ]
  },
  {
    id: 'db-mgmt',
    title: 'Business Database Mgmt',
    icon: <Database size={32} />,
    description: 'SQL commands, Normalization, and ERD concepts.',
    questions: [
      { id: 1, text: "Which SQL command is used to retrieve data from a table?", options: ["GET", "SELECT", "FETCH", "PULL"], correctAnswer: 1 },
      { id: 2, text: "Which keyword removes duplicate records from a result set?", options: ["UNIQUE", "DISTINCT", "DIFFERENT", "SINGLE"], correctAnswer: 1 },
      { id: 3, text: "What uniquely identifies a record in a table?", options: ["Foreign Key", "Primary Key", "Index", "Variable"], correctAnswer: 1 },
      { id: 4, text: "A field that links to the primary key of another table is a:", options: ["Primary Key", "Foreign Key", "Connector", "Linker"], correctAnswer: 1 },
      { id: 5, text: "What does ERD stand for?", options: ["Entity Relationship Diagram", "Electronic Record Database", "Entity Row Data", "Efficient Relational Design"], correctAnswer: 0 },
      { id: 6, text: "The process of organizing data to reduce redundancy is called:", options: ["Indexing", "Normalization", "Serialization", "Optimization"], correctAnswer: 1 },
      { id: 7, text: "Which JOIN returns only records that have matching values in both tables?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "OUTER JOIN"], correctAnswer: 2 },
      { id: 8, text: "Which command is used to modify existing records?", options: ["CHANGE", "MODIFY", "UPDATE", "ALTER"], correctAnswer: 2 },
      { id: 9, text: "Which command removes a table and all its data from the database?", options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "ERASE TABLE"], correctAnswer: 1 },
      { id: 10, text: "What does the 'A' in ACID properties stand for?", options: ["Accuracy", "Atomicity", "Availability", "Authentication"], correctAnswer: 1 },
    ]
  },
  {
    id: 'stats',
    title: 'Business Statistics',
    icon: <BarChart size={32} />,
    description: 'Probability, Distributions, and Hypothesis Testing.',
    questions: [
      { id: 1, text: "Which measure represents the central value of a sorted dataset?", options: ["Mean", "Mode", "Median", "Range"], correctAnswer: 2 },
      { id: 2, text: "What is the arithmetic average of a dataset?", options: ["Mean", "Median", "Mode", "Variance"], correctAnswer: 0 },
      { id: 3, text: "Which value appears most frequently in a dataset?", options: ["Mean", "Median", "Mode", "Range"], correctAnswer: 2 },
      { id: 4, text: "Standard Deviation is a measure of:", options: ["Central Tendency", "Dispersion/Spread", "Frequency", "Correlation"], correctAnswer: 1 },
      { id: 5, text: "In hypothesis testing, a P-value less than 0.05 typically indicates:", options: ["Reject the null hypothesis", "Accept the null hypothesis", "The test is inconclusive", "The data is invalid"], correctAnswer: 0 },
      { id: 6, text: "Correlation coefficients range between:", options: ["0 and 1", "-1 and 1", "0 and 100", "-infinity and infinity"], correctAnswer: 1 },
      { id: 7, text: "The 'Bell Curve' refers to which distribution?", options: ["Binomial", "Poisson", "Normal", "Uniform"], correctAnswer: 2 },
      { id: 8, text: "A subset of a population selected for study is called a:", options: ["Group", "Sample", "Segment", "Variable"], correctAnswer: 1 },
      { id: 9, text: "A Type I error involves:", options: ["Rejecting a true null hypothesis", "Accepting a false null hypothesis", "Rejecting a false null hypothesis", "Calculation error"], correctAnswer: 0 },
      { id: 10, text: "Which method predicts the value of a dependent variable based on independent variables?", options: ["Correlation", "Regression Analysis", "Standardization", "Sampling"], correctAnswer: 1 },
    ]
  },
  {
    id: 'marketing',
    title: 'Principles of Marketing',
    icon: <Users size={32} />,
    description: 'The 4 Ps, SWOT, and Consumer Behavior.',
    questions: [
      { id: 1, text: "Which of the following is NOT one of the 4 Ps of Marketing?", options: ["Product", "Price", "Place", "Planning"], correctAnswer: 3 },
      { id: 2, text: "In SWOT analysis, what does the 'S' stand for?", options: ["Sales", "Strengths", "Strategy", "Services"], correctAnswer: 1 },
      { id: 3, text: "Dividing a market into distinct groups of buyers is called:", options: ["Positioning", "Segmentation", "Targeting", "Differentiation"], correctAnswer: 1 },
      { id: 4, text: "Which stage of the Product Life Cycle comes first?", options: ["Growth", "Maturity", "Introduction", "Decline"], correctAnswer: 2 },
      { id: 5, text: "Short-term incentives to encourage the purchase or sale of a product is:", options: ["Public Relations", "Sales Promotion", "Personal Selling", "Direct Marketing"], correctAnswer: 1 },
      { id: 6, text: "Any paid form of non-personal presentation and promotion of ideas is:", options: ["Advertising", "Sales Promotion", "Publicity", "Personal Selling"], correctAnswer: 0 },
      { id: 7, text: "The value of a brand name is referred to as:", options: ["Brand Loyalty", "Brand Equity", "Brand Recognition", "Brand Preference"], correctAnswer: 1 },
      { id: 8, text: "B2B stands for:", options: ["Business to Buyer", "Business to Business", "Buyer to Business", "Brand to Brand"], correctAnswer: 1 },
      { id: 9, text: "What is a specific group of consumers a company directs its marketing efforts towards?", options: ["Focus Group", "Target Market", "Sample Size", "Stakeholders"], correctAnswer: 1 },
      { id: 10, text: "What does CRM stand for?", options: ["Customer Retention Model", "Customer Relationship Management", "Consumer Research Method", "Corporate Resource Management"], correctAnswer: 1 },
    ]
  },
  {
    id: 'mgmt',
    title: 'Business Management: OB',
    icon: <Briefcase size={32} />,
    description: 'Leadership, Motivation, and Organizational Culture.',
    questions: [
      { id: 1, text: "Which need is at the bottom of Maslow's Hierarchy of Needs?", options: ["Safety", "Self-Actualization", "Physiological", "Esteem"], correctAnswer: 2 },
      { id: 2, text: "Which leadership style invites input from employees on all decisions?", options: ["Autocratic", "Democratic", "Laissez-faire", "Bureaucratic"], correctAnswer: 1 },
      { id: 3, text: "In SMART goals, what does the 'T' stand for?", options: ["Timely/Time-bound", "True", "Tested", "Technical"], correctAnswer: 0 },
      { id: 4, text: "The shared values, beliefs, and norms in an organization are its:", options: ["Strategy", "Structure", "Culture", "Policy"], correctAnswer: 2 },
      { id: 5, text: "Efficiency is doing things right; Effectiveness is doing:", options: ["Things fast", "The right things", "Things cheaply", "Things together"], correctAnswer: 1 },
      { id: 6, text: "The number of subordinates a manager can efficiently direct is the:", options: ["Chain of Command", "Span of Control", "Unity of Command", "Division of Labor"], correctAnswer: 1 },
      { id: 7, text: "Which organizational structure involves dual reporting relationships (e.g., to a functional and project manager)?", options: ["Functional", "Divisional", "Matrix", "Flat"], correctAnswer: 2 },
      { id: 8, text: "Motivation derived from the work itself (satisfaction) is:", options: ["Extrinsic", "Intrinsic", "Monetary", "External"], correctAnswer: 1 },
      { id: 9, text: "The tendency for group members to agree at all costs, avoiding conflict, is called:", options: ["Brainstorming", "Groupthink", "Team building", "Synergy"], correctAnswer: 1 },
      { id: 10, text: "Which is NOT a step in the basic decision-making process?", options: ["Identify the problem", "Generate alternatives", "Ignore data", "Evaluate results"], correctAnswer: 2 },
    ]
  }
];

const QuizBowl: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<QuizCategory | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleCategorySelect = (category: QuizCategory) => {
    setActiveCategory(category);
    resetQuizState();
  };

  const resetQuizState = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const handleBackToCategories = () => {
    setActiveCategory(null);
    resetQuizState();
  };

  const handleAnswerOptionClick = (index: number) => {
    if (selectedOption !== null || !activeCategory) return;

    setSelectedOption(index);
    const correct = index === activeCategory.questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (!activeCategory) return;
      
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < activeCategory.questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  // RENDER: Category Selection Grid
  if (!activeCategory) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Select a Subject</h2>
          <p className="text-slate-500">Choose a class category to test your knowledge.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUIZ_DATA.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category)}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all text-left group flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <div className="text-blue-600">
                    {category.icon}
                  </div>
                </div>
                <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{category.title}</h3>
              <p className="text-slate-500 text-sm mb-4 flex-grow">{category.description}</p>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">10 Questions</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // RENDER: Active Quiz Interface
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg border border-slate-200">
      {/* Header / Back Button */}
      <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-blue-50 rounded-lg hidden sm:block">
            <div className="text-blue-600">
              {activeCategory.icon}
            </div>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{activeCategory.title}</h2>
            <button 
              onClick={handleBackToCategories}
              className="text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center gap-1 mt-1 uppercase tracking-wide transition-colors"
            >
              <ArrowLeft size={12} /> Change Category
            </button>
          </div>
        </div>
      </div>

      {showScore ? (
        <div className="text-center py-8 animate-fade-in">
          <div className="mb-6 relative inline-block">
            <Trophy size={80} className="mx-auto text-yellow-400 drop-shadow-md" />
            <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold border-4 border-white ${score >= 7 ? 'bg-green-500' : 'bg-slate-400'}`}>
                {Math.round((score / activeCategory.questions.length) * 100)}%
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-slate-900 mb-2">Quiz Complete!</h3>
          <p className="text-slate-500 mb-8">
            You scored <span className="font-bold text-slate-900">{score}</span> out of {activeCategory.questions.length}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetQuizState}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-bold shadow-md"
            >
              <RefreshCw size={20} />
              Retry Quiz
            </button>
            <button
              onClick={handleBackToCategories}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-lg transition-colors font-bold shadow-sm"
            >
              <BookOpen size={20} />
              Choose Subject
            </button>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              <span>Question {currentQuestion + 1} of {activeCategory.questions.length}</span>
              <span>Score: {score}</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${((currentQuestion + 1) / activeCategory.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Text */}
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-snug min-h-[4rem]">
            {activeCategory.questions[currentQuestion].text}
          </h3>

          {/* Options Grid */}
          <div className="space-y-3">
            {activeCategory.questions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrectAnswer = index === activeCategory.questions[currentQuestion].correctAnswer;
              
              let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium relative overflow-hidden ";
              
              if (selectedOption === null) {
                // Default State
                buttonClass += "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 text-slate-700";
              } else if (isCorrectAnswer) {
                // Correct Answer State (Always show correct answer when reveal happens)
                buttonClass += "border-green-500 bg-green-50 text-green-800 shadow-sm z-10";
              } else if (isSelected && !isCorrectAnswer) {
                // Wrong Selection State
                buttonClass += "border-red-500 bg-red-50 text-red-800 shadow-sm z-10";
              } else {
                // Dim other answers
                buttonClass += "border-slate-100 bg-slate-50 text-slate-400 opacity-50";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(index)}
                  disabled={selectedOption !== null}
                  className={buttonClass}
                >
                  <div className="flex justify-between items-center relative z-10">
                    <span className="flex-grow pr-4">{option}</span>
                    {selectedOption !== null && isCorrectAnswer && <CheckCircle size={20} className="text-green-600 flex-shrink-0" />}
                    {isSelected && !isCorrectAnswer && <AlertCircle size={20} className="text-red-500 flex-shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Feedback Text Area */}
          <div className="mt-6 h-6 flex items-center justify-center text-sm font-bold">
             {selectedOption !== null && (
                 isCorrect 
                 ? <span className="text-green-600 flex items-center gap-1 animate-fade-in"><CheckCircle size={16}/> Correct!</span> 
                 : <span className="text-red-500 flex items-center gap-1 animate-fade-in"><AlertCircle size={16}/> Incorrect</span>
             )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizBowl;