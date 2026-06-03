import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { allArt } from "../data/images";

export default function PromptApp() {
  const [prompt, setPrompt] = useState("Beautiful high-end 3d render of abstract minimalist architecture, pastel colors, high resolution, clear focus, gallery style.");
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = () => {
    setGenerating(true);
    setResult(null);
    setTimeout(() => {
      setGenerating(false);
      setResult(allArt[0]); // Mock result
    }, 2000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-neutral-900 text-white flex flex-col font-sans">
        {/* Header */}
        <header className="h-14 border-b border-white/10 flex items-center px-6 justify-between bg-black/20">
          <div className="flex items-center gap-4">
            <Link to="/tools/detail" className="text-white/50 hover:text-white transition-colors">
              ← Exit
            </Link>
            <div className="h-4 w-px bg-white/20"></div>
            <div className="font-serif font-semibold tracking-tight text-lg">Prompt Lab</div>
            <span className="bg-emerald-500/20 text-emerald-400 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full">
              v2.4
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="text-white/50">Credits: <span className="text-white">1,240</span></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600"></div>
          </div>
        </header>

        {/* Workspace */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 border-r border-white/10 bg-black/10 flex flex-col">
            <div className="p-4 border-b border-white/10 text-xs font-bold uppercase tracking-widest text-white/50">
              Primitives Library
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              <div>
                <div className="text-xs text-white/40 mb-3 uppercase tracking-wider">Lighting</div>
                <div className="space-y-2">
                  {["Cinematic", "Studio", "Volumetric", "Sunrise"].map(t => (
                    <div key={t} className="px-3 py-2 text-sm bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer border border-white/5 transition-colors">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs text-white/40 mb-3 uppercase tracking-wider">Camera</div>
                <div className="space-y-2">
                  {["85mm Lens", "Drone View", "Macro", "Wide Angle"].map(t => (
                    <div key={t} className="px-3 py-2 text-sm bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer border border-white/5 transition-colors">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Area */}
          <div className="flex-1 flex flex-col bg-[#0a0a0a]">
            {/* Image Preview Area */}
            <div className="flex-1 p-8 flex flex-col items-center justify-center relative">
              <AnimatePresence mode="wait">
                {generating ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-12 h-12 border-4 border-white/10 border-t-amber-400 rounded-full animate-spin"></div>
                    <div className="text-sm text-white/50 font-mono animate-pulse">Running model sequence...</div>
                  </motion.div>
                ) : result ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  >
                    <img src={result} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="bg-black/50 hover:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
                        Upscale
                      </button>
                      <button className="bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-neutral-200 transition-colors">
                        Save to Library
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    className="text-white/20 font-mono text-sm border border-dashed border-white/10 w-full max-w-2xl aspect-[4/3] rounded-2xl flex items-center justify-center"
                  >
                    Awaiting Prompt Assembly...
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Prompt Console */}
            <div className="h-64 border-t border-white/10 bg-black/40 p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="text-xs font-bold uppercase tracking-widest text-white/50">Terminal / Editor</div>
                <div className="flex items-center gap-3">
                  <select className="bg-white/5 border border-white/10 rounded-md px-2 py-1 text-xs text-white/80 outline-none">
                    <option>Model: Dttio V4-Alpha</option>
                    <option>Model: Standard-Gen</option>
                  </select>
                </div>
              </div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-mono leading-relaxed outline-none focus:border-amber-500/50 transition-colors resize-none text-white/90"
              />
              <div className="flex justify-between items-center">
                <div className="text-xs font-mono text-white/30">Tokens: {prompt.split(" ").length * 2} / 150</div>
                <button
                  onClick={handleGenerate}
                  disabled={generating}
                  className="bg-amber-400 text-black px-8 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-amber-400/20 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {generating ? "Generating..." : "Queue Render ↵"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
