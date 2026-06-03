import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { allArt } from "../data/images";

export default function ToolDetail() {
  return (
    <PageTransition>
      <div className="bg-white pb-32">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10 pt-24 md:pt-32">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors mb-12"
          >
            ← Back to Tools
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-widest text-emerald-600">
              Internal Tool
            </span>
            <span className="bg-emerald-100 text-emerald-700 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full">
              Live
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif font-semibold text-5xl md:text-7xl leading-[0.95] tracking-[-0.05em] text-black mb-6"
          >
            Prompt Lab
          </motion.h1>
          
          <p className="text-[18px] font-medium leading-[1.5] text-neutral-600 mb-16 pb-8 border-b border-neutral-900/10">
            Drag-and-drop primitives for crafting nuanced prompts across image and video models. Built to standardize our studio's generation workflow.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-neutral-900 flex items-center justify-center p-8 relative"
          >
            {/* Mock UI for the tool */}
            <div className="w-full h-full border border-white/10 rounded-2xl bg-black/40 flex flex-col overflow-hidden backdrop-blur-md">
              <div className="h-12 border-b border-white/10 flex items-center px-4 gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                </div>
                <div className="text-xs font-mono text-white/40">prompt-lab.dttio.studio</div>
              </div>
              <div className="flex-1 grid grid-cols-[250px_1fr] divide-x divide-white/10">
                <div className="p-4 flex flex-col gap-3">
                  <div className="h-8 bg-white/5 rounded-md"></div>
                  <div className="h-8 bg-white/5 rounded-md"></div>
                  <div className="h-8 bg-white/10 rounded-md border border-white/10"></div>
                  <div className="h-8 bg-white/5 rounded-md"></div>
                </div>
                <div className="p-8 flex flex-col gap-6">
                  <div className="h-32 border border-dashed border-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-sm font-mono text-white/30">+ Drop modifiers here</span>
                  </div>
                  <div className="flex-1 rounded-xl bg-white/5 grid place-items-center">
                    <img src={allArt[1]} className="h-full w-full object-cover opacity-50 mix-blend-screen" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent flex items-end justify-center pb-12">
              <Link to="/tools/app" className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold shadow-2xl hover:scale-105 transition-transform">
                Launch Application ↗
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="max-w-[700px] mx-auto px-6 lg:px-10 prose prose-neutral prose-lg font-medium text-[17px] leading-[1.6] text-neutral-700">
          <h3 className="font-serif font-semibold text-3xl text-black mt-12 mb-6 tracking-[-0.03em]">Why we built it</h3>
          <p className="mb-6">
            When our studio scaled from single-prompt experiments to comprehensive commercial campaigns, we found that plain text editors weren't sufficient for managing complex generative architectures. Prompt Lab was built out of necessity.
          </p>
          <p className="mb-6">
            It allows our Prompt Architects to save exact weighting scales, camera angles, and rendering primitives as modular blocks. Instead of copy-pasting paragraphs of text, we can drag an "85mm lens" block next to a "sunrise lighting" block and instantly see the compositional math update.
          </p>
          
          <div className="bg-neutral-50 p-8 rounded-2xl my-10 border border-neutral-900/5">
            <h4 className="font-serif font-semibold text-xl text-black mb-4 tracking-tight">Key Features</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><span className="text-amber-500">◆</span> Component-based prompt assembly</li>
              <li className="flex gap-3"><span className="text-amber-500">◆</span> Real-time token math and weighting previews</li>
              <li className="flex gap-3"><span className="text-amber-500">◆</span> Integration directly into our Render Cloud queue</li>
              <li className="flex gap-3"><span className="text-amber-500">◆</span> Shared studio library of approved primitives</li>
            </ul>
          </div>
          
          <p>
            Currently, Prompt Lab is an internal tool, but we are slowly opening it up in a closed beta for selected partner studios. If you're interested in testing it out, please reach out via our contact page.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
