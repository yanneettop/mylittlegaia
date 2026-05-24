import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/shop/Breadcrumbs";

export const metadata: Metadata = {
  title: "How to Choose Your First Crystal | Beginner Guide",
  description:
    "Learn how to choose your first crystal by intention, colour, shape and feeling. A simple beginner-friendly guide from My Little Gaia.",
};

const intentionGuide = [
  ["For calm and rest", "Amethyst"],
  ["For love and softness", "Rose Quartz"],
  ["For clarity and focus", "Clear Quartz"],
  ["For protection and grounding", "Black Tourmaline"],
  ["For confidence and positive energy", "Citrine"],
];

const shapeGuide = [
  ["Tumbled stone", "easy to carry and use daily"],
  ["Raw crystal", "natural, earthy and organic"],
  ["Crystal point", "beautiful for display, focus or intention"],
  ["Palm stone", "smooth, calming and comforting to hold"],
  ["Cluster", "decorative and lovely for a room or ritual space"],
];

const beginnerCrystals = [
  {
    title: "Amethyst",
    text: "Amethyst is often associated with calm, rest and emotional balance. It is a lovely first crystal if you want something peaceful for your bedroom, meditation space or evening routine.",
  },
  {
    title: "Rose Quartz",
    text: "Rose Quartz is commonly connected with love, kindness and emotional softness. Many people choose it for self-love, gentle energy and heart-centred intentions.",
  },
  {
    title: "Clear Quartz",
    text: "Clear Quartz is known as a simple all-round crystal. It is often used for clarity, focus and setting intentions, making it a useful choice for beginners.",
  },
  {
    title: "Black Tourmaline",
    text: "Black Tourmaline is often chosen for grounding and protection. It can be placed near the entrance of a home, on a desk or carried when you want to feel more steady.",
  },
  {
    title: "Citrine",
    text: "Citrine is commonly associated with confidence, motivation and positive energy. It is a bright, uplifting crystal for workspaces, creative projects and new beginnings.",
  },
];

const journeyLinks = [
  ["How to cleanse your crystals", "/crystal-guides/how-to-cleanse-your-crystals"],
  ["How to set an intention with crystals", "/crystal-guides/how-to-set-an-intention-with-crystals"],
  ["Best crystals for beginners", "/crystal-guides/best-crystals-for-beginners"],
  ["Explore the Crystal Library", "/crystal-library"],
];

const faqs = [
  {
    question: "What is the best crystal for beginners?",
    answer:
      "Amethyst, Rose Quartz, Clear Quartz, Black Tourmaline and Citrine are all popular crystals for beginners. They are easy to understand and can be used for simple intentions such as calm, love, clarity, protection and confidence.",
  },
  {
    question: "How do I know which crystal is right for me?",
    answer:
      "Start by thinking about what you need right now. You can choose a crystal by intention, colour, shape, meaning or simply by the one you feel most drawn to.",
  },
  {
    question: "Do I need to cleanse my first crystal?",
    answer:
      "Many people like to cleanse a new crystal before using it. Gentle methods such as selenite, moonlight, smoke or sound are beginner-friendly and safe for most crystals.",
  },
  {
    question: "Can I choose a crystal just because I like how it looks?",
    answer:
      "Yes. Feeling drawn to a crystal’s colour, shape or texture is a natural way to choose. Your first crystal should feel personal and meaningful to you.",
  },
];

