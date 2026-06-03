import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import { expertiseImg } from "../data/images";

function AnimatedCounter({ value, prefix = "", suffix = "", padStart = 0 }: { value: number, prefix?: string, suffix?: string, padStart?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    let val = Math.round(latest).toString();
    if (padStart > 0) val = val.padStart(padStart, "0");
    return prefix + val + suffix;
  });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, motionValue, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { v: 8, padStart: 2, suffix: "", l: "Years crafting" },
  { v: 240, padStart: 0, suffix: "+", l: "Projects shipped" },
  { v: 36, padStart: 0, suffix: "", l: "Awards & nods" },
  { v: 19, padStart: 0, suffix: "", l: "Studio members" },
];

const team = [
  { name: "Eliana Vance", role: "Creative Director", img: "/team_eliana.png" },
  { name: "Theo Kapoor", role: "Prompt Architect", img: "/team_theo.png" },
  { name: "Mira Okafor", role: "Art Director", img: "/team_mira.png" },
  { name: "Hiro Tanaka", role: "Lead Engineer", img: "/team_hiro.png" },
];

export default function About() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="About / Studio"
        title="A studio for digital art"
        intro="We are Dttio — a small, opinionated studio combining hand-craft, code and generative AI to make art that travels far beyond the screen."
      />

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden aspect-[4/5]"
          >
            <img src={expertiseImg} className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <p className="font-serif font-semibold text-3xl md:text-5xl leading-tight tracking-[-0.04em] text-black">
              We work with curious brands, museums and independent artists.
            </p>
            <p className="mt-6 text-[15px] font-medium leading-[1.4] tracking-[-0.02em] text-neutral-700 max-w-md">
              Founded in 2018, we've collaborated with cultural institutions and
              fashion houses across three continents. Our process is equal parts
              research, prompt engineering and craft.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-neutral-900/10 py-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="font-serif font-semibold text-6xl tracking-[-0.05em] text-black">
                <AnimatedCounter value={s.v} padStart={s.padStart} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-neutral-500">{s.l}</div>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <div className="mt-24">
          <h2 className="font-serif font-semibold text-4xl md:text-6xl tracking-[-0.05em] text-black">The People</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="rounded-3xl overflow-hidden aspect-[3/4]">
                  <img
                    src={p.img}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="mt-3">
                  <div className="font-serif text-xl">{p.name}</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-widest">{p.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
