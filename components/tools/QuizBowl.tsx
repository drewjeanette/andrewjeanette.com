import React, { useState } from 'react';
import { AlertCircle, CheckCircle, RefreshCw, BookOpen, ChevronRight, ArrowLeft, BarChart, Database, Code, Users, Briefcase, DollarSign } from 'lucide-react';

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
    icon: <Code size={18} />,
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
    icon: <DollarSign size={18} />,
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
    icon: <Database size={18} />,
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
    icon: <BarChart size={18} />,
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
    icon: <Users size={18} />,
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
    icon: <Briefcase size={18} />,
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
      <div>
        <header className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">Quiz Bowl</p>
          <h1 className="text-3xl font-semibold tracking-tightest text-fg md:text-[2.75rem] md:leading-[1.1]">Choose a subject</h1>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">Ten questions per category, with instant feedback and live scoring.</p>
        </header>

        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {QUIZ_DATA.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category)}
              className="group flex h-full flex-col bg-canvas p-6 text-left transition-colors hover:bg-surface"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors group-hover:text-fg">
                  {category.icon}
                </span>
                <ChevronRight size={16} className="text-subtle transition-all group-hover:translate-x-0.5 group-hover:text-fg" />
              </div>
              <h2 className="text-[15px] font-medium text-fg">{category.title}</h2>
              <p className="mt-1.5 flex-grow text-sm leading-relaxed text-muted">{category.description}</p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">{category.questions.length} questions</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const total = activeCategory.questions.length;
  const question = activeCategory.questions[currentQuestion];

  // RENDER: Active Quiz Interface
  return (
    <div className="panel mx-auto max-w-2xl overflow-hidden">
      <div className="flex items-center justify-between gap-4 border-b border-line bg-surface px-6 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-canvas text-muted sm:flex">
            {activeCategory.icon}
          </span>
          <h2 className="truncate text-[15px] font-medium text-fg">{activeCategory.title}</h2>
        </div>
        <button
          onClick={handleBackToCategories}
          className="inline-flex shrink-0 items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft size={14} /> Subjects
        </button>
      </div>

      {showScore ? (
        <div className="animate-fade-in px-6 py-14 text-center">
          <p className="eyebrow">Result</p>
          <p className="mt-4 text-6xl font-semibold tracking-tightest text-fg">
            {score}<span className="text-subtle">/{total}</span>
          </p>
          <p className="mt-3 text-muted">
            {Math.round((score / total) * 100)}% correct{score >= 7 ? ' — nicely done.' : '. Give it another run.'}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <button onClick={resetQuizState} className="btn-primary">
              <RefreshCw size={15} />
              Retry quiz
            </button>
            <button onClick={handleBackToCategories} className="btn-secondary">
              <BookOpen size={15} />
              Choose subject
            </button>
          </div>
        </div>
      ) : (
        <div key={currentQuestion} className="animate-fade-in px-6 py-8 md:px-8">
          {/* Progress */}
          <div className="mb-8">
            <div className="mb-3 flex justify-between font-mono text-xs text-subtle">
              <span>Question {currentQuestion + 1} / {total}</span>
              <span>Score {score}</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-raised">
              <div
                className="h-full rounded-full bg-fg transition-all duration-500 ease-out"
                style={{ width: `${((currentQuestion + 1) / total) * 100}%` }}
              />
            </div>
          </div>

          <h3 className="mb-8 min-h-[4rem] text-xl font-medium leading-snug tracking-tight text-fg md:text-2xl">
            {question.text}
          </h3>

          <div className="space-y-2">
            {question.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrectAnswer = index === question.correctAnswer;

              let buttonClass = "flex w-full items-center gap-4 rounded-lg border px-4 py-3.5 text-left text-[15px] transition-colors duration-150 ";

              if (selectedOption === null) {
                buttonClass += "border-line bg-canvas text-fg hover:border-line-strong hover:bg-surface";
              } else if (isCorrectAnswer) {
                // Always reveal the correct answer once a choice is made
                buttonClass += "border-good/50 bg-good/10 text-fg";
              } else if (isSelected) {
                buttonClass += "border-bad/50 bg-bad/10 text-fg";
              } else {
                buttonClass += "border-line bg-canvas text-subtle";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(index)}
                  disabled={selectedOption !== null}
                  className={buttonClass}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-line font-mono text-xs text-subtle">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-grow">{option}</span>
                  {selectedOption !== null && isCorrectAnswer && <CheckCircle size={18} className="shrink-0 text-good" />}
                  {isSelected && !isCorrectAnswer && <AlertCircle size={18} className="shrink-0 text-bad" />}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex h-6 items-center justify-center text-sm">
            {selectedOption !== null && (
              isCorrect
                ? <span className="animate-fade-in text-good">Correct</span>
                : <span className="animate-fade-in text-bad">Incorrect</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizBowl;
