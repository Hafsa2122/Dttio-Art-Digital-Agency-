import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import {
  expertiseImg,
  expressions,
  heroBalloon,
  heroGlass,
  heroSphere,
  heroWheel,
  moods,
  works,
} from "../data/images";

const titleEase = [0.22, 1, 0.36, 1] as const;

const categories = [
  { name: "Nature Images", count: "165" },
  { name: "AI Images", count: "120", active: true },
  { name: "Hand Draw", count: "84" },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="bg-white pb-10">
        <HeroCopy />
        <ExactZigZagGallery />
        <DigitalExpertise />
        <RecentWorks />
        <OurExpression />
      </div>
    </PageTransition>
  );
}

function HeroCopy() {
  return (
    <section className="mx-auto max-w-[1380px] px-5 pb-[30px] pt-[60px] md:px-10 md:pt-[100px] overflow-hidden">
      <div className="relative w-full max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Top Row */}
        <div className="relative flex justify-center w-full">
          <div className="relative inline-block">
            <h1 className="font-serif text-[15vw] xl:text-[230px] leading-[0.9] tracking-[-0.03em] text-black whitespace-nowrap">
              <motion.span
                className="block"
                initial={{ y: "40%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.95, ease: titleEase }}
              >
                Art Digital
              </motion.span>
            </h1>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: titleEase }}
              className="absolute right-[-140px] top-[45%] -translate-y-1/2 hidden md:block text-left text-[14px] md:text-[15px] font-sans font-semibold leading-[1.3] text-black tracking-normal"
            >
              Based on<br />New York
            </motion.div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="relative flex justify-center w-full mt-[10px] md:mt-[20px]">
          <div className="relative inline-block ml-0 md:ml-[15%]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: titleEase }}
              className="absolute left-[-260px] top-[55%] -translate-y-1/2 hidden md:block text-left text-[14px] md:text-[15px] font-sans font-semibold leading-[1.4] text-black tracking-normal"
            >
              We are specialised in<br />
              prompt for generating<br />
              AI Images
            </motion.div>
            <h1 className="font-serif text-[15vw] xl:text-[230px] leading-[0.9] tracking-[-0.03em] text-black whitespace-nowrap">
              <motion.span
                className="block"
                initial={{ y: "40%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.95, delay: 0.12, ease: titleEase }}
              >
                <span className="font-light italic mr-[0.05em]">/</span> Agency
              </motion.span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExactZigZagGallery() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 md:px-7">
      <div className="relative grid grid-cols-12 gap-x-[12px] gap-y-[10px] md:gap-x-[24px] md:gap-y-[14px]">
        <motion.button
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.45, ease: titleEase }}
          onClick={() => document.getElementById("digital-expertise")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute right-0 top-0 z-20 hidden items-center gap-[5px] rounded-full bg-black px-[10px] py-[5px] text-[10px] font-semibold leading-none tracking-[-0.03em] text-white md:inline-flex cursor-pointer"
        >
          Scroll down
          <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-black text-white ring-1 ring-white/35">
            ↓
          </span>
        </motion.button>

        <ImageTile
          src={heroSphere}
          alt="Floating beige sphere above desert sand"
          className="col-span-6 aspect-[0.85] rounded-[42px] md:col-span-4 md:rounded-[64px]"
          delay={0.05}
        />

        <ImageTile
          src={heroWheel}
          alt="Metallic circular digital structure in desert"
          className="col-span-6 aspect-[0.85] rounded-[42px] md:col-span-4 md:col-start-5 md:rounded-[64px]"
          delay={0.13}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18, ease: titleEase }}
          className="col-span-12 flex flex-row justify-between gap-3 py-3 md:col-span-3 md:col-start-10 md:row-start-1 md:flex-col md:self-center md:py-0 md:pl-[10px]"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              className={`group flex items-start gap-[10px] text-left transition-opacity ${category.active ? "opacity-100" : "opacity-45 hover:opacity-80"
                }`}
            >
              {category.active ? (
                <motion.span
                  layoutId="active-category-arrow"
                  className="mt-[6px] text-[19px] font-semibold leading-none text-black md:text-[23px]"
                >
                  →
                </motion.span>
              ) : (
                <span className="hidden w-[23px] md:block" />
              )}
              <span className="font-sans text-[13px] font-semibold leading-none tracking-[-0.05em] text-black md:text-[20px]">
                {category.name}
                <sup className="ml-[4px] align-super font-sans text-[8px] font-bold tracking-[-0.04em] md:text-[9px]">
                  ({category.count})
                </sup>
              </span>
            </button>
          ))}
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: titleEase }}
          className="col-span-12 flex flex-col justify-center pb-4 pt-8 md:col-span-3 md:row-start-2 md:min-h-[410px] md:pt-0"
        >
          <p className="max-w-[250px] text-[14px] font-semibold leading-[1.35] tracking-[-0.055em] text-black md:text-[17px]">
            Whether you're an emerging<br />
            artist or an established creator,<br />
            we offer tailored solutions that<br />
            amplify your reach.
          </p>
          <Link
            to="/shop"
            className="mt-[30px] inline-flex w-fit items-center gap-[7px] text-[11px] font-bold tracking-[-0.04em] text-black md:text-[13px]"
          >
            Explore All
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </Link>
        </motion.div>

        <ImageTile
          src={heroGlass}
          alt="Glass sphere and mirror on water"
          className="col-span-6 aspect-[0.85] rounded-[42px] md:col-span-4 md:col-start-5 md:row-start-2 md:rounded-[64px]"
          delay={0.18}
        />

        <ImageTile
          src={heroBalloon}
          alt="Pink ball and staircase inside cloud landscape"
          className="col-span-6 aspect-[0.85] rounded-[42px] md:col-span-4 md:col-start-9 md:row-start-2 md:rounded-[64px]"
          delay={0.24}
        />
      </div>
    </section>
  );
}

