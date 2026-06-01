import React, { useState, useRef } from 'react';
import { Upload, Palette, Type, MousePointerClick, RefreshCw, Image as ImageIcon, X, Copy, Check } from 'lucide-react';

interface ColorPalette {
  name: string;
  colors: string[];
  description: string;
}

interface FontPairing {
  heading: string;
  body: string;
  style: string;
}

interface BrandKit {
  palettes: ColorPalette[];
  fonts: FontPairing;
  borderRadius: string;
}

const BrandPalette: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<BrandKit | null>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setResult(null);
    }
  };

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const handleGenerate = () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);

    // Simulate AI Processing
    setTimeout(() => {
      setResult({
        palettes: [
          {
            name: "Professional Trust",
            colors: ["#0F172A", "#334155", "#475569", "#94A3B8", "#F1F5F9"],
            description: "Deep blues and slates conveying stability and authority."
          },
          {
            name: "Vibrant Energy",
            colors: ["#4F46E5", "#818CF8", "#C7D2FE", "#F59E0B", "#FFFBEB"],
            description: "High contrast accents suitable for tech startups."
          },
          {
            name: "Modern Clean",
            colors: ["#18181B", "#27272A", "#52525B", "#A1A1AA", "#FFFFFF"],
            description: "Minimalist monochrome scale for high-end aesthetics."
          },
          {
            name: "Nature & Growth",
            colors: ["#064E3B", "#059669", "#34D399", "#A7F3D0", "#ECFDF5"],
            description: "Organic greens perfect for health or non-profits."
          },
          {
            name: "Warm & Welcoming",
            colors: ["#7C2D12", "#EA580C", "#FB923C", "#FDBA74", "#FFF7ED"],
            description: "Inviting earth tones for community-focused brands."
          }
        ],
        fonts: {
            heading: "Inter",
            body: "Roboto",
            style: "Clean Sans-Serif"
        },
        borderRadius: "0.5rem" // Rounded-lg
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleReset = () => {
    setSelectedImage(null);
    setResult(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // View 1: Upload
  if (!selectedImage) {
    return (
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-200">
        <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                <Palette className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Brand Palette Creator</h2>
            <p className="text-slate-500 mt-2">Upload a logo to instantly generate 5 matching color schemes and font pairings.</p>
        </div>

        <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:bg-slate-50 transition-colors cursor-pointer group"
        >
            <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden" 
            />
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <ImageIcon className="text-slate-400 group-hover:text-blue-500" size={32} />
            </div>
            <p className="text-xl font-bold text-slate-900">Upload Logo</p>
            <p className="text-slate-500">PNG, JPG, or SVG</p>
        </div>
      </div>
    );
  }

  // View 2: Preview & Analyze
  if (!result) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center">
        <div className="mb-8 flex justify-center relative">
             <img src={selectedImage} alt="Logo Preview" className="h-32 object-contain" />
             <button onClick={handleReset} className="absolute -top-2 -right-2 bg-slate-200 hover:bg-red-100 text-slate-500 hover:text-red-500 p-1 rounded-full"><X size={16}/></button>
        </div>
        
        {isAnalyzing ? (
            <div className="space-y-4">
                <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
                <h3 className="text-xl font-bold text-slate-900">Analyzing Brand Colors...</h3>
                <p className="text-slate-500">Extracting dominant hues and generating complementary harmonies.</p>
            </div>
        ) : (
            <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to Generate</h3>
                <p className="text-slate-500 mb-8">We will create 5 distinct palettes based on this image.</p>
                <button 
                    onClick={handleGenerate}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
                >
                    <Palette size={20} /> Generate Brand Kit
                </button>
            </div>
        )}
      </div>
    );
  }

  // View 3: Results
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-6">
            <img src={selectedImage} alt="Logo" className="h-16 w-16 object-contain bg-slate-50 rounded-lg p-2 border border-slate-100" />
            <div>
                <h2 className="text-2xl font-bold text-slate-900">Your Brand Kit</h2>
                <p className="text-slate-500 text-sm">Generated based on your logo's color profile.</p>
            </div>
        </div>
        <button onClick={handleReset} className="mt-4 md:mt-0 flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-sm uppercase tracking-wide">
            <RefreshCw size={16} /> New Upload
        </button>
      </div>

      {/* Color Palettes */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Palette className="text-blue-600" /> Suggested Palettes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.palettes.map((palette, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-32 flex">
                        {palette.colors.map((color) => (
                            <div 
                                key={color} 
                                className="h-full flex-1 group relative cursor-pointer" 
                                style={{ backgroundColor: color }}
                                onClick={() => copyToClipboard(color)}
                            >
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                    <Copy className="text-white drop-shadow-md" size={16} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-5">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-slate-900">{palette.name}</h4>
                            {copiedColor && palette.colors.includes(copiedColor) && (
                                <span className="text-xs text-green-600 font-bold flex items-center gap-1"><Check size={12}/> Copied</span>
                            )}
                        </div>
                        <p className="text-xs text-slate-500 mb-4">{palette.description}</p>
                        <div className="flex gap-2">
                            {palette.colors.map(color => (
                                <span key={color} className="text-[10px] uppercase font-mono text-slate-400">{color}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Typography & UI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Typography */}
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Type className="text-blue-600" /> Typography Pairing
            </h3>
            <div className="space-y-6">
                <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Primary / Headings</span>
                    <p className="text-4xl text-slate-900 mt-2" style={{ fontFamily: 'sans-serif', fontWeight: 800 }}>
                        {result.fonts.heading}
                    </p>
                    <p className="text-slate-500 mt-1">Modern, clean, and highly legible.</p>
                </div>
                <div className="border-t border-slate-100 pt-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Secondary / Body</span>
                    <p className="text-lg text-slate-700 mt-2 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                        The quick brown fox jumps over the lazy dog. {result.fonts.body} is optimized for readability at small sizes, making it perfect for long-form content.
                    </p>
                </div>
            </div>
        </div>

        {/* UI Elements */}
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <MousePointerClick className="text-blue-600" /> UI Elements
            </h3>
            <div className="space-y-8">
                <div>
                    <p className="text-sm text-slate-500 mb-3">Primary Action</p>
                    <button 
                        className="px-6 py-3 font-bold text-white shadow-lg transition-transform active:scale-95"
                        style={{ backgroundColor: result.palettes[1].colors[0], borderRadius: result.borderRadius }}
                    >
                        Get Started
                    </button>
                </div>
                <div className="flex gap-4">
                     <div>
                        <p className="text-sm text-slate-500 mb-3">Secondary</p>
                        <button 
                            className="px-6 py-3 font-bold border transition-colors"
                            style={{ 
                                borderColor: result.palettes[1].colors[0], 
                                color: result.palettes[1].colors[0],
                                borderRadius: result.borderRadius 
                            }}
                        >
                            Learn More
                        </button>
                    </div>
                     <div>
                        <p className="text-sm text-slate-500 mb-3">Ghost</p>
                        <button 
                            className="px-6 py-3 font-bold hover:bg-slate-50 transition-colors"
                            style={{ 
                                color: result.palettes[1].colors[1],
                                borderRadius: result.borderRadius 
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPalette;
