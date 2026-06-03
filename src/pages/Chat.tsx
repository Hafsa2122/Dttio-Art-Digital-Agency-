import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";

const interests = ["Editorial", "Brand", "Exhibition", "Print Edition", "Tool Licensing", "Something else"];

export default function Chat() {
  const [sent, setSent] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (i: string) =>
    setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Let's Chat 👋"
        title="Start a project"
        intro="Tell us a little about what you're imagining. We reply within two working days."
      />

      <section className="max-w-[1100px] mx-auto px-6 lg:px-10">
        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl bg-neutral-900 text-[#f3f1ec] p-12 text-center"
          >
            <div className="font-serif text-5xl">Thank you ✷</div>
            <p className="mt-4 text-neutral-300">
              Your note has landed in the studio inbox. Eliana or Theo will be in touch shortly.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-12"
          >
            <Field label="01 — Your name" placeholder="Ada Lovelace" />
            <Field label="02 — Email" placeholder="you@studio.com" type="email" />

            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-4">
                03 — I'm interested in
              </label>
              <div className="flex flex-wrap gap-3">
                {interests.map((i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggle(i)}
                    className={`rounded-full px-5 py-2 text-sm border transition-colors ${
                      picked.includes(i)
                        ? "bg-neutral-900 text-[#f3f1ec] border-neutral-900"
                        : "border-neutral-900/20 hover:border-neutral-900"
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-3">
                04 — Tell us more
              </label>
              <textarea
                rows={5}
                placeholder="A few sentences about scope, audience, deadline…"
                className="w-full bg-transparent border-b border-neutral-900/30 focus:border-neutral-900 outline-none py-3 text-lg resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <p className="text-xs text-neutral-500">
                By submitting you agree to our friendly privacy policy.
              </p>
              <button
                type="submit"
                className="rounded-full bg-neutral-900 text-[#f3f1ec] px-7 py-3.5 text-sm hover:bg-amber-400 hover:text-neutral-900 transition-colors"
              >
                Send the brief →
              </button>
            </div>
          </form>
        )}
      </section>
    </PageTransition>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-3">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-neutral-900/30 focus:border-neutral-900 outline-none py-3 text-xl"
      />
    </div>
  );
}