function DigitalExpertise() {
  return (
    <section id="digital-expertise" className="mx-auto mt-[104px] max-w-[1240px] px-5 md:px-7">
      <div className="grid grid-cols-12 gap-x-[24px] gap-y-9">


        <motion.h2
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: titleEase }}
          className="col-span-12 mt-[42px] font-serif text-[clamp(4rem,8vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-black"
        >
          Digital Expertise
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: titleEase }}
          className="col-span-12 overflow-hidden rounded-[42px] md:col-span-6 md:rounded-[58px]"
        >
          <img
            src={expertiseImg}
            alt="White sculptural arch and tree in water"
            className="h-full min-h-[270px] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08, ease: titleEase }}
          className="col-span-12 md:col-span-5 md:col-start-8"
        >
          <p className="max-w-[360px] font-serif text-[27px] font-medium leading-[1.02] tracking-[-0.055em] text-black md:text-[34px]">
            Step into the future of art with<br />
            Dttio. We provide cutting-<br />
            edge digital services.
          </p>
          <div className="mt-[24px] grid grid-cols-[1px_1fr] gap-[42px]">
            <div className="h-[180px] bg-black/35" />
            <div className="pt-[88px]">
              <p className="max-w-[245px] text-[12px] font-semibold leading-[1.32] tracking-[-0.045em] text-black">
                Our innovative solutions are<br />
                designed to enhance your artistic<br />
                journey and connect you with a<br />
                wider audience.
              </p>
              <Link
                to="/about"
                className="mt-[26px] inline-flex items-center gap-[7px] text-[10px] font-bold tracking-[-0.04em] text-black"
              >
                Read more <span>↗</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RecentWorks() {
  return (
    <section className="mx-auto mt-[104px] max-w-[1240px] px-5 md:px-7">
      <motion.h2
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: titleEase }}
        className="text-center font-serif text-[clamp(4rem,8vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-black"
      >
        Recent Works
      </motion.h2>

      <div className="mt-[58px] grid grid-cols-12 gap-x-[24px] gap-y-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: titleEase }}
          className="col-span-12 md:col-span-4"
        >
          <p className="font-serif text-[29px] font-medium leading-[1.02] tracking-[-0.06em] text-black">
            We provide cutting-<br />
            edge digital
          </p>
          <div className="mt-[34px] divide-y divide-black/25 border-y border-black/25">
            {[
              ["Empower artists to showcase their work globally.", "2022"],
              ["From stunning websites to interactive digital exhibits.", "2023"],
            ].map(([text, year]) => (
              <div key={year} className="grid grid-cols-[1fr_auto] gap-4 py-[14px]">
                <p className="text-[10px] font-semibold leading-[1.25] tracking-[-0.045em] text-black">
                  {text}
                </p>
                <span className="text-[9px] font-bold tracking-[-0.04em] text-black">{year}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="col-span-12 grid grid-cols-3 gap-[12px] md:col-span-6 md:col-start-7 md:gap-[16px]">
          {works.map((src, index) => (
            <SmallRoundedImage
              key={src}
              src={src}
              delay={0.08 * index}
              className={index === 1 ? "mt-[18px]" : ""}
            />
          ))}
        </div>

        <div className="col-span-12 grid grid-cols-3 gap-[12px] md:col-span-6 md:col-start-1 md:mt-[52px] md:gap-[16px]">
          {moods.map((src, index) => (
            <SmallRoundedImage
              key={src}
              src={src}
              delay={0.08 * index}
              className={index === 1 ? "mt-[18px]" : ""}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: titleEase }}
          className="col-span-12 self-center md:col-span-4 md:col-start-9 md:mt-[52px]"
        >
          <p className="font-serif text-[29px] font-medium leading-[1.02] tracking-[-0.06em] text-black">
            Our innovative solutions<br />
            are designed
          </p>
          <p className="mt-[54px] max-w-[260px] text-[12px] font-semibold leading-[1.32] tracking-[-0.045em] text-black">
            We designed to enhance your artistic<br />
            journey & connect wider audience.
          </p>
          <Link
            to="/shop"
            className="mt-[28px] inline-flex items-center gap-[7px] text-[10px] font-bold tracking-[-0.04em] text-black"
          >
            Explore All <span>↗</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function OurExpression() {
  const [slide, setSlide] = useState(1);

  const visible = [-1, 0, 1].map((offset) => {
    return (slide + offset + expressions.length) % expressions.length;
  });

  return (
    <section className="mx-auto mt-[104px] max-w-[1240px] px-5 md:px-7">
      <motion.h2
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: titleEase }}
        className="text-center font-serif text-[clamp(4rem,8vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-black"
      >
        Our Expression
      </motion.h2>

      <div className="relative mt-[52px] grid grid-cols-[auto_1fr_auto] items-center gap-[24px]">
        <button
          onClick={() => setSlide((current) => (current - 1 + expressions.length) % expressions.length)}
          className="text-[30px] leading-none text-black transition-transform hover:-translate-x-1"
          aria-label="Previous expression"
        >
          ‹
        </button>

        <div className="grid grid-cols-3 items-center gap-[20px]">
          {visible.map((imageIndex, index) => {
            const isCenter = index === 1;
            return (
              <motion.div
                key={`${slide}-${imageIndex}`}
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                animate={{ opacity: isCenter ? 1 : 0.72, y: 0, scale: isCenter ? 1 : 0.86 }}
                transition={{ duration: 0.62, ease: titleEase }}
                className={`overflow-hidden rounded-[32px] bg-neutral-100 ${isCenter ? "aspect-[0.82]" : "aspect-square"
                  }`}
              >
                <img
                  src={expressions[imageIndex]}
                  alt="Dttio expression artwork"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={() => setSlide((current) => (current + 1) % expressions.length)}
          className="text-[30px] leading-none text-black transition-transform hover:translate-x-1"
          aria-label="Next expression"
        >
          ›
        </button>
      </div>
    </section>
  );
}

function SmallRoundedImage({
  src,
  className = "",
  delay = 0,
}: {
  src: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: titleEase }}
      whileHover={{ y: -4, scale: 1.025 }}
      className={`overflow-hidden rounded-[32px] bg-neutral-100 aspect-square ${className}`}
    >
      <img
        src={src}
        alt="Dttio digital artwork"
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </motion.div>
  );
}

function ImageTile({
  src,
  alt,
  className,
  delay,
}: {
  src: string;
  alt: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 55, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.8, delay, ease: titleEase }}
      whileHover={{ y: -5, scale: 1.015 }}
      className={`group overflow-hidden bg-neutral-100 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </motion.div>
  );
}