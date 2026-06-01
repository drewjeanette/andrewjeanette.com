import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Calculator } from 'lucide-react';

const BreakEvenCalc: React.FC = () => {
  const [fixedCosts, setFixedCosts] = useState<number>(5000);
  const [pricePerUnit, setPricePerUnit] = useState<number>(50);
  const [variableCostPerUnit, setVariableCostPerUnit] = useState<number>(25);

  const breakEvenPoint = useMemo(() => {
    const contributionMargin = pricePerUnit - variableCostPerUnit;
    if (contributionMargin <= 0) return Infinity;
    return Math.ceil(fixedCosts / contributionMargin);
  }, [fixedCosts, pricePerUnit, variableCostPerUnit]);

  const chartData = useMemo(() => {
    const data = [];
    const maxUnits = breakEvenPoint === Infinity ? 100 : Math.max(breakEvenPoint * 2, 50);
    const step = Math.max(1, Math.floor(maxUnits / 20));

    for (let units = 0; units <= maxUnits; units += step) {
      data.push({
        units,
        totalCost: fixedCosts + (variableCostPerUnit * units),
        revenue: pricePerUnit * units
      });
    }
    return data;
  }, [fixedCosts, pricePerUnit, variableCostPerUnit, breakEvenPoint]);

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Controls */}
      <div className="bg-white p-8 rounded-xl border border-slate-200 h-fit shadow-md">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-50 rounded-lg">
                <Calculator className="text-blue-600" size={24}/>
            </div>
            <h3 className="font-bold text-xl text-slate-900">Parameters</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">Fixed Costs ($)</label>
            <input
                type="number"
                value={fixedCosts}
                onChange={(e) => setFixedCosts(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
           <div>
            <label className="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">Price per Unit ($)</label>
            <input
                type="number"
                value={pricePerUnit}
                onChange={(e) => setPricePerUnit(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
           <div>
            <label className="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">Variable Cost/Unit ($)</label>
            <input
                type="number"
                value={variableCostPerUnit}
                onChange={(e) => setVariableCostPerUnit(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100">
             <h4 className="font-bold text-slate-900 mb-2">Break-Even Point</h4>
             {breakEvenPoint === Infinity ? (
                 <p className="text-red-500 font-medium">Never (Loss per unit)</p>
             ) : (
                 <div className="text-3xl font-extrabold text-blue-600">
                     {breakEvenPoint.toLocaleString()} <span className="text-base font-normal text-slate-500">units</span>
                 </div>
             )}
             {breakEvenPoint !== Infinity && (
                 <p className="text-sm text-slate-500 mt-2">
                     You need to sell {breakEvenPoint} units to cover your costs.
                 </p>
             )}
        </div>
      </div>

      {/* Chart */}
      <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-slate-200 shadow-md flex flex-col">
        <h3 className="font-bold text-xl text-slate-900 mb-6">Cost vs Revenue Analysis</h3>
        <div className="flex-grow min-h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                        dataKey="units" 
                        label={{ value: 'Units Sold', position: 'insideBottomRight', offset: -10 }} 
                        stroke="#64748b"
                        tick={{fill: '#64748b'}}
                    />
                    <YAxis 
                        label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }} 
                        stroke="#64748b"
                        tick={{fill: '#64748b'}}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip 
                        formatter={(value: number) => `$${value.toLocaleString()}`}
                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', color: '#1e293b' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="totalCost" name="Total Cost" stroke="#ef4444" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#10b981" strokeWidth={2} dot={false} />
                    {breakEvenPoint !== Infinity && (
                         <ReferenceLine x={breakEvenPoint} stroke="#3b82f6" strokeDasharray="3 3" label="Break Even" />
                    )}
                </LineChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BreakEvenCalc;