export default function ChooseFirstCrystalGuidePage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-ivory">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-sage/18 blur-3xl" />
          <div className="absolute right-[-8rem] top-[42rem] h-96 w-96 rounded-full bg-gold/18 blur-3xl" />
          <div className="absolute bottom-96 left-[12%] h-72 w-72 rounded-full bg-rose/10 blur-3xl" />
        </div>

        <section className="container-x relative py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Crystal Guides", href: "/crystal-guides" },
              { label: "How to Choose Your First Crystal" },
            ]}
          />
        </section>

        <section className="container-x relative pb-14 sm:pb-20">
          <div className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white/58 shadow-soft backdrop-blur">
            <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="p-7 sm:p-10 lg:p-14">
                <span className="eyebrow">Beginner Guide</span>
                <h1 className="mt-5 font-serif text-5xl leading-[1.02] text-forest sm:text-6xl lg:text-7xl">
                  How to Choose Your First Crystal
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-forest/72 sm:text-lg">
                  Choosing your first crystal does not need to feel complicated. This simple guide will help you begin with intention, confidence and a little curiosity.
                </p>
                <p className="mt-6 inline-flex rounded-full border border-sage/25 bg-sage/[0.16] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest/70">
                  4 min read
                </p>
              </div>
              <div className="min-h-[20rem] bg-[radial-gradient(circle_at_42%_42%,rgba(156,175,136,0.32),transparent_30%),radial-gradient(circle_at_68%_62%,rgba(200,169,106,0.24),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.72),rgba(216,195,165,0.22))] p-8">
                <div className="h-full min-h-[16rem] rounded-[1.7rem] border border-white/55 bg-white/38 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur">
                  <div className="grid h-full place-items-center p-8">
                    <div className="relative h-48 w-48 rounded-full bg-sage/18">
                      <div className="absolute left-8 top-10 h-28 w-24 rounded-full bg-white/62 shadow-soft" />
                      <div className="absolute bottom-7 right-5 h-24 w-28 rounded-full bg-gold/22 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]" />
                      <div className="absolute bottom-10 left-12 h-px w-28 bg-forest/12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <article className="container-x relative pb-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
            <div className="space-y-7">
              <ArticleCard>
                <p>If you are new to crystals, it can be hard to know where to begin. There are so many colours, shapes, names and meanings that choosing your first crystal may feel more confusing than peaceful.</p>
                <p>The good news is that you do not need to know everything before you start. Your first crystal does not have to be rare, expensive or perfect. It simply needs to feel meaningful to you.</p>
                <p>You can choose a crystal by intention, by colour, by shape, by meaning, or simply because you feel naturally drawn to it. There is no single right way to begin.</p>
              </ArticleCard>

              <ArticleSection title="Start with what you need right now">
                <p>A simple way to choose your first crystal is to ask yourself one question:</p>
                <blockquote className="rounded-2xl border border-gold/20 bg-gold/[0.08] p-5 font-serif text-2xl leading-9 text-forest">
                  “What would I like support with right now?”
                </blockquote>
                <p>You may be looking for calm, focus, confidence, protection, love or a fresh start. Once you know your intention, it becomes easier to choose a crystal that feels aligned with it.</p>
                <p>For beginners, it is better to start with one clear intention rather than trying to choose a crystal for everything at once.</p>
                <GuideList items={intentionGuide} />
              </ArticleSection>

              <ArticleSection title="Choose by feeling, not only by meaning">
                <p>Crystal meanings can be helpful, but they are not the only way to choose. Sometimes a crystal catches your eye before you know anything about it. You may like its colour, its shape, its texture or the way it feels in your hand.</p>
                <p>That natural attraction matters. Many people choose their first crystal simply because they feel drawn to it.</p>
                <p>If a crystal feels calming, beautiful or interesting to you, that is already a good reason to explore it.</p>
              </ArticleSection>

              <ArticleSection title="Pick a beginner-friendly crystal shape">
                <p>Crystals come in many forms, and each one can feel slightly different to use. For your first crystal, choose a shape that fits easily into your everyday life.</p>
                <p>A small tumbled stone is easy to carry in your pocket or bag. A raw crystal feels natural and earthy. A crystal point can look beautiful on a desk, shelf or bedside table. A palm stone is smooth, comforting and easy to hold during a quiet moment.</p>
                <p>You do not need a big collection to begin. One crystal that you actually use is more meaningful than many crystals that sit forgotten.</p>
                <GuideList items={shapeGuide} />
              </ArticleSection>

              <ArticleSection title="Five easy crystals for beginners">
                <p>If you are still unsure, start with one of these popular beginner crystals. They are easy to understand, easy to use and often chosen by people beginning their crystal journey.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {beginnerCrystals.map((crystal) => (
                    <section key={crystal.title} className="rounded-2xl border border-forest/10 bg-ivory/55 p-5">
                      <h3 className="font-serif text-2xl text-forest">{crystal.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-forest/68">{crystal.text}</p>
                    </section>
                  ))}
                </div>
              </ArticleSection>

              <ArticleSection title="Do not overthink your first choice">
                <p>It is easy to feel like you need to choose the “right” crystal, but your first crystal is simply a beginning.</p>
                <p>You can read about meanings, compare shapes and look at different colours, but the final choice can still be simple. Choose the crystal that feels useful, beautiful or personal to you.</p>
                <p>Your connection with crystals can grow slowly. Start small, learn as you go and let your collection develop naturally over time.</p>
              </ArticleSection>

              <Callout />

              <ArticleSection title="Continue your beginner journey">
                <p>Once you have chosen your first crystal, you may want to learn how to care for it and use it with intention.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {journeyLinks.map(([label, href]) => (
                    <Link key={label} href={href} className="rounded-2xl border border-forest/10 bg-white/58 px-4 py-3 text-sm font-semibold text-forest/70 transition hover:border-gold/30 hover:bg-white hover:text-forest">
                      {label}
                    </Link>
                  ))}
                </div>
              </ArticleSection>

              <section className="rounded-[2rem] border border-forest/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.75),rgba(156,175,136,0.18))] p-7 shadow-soft sm:p-9">
                <span className="eyebrow">Ready to begin</span>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-forest sm:text-4xl">Ready to choose your first crystal?</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-forest/70">
                  Start with one crystal that matches your current intention. Whether you are looking for calm, clarity, protection or confidence, your first crystal should feel simple, personal and easy to use.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/shop?category=tumble-stones" className="btn-primary">Explore Beginner Crystals</Link>
                  <Link href="/crystal-library" className="btn-secondary bg-white/55">Read the Crystal Library</Link>
                </div>
              </section>

              <ArticleSection title="Frequently asked questions">
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <section key={faq.question} className="rounded-2xl border border-forest/10 bg-ivory/55 p-5">
                      <h3 className="font-serif text-xl text-forest">{faq.question}</h3>
                      <p className="mt-3 text-sm leading-7 text-forest/68">{faq.answer}</p>
                    </section>
                  ))}
                </div>
              </ArticleSection>
            </div>

            <aside className="hidden lg:sticky lg:top-28 lg:block">
              <div className="rounded-[2rem] border border-forest/10 bg-white/62 p-5 shadow-soft backdrop-blur">
                <p className="eyebrow">In this guide</p>
                <div className="mt-4 space-y-2 text-sm leading-6 text-forest/68">
                  <p>Choose by intention</p>
                  <p>Trust what feels right</p>
                  <p>Pick a simple shape</p>
                  <p>Start with beginner crystals</p>
                  <p>Try a first ritual</p>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function ArticleCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-[2rem] border border-forest/10 bg-white/62 p-7 text-base leading-8 text-forest/72 shadow-[0_16px_50px_-42px_rgba(36,56,47,0.55)] backdrop-blur sm:p-9">
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function ArticleSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[2rem] border border-forest/10 bg-white/62 p-7 shadow-[0_16px_50px_-42px_rgba(36,56,47,0.55)] backdrop-blur sm:p-9">
      <h2 className="font-serif text-3xl leading-tight text-forest sm:text-4xl">{title}</h2>
      <div className="mt-5 space-y-5 text-base leading-8 text-forest/72">{children}</div>
    </section>
  );
}

