import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";

const tools = [
  {
    name: "Prompt Lab",
    sub: "Composable prompt builder",
    desc: "Drag-and-drop primitives for crafting nuanced prompts across image and video models.",
    badge: "Live",
  },
  {
    name: "Render Cloud",
    sub: "GPU rendering on tap",
    desc: "Queue up batch renders against multiple models — collect them in a single moodboard.",
    badge: "Live",
  },
  {
    name: "Atlas",
    sub: "Visual reference search",
    desc: "Search a private library of 4M+ curated references using natural language.",
    badge: "Beta",
  },
  {
    name: "Looms",
    sub: "Generative storyboarding",
    desc: "Sequence shots, lock characters and explore narrative branches with one click.",
    badge: "Soon",
  },
  {
    name: "Print Engine",
    sub: "Editions & fulfilment",
    desc: "From signed editions to museum prints, shipped from our New York workshop.",
    badge: "Live",
  },
  {
    name: "Rights Desk",
    sub: "Licensing co-pilot",
    desc: "Track provenance, releases and rights across every generated asset.",
    badge: "Beta",
  },
];

export default function Tools() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Our Tools"
        title="Built in-house"
        intro="A small suite of tools we built for ourselves — and now share with selected studios and partners."
      />

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {tools.map((t, i) => (
            <Link to="/tools/detail" key={t.name} className="block">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-3xl border border-neutral-900/10 bg-white/60 p-8 hover:border-neutral-900 transition-colors ${
                i % 2 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">{t.sub}</div>
                  <h3 className="font-serif font-semibold text-4xl mt-2 tracking-[-0.05em] text-black">{t.name}</h3>
                </div>
                <span
                  className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full ${
                    t.badge === "Live"
                      ? "bg-emerald-100 text-emerald-700"
                      : t.badge === "Beta"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-neutral-200 text-neutral-700"
                  }`}
                >
                  {t.badge}
                </span>
              </div>
              <p className="mt-6 text-[14px] font-medium leading-[1.4] tracking-[-0.01em] text-neutral-600 max-w-sm">{t.desc}</p>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">tool {String(i + 1).padStart(2, "0")}</span>
                <span className="grid place-items-center w-10 h-10 rounded-full border border-neutral-900/20 group-hover:bg-neutral-900 group-hover:text-[#f3f1ec] transition-colors">
                  ↗
                </span>
              </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
