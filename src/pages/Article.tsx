import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { allArt } from "../data/images";

export default function Article() {
  return (
    <PageTransition>
      <article className="bg-white pb-32">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10 pt-24 md:pt-32">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors mb-12"
          >
            ← Back to News
          </Link>

          <div className="text-xs uppercase tracking-widest text-amber-600 mb-6">
            Interview
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif font-semibold text-5xl md:text-7xl leading-[0.95] tracking-[-0.05em] text-black mb-8"
          >
            Eliana Vance on slow generative practice
          </motion.h1>

          <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 mb-16 pb-8 border-b border-neutral-900/10">
            <span>Mar 12, 2026</span>
            <span>·</span>
            <span>9 min read</span>
            <span>·</span>
            <span>By Dttio Editorial</span>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-neutral-100"
          >
            <img
              src={allArt[0]}
              alt="Article hero"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="max-w-[700px] mx-auto px-6 lg:px-10 prose prose-neutral prose-lg font-medium text-[17px] leading-[1.6] text-neutral-700">
          <p className="lead text-2xl font-serif text-black leading-[1.4] mb-10">
            "We treat prompts not as queries, but as ongoing conversations. It's about establishing a material relationship with the latent space."
          </p>
          <p className="mb-6">
            In our latest studio dispatch, we sat down with our Creative Director to discuss the evolving role of the artist in an age where generation is instant, but meaning requires time. The prevailing industry narrative often emphasizes speed — the ability to conjure an image in seconds. But what happens when we slow down the process?
          </p>
          <p className="mb-6">
            When you begin to treat the AI as a collaborator rather than a vending machine, the resulting images possess a different kind of gravity. They stop being mere aesthetic outputs and become records of a dialogue.
          </p>
          
          <h3 className="font-serif font-semibold text-3xl text-black mt-12 mb-6 tracking-[-0.03em]">The Materiality of Text</h3>
          <p className="mb-6">
            Words have weight. A single adjective can fundamentally alter the physics of a generated scene. We spend hours refining our vocabularies, studying architectural terminology, photographic techniques, and historical art movements. This isn't just about getting better results; it's about expanding our palette.
          </p>
          
          <div className="my-16 grid grid-cols-2 gap-6">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
               <img src={allArt[3]} alt="Detail 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 mt-12">
               <img src={allArt[4]} alt="Detail 2" className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="mb-6">
            As we move forward, the challenge isn't creating the image — it's curating the intent behind it. The artists who will stand out in this new era are those who can articulate a vision so precise and thoughtful that the machine has no choice but to respond with something extraordinary.
          </p>
        </div>
      </article>
    </PageTransition>
  );
}