function GuideList({ items }: { items: string[][] }) {
  return (
    <div className="grid gap-3">
      {items.map(([label, value]) => (
        <div key={label} className="flex flex-col gap-1 rounded-2xl border border-forest/10 bg-ivory/55 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm font-semibold text-forest">{label}</span>
          <span className="text-sm text-forest/68">{value}</span>
        </div>
      ))}
    </div>
  );
}

function Callout() {
  return (
    <section className="rounded-[2rem] border border-gold/22 bg-gold/[0.08] p-7 shadow-glow sm:p-9">
      <h2 className="font-serif text-3xl leading-tight text-forest sm:text-4xl">A simple first crystal ritual</h2>
      <div className="mt-5 space-y-4 text-base leading-8 text-forest/72">
        <p>When your crystal arrives, hold it in your hand for a quiet moment.</p>
        <p>Take three slow breaths.</p>
        <p>Then choose one simple intention, such as:</p>
        <ul className="grid gap-2 text-sm font-semibold text-forest/72 sm:grid-cols-2">
          <li>“I welcome calm into my day.”</li>
          <li>“I choose clarity and focus.”</li>
          <li>“I protect my energy.”</li>
          <li>“I move forward with confidence.”</li>
        </ul>
        <p>Keep your crystal somewhere you will see it often, such as your bedside table, desk, pocket or meditation space.</p>
      </div>
    </section>
  );
}
