import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import { allArt } from "../data/images";

const articles = [
  {
    cat: "Essay",
    title: "Prompt as material: rethinking the brief",
    date: "Mar 28, 2026",
    read: "6 min",
  },
  {
    cat: "Interview",
    title: "Eliana Vance on slow generative practice",
    date: "Mar 12, 2026",
    read: "9 min",
  },
  {
    cat: "Press",
    title: "Dttio featured in It's Nice That's annual review",
    date: "Feb 22, 2026",
    read: "3 min",
  },
  {
    cat: "Project",
    title: "Liquid Architectures — behind the scenes",
    date: "Feb 02, 2026",
    read: "12 min",
  },
  {
    cat: "Notes",
    title: "On building a model that draws with restraint",
    date: "Jan 18, 2026",
    read: "7 min",
  },
];

export default function News() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <PageTransition>
      <PageHeader
        eyebrow="News & Media"
        title="Essays & dispatches"
        intro="Writings, interviews and press notes from the studio. Subscribe to our monthly letter."
      />

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Featured */}
        <Link to="/article">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-8 items-center group cursor-pointer"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={allArt[2]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-600">Featured · Essay</span>
            <h2 className="font-serif font-semibold text-4xl md:text-6xl mt-3 leading-[0.95] tracking-[-0.06em] text-black">
              Why every image now needs a story behind it
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-[1.4] tracking-[-0.02em] text-neutral-700 max-w-md">
              Generative tools have made making fast — but meaning is still slow.
              We argue for a more deliberate practice that treats prompts as
              ongoing conversations rather than queries.
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs font-mono text-neutral-500">
              <span>Apr 04, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
          </motion.article>
        </Link>

        {/* List */}
        <div className="mt-24 border-t border-neutral-900/10">
          {articles.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to="/article"
                className="group grid grid-cols-12 gap-4 items-center py-6 border-b border-neutral-900/10 hover:bg-white/40 px-2 -mx-2 transition-colors"
              >
                <div className="col-span-2 md:col-span-1 text-xs uppercase tracking-widest text-neutral-500">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-10 md:col-span-2 text-xs uppercase tracking-widest text-amber-600">
                  {a.cat}
                </div>
                <div className="col-span-12 md:col-span-6 font-serif font-semibold text-2xl md:text-3xl tracking-[-0.04em] group-hover:translate-x-2 transition-transform">
                  {a.title}
                </div>
                <div className="col-span-6 md:col-span-2 text-xs font-mono text-neutral-500">
                  {a.date}
                </div>
                <div className="col-span-6 md:col-span-1 text-right text-xs text-neutral-500">
                  {a.read} ↗
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-24 rounded-3xl bg-neutral-900 text-[#f3f1ec] p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <h3 className="font-serif font-semibold text-4xl md:text-5xl tracking-[-0.05em] !text-white">
              Get monthly letters from the studio.
            </h3>
            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="flex items-center gap-3 text-amber-400 font-bold"
              >
                <span className="text-xl">✓</span> Thanks for subscribing!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  required
                  placeholder="you@studio.com"
                  className="flex-1 bg-transparent border-b border-white/30 focus:border-amber-400 outline-none py-3 text-base"
                />
                <button type="submit" className="rounded-full bg-amber-400 text-neutral-900 px-6 py-3 text-sm font-medium hover:bg-amber-300 transition-colors">
                  Subscribe →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
