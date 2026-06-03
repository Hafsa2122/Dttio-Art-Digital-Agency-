import { motion } from "framer-motion";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-14 pb-10">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500"
      >
        {eyebrow}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif font-semibold text-6xl md:text-[8rem] leading-[0.92] tracking-[-0.06em] mt-4 text-black"
      >
        {title.split(" ").map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
            className="inline-block mr-3"
          >
            {w}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 max-w-xl text-[15px] font-medium leading-[1.4] tracking-[-0.02em] text-neutral-700"
      >
        {intro}
      </motion.p>
    </section>
  );
}
