import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import { heroBalloon, heroGlass, heroSphere } from "../data/images";

const hours = [
  ["Mon — Wed", "11:00 — 19:00"],
  ["Thursday", "11:00 — 21:00"],
  ["Fri — Sat", "10:00 — 22:00"],
  ["Sunday", "Closed"],
];

export default function Visit() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Visit / Studio"
        title="Come to the studio"
        intro="Our New York gallery hosts a rotating program of AI-driven exhibitions. Walk-ins welcome, private viewings on request."
      />

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden aspect-[16/10]"
          >
            <img src={heroBalloon} className="w-full h-full object-cover" />
          </motion.div>

          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-500">Address</div>
              <p className="font-serif font-semibold text-3xl mt-2 leading-tight tracking-[-0.04em] text-black">
                132 W 25th Street<br />New York, NY 10001
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Hours</div>
              <ul className="divide-y divide-neutral-900/10 border-y border-neutral-900/10">
                {hours.map(([d, h]) => (
                  <li key={d} className="py-3 flex justify-between text-sm">
                    <span>{d}</span>
                    <span className="font-mono text-neutral-600">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-[#f3f1ec] px-5 py-3 text-sm hover:bg-amber-400 hover:text-neutral-900 transition-colors"
            >
              Get directions →
            </a>
          </div>
        </div>

        {/* Current exhibition */}
        <div className="mt-24">
          <h2 className="font-serif font-semibold text-4xl md:text-6xl tracking-[-0.05em] text-black">Currently on view</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {[
              { t: "Liquid Architectures", date: "Mar 14 — Jun 30", img: heroGlass },
              { t: "Algorithmic Gardens", date: "Apr 02 — Jul 12", img: heroSphere },
            ].map((ex, i) => (
              <motion.div
                key={ex.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-3xl overflow-hidden"
              >
                <div className="aspect-[4/3]">
                  <img src={ex.img} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 bg-white/60 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-semibold text-2xl tracking-[-0.04em] text-black">{ex.t}</h3>
                    <span className="text-xs font-mono text-neutral-500">{ex.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
