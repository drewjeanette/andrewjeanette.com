import React, { useState, useEffect } from 'react';
import { DollarSign, PieChart as PieIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as ReTooltip, Legend } from 'recharts';

const SalaryEstimator: React.FC = () => {
  const [inputType, setInputType] = useState<'hourly' | 'annual'>('annual');
  const [amount, setAmount] = useState<number>(65000);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  
  // Results
  const [annualGross, setAnnualGross] = useState(0);
  const [monthlyGross, setMonthlyGross] = useState(0);
  const [estimatedTax, setEstimatedTax] = useState(0);
  const [netPay, setNetPay] = useState(0);

  // Simple tax bracket estimation
  const TAX_RATE = 0.22; 

  useEffect(() => {
    let gross = 0;
    if (inputType === 'annual') {
      gross = amount;
    } else {
      gross = amount * hoursPerWeek * 52;
    }

    const tax = gross * TAX_RATE;
    const net = gross - tax;

    setAnnualGross(gross);
    setMonthlyGross(gross / 12);
    setEstimatedTax(tax);
    setNetPay(net);
  }, [amount, inputType, hoursPerWeek]);

  const pieData = [
    { name: 'Net Pay', value: netPay },
    { name: 'Estimated Tax', value: estimatedTax },
  ];
  const COLORS = ['#10B981', '#3B82F6']; // Green for pay, Blue for tax

  return (
    <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-lg border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-50 rounded-full border border-blue-100">
                <DollarSign className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Salary Estimator</h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
              <button
                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${inputType === 'annual' ? 'bg-white shadow text-blue-600 border border-slate-200' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
                onClick={() => setInputType('annual')}
              >
                Annual Salary
              </button>
              <button
                 className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${inputType === 'hourly' ? 'bg-white shadow text-blue-600 border border-slate-200' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
                 onClick={() => setInputType('hourly')}
              >
                Hourly Rate
              </button>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">
                {inputType === 'annual' ? 'Annual Amount ($)' : 'Hourly Rate ($)'}
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
              />
            </div>

            {inputType === 'hourly' && (
              <div>
                <label className="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">Hours per Week</label>
                <input
                  type="number"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
                />
              </div>
            )}

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
              <h4 className="font-bold text-blue-600 mb-4 uppercase tracking-widest text-xs">Breakdown (Estimated)</h4>
              <div className="space-y-3 text-base">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Annual Gross:</span>
                  <span className="font-bold text-slate-900">${annualGross.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Monthly Gross:</span>
                  <span className="font-medium text-slate-900">${monthlyGross.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                 <div className="flex justify-between text-slate-500">
                  <span>Est. Taxes (~22%):</span>
                  <span className="text-red-500">-${estimatedTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between text-xl font-extrabold text-green-600 pt-3 border-t border-slate-200 mt-2">
                  <span>Annual Net Pay:</span>
                  <span>${netPay.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-3">
                <PieIcon size={24} className="text-blue-500" /> Distribution
            </h3>
            <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={110}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                        <ReTooltip 
                            formatter={(value: number) => `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
                            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', color: '#1e293b', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                            itemStyle={{ color: '#1e293b' }}
                        />
                        <Legend verticalAlign="bottom" height={36} iconType="circle"/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-400 text-center max-w-xs mt-4 leading-relaxed">
                *Estimates only. Actual taxes vary based on location and filing status.
            </p>
        </div>
      </div>
    </div>
  );
};

export default SalaryEstimator;