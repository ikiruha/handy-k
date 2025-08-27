// src/App.tsx
import React from "react";
import {
  MessageCircle,
  Instagram,
  Facebook,
  Lightbulb,
  Fan,
  Wrench,
  Tv,
  Paintbrush,
  Lock,
  Camera,
  Star,
} from "lucide-react";

/* ───────── Types ───────── */
type Review = {
  name: string;
  text: string;
  date: string;
  rating?: number;
  verified?: boolean;
  featured?: boolean;
  service?: string;
  price?: string;
};
type Service = { icon: React.ElementType; title: string; desc: string };

/* ───────── Contacts & constants ───────── */
const CONTACT_LINKS = {
  whatsapp:
    "https://wa.me/17045201815?text=Hi%2C+I%27d+like+a+quote.+Zip%3A__+Details%3A__",
  instagram: "https://instagram.com/handy.k.charlotte",
  facebook: "https://www.facebook.com/profile.php?id=61575096541541",
};

const THUMBTACK_PROFILE_URL =
  "https://www.thumbtack.com/profile/services/544931986848464900/";
const THUMBTACK_REVIEWS_URL =
  "https://www.thumbtack.com/profile/services/544931986848464900/reviews";

const RATING = { value: 5.0, count: 27, badge: "Top Pro" };

/* ───────── Data ───────── */
const SERVICES: Service[] = [
  { icon: Lightbulb, title: "Light Fixtures", desc: "Install & replace" },
  { icon: Fan, title: "Ceiling Fans", desc: "Swap or new install (existing box)" },
  { icon: Wrench, title: "Shower Heads & Faucets", desc: "Replace and seal" },
  { icon: Tv, title: "TV Mounting", desc: "Hide cables • solid anchors" },
  { icon: Wrench, title: "Furniture Assembly", desc: "Beds, dressers, shelving" },
  { icon: Lock, title: "Door Locks", desc: "Standard & smart locks" },
  { icon: Camera, title: "Wireless Security", desc: "Cameras & sensors" },
  { icon: Wrench, title: "Toilet & Garbage Disposal", desc: "Repair & replace" },
  { icon: Paintbrush, title: "Curtains, Blinds, Mirrors", desc: "Straight and secure" },
];
const AREAS = ["Charlotte", "Matthews", "Mint Hill", "Pineville"];

const REVIEWS: Review[] = [
  {
    name: "Pranita V.",
    service: "Handyman",
    price: "$100-200",
    text: `Did a great job helping out with a few tasks at our home. They were on time, professional, and got everything done quickly and neatly. Would definitely recommend and hire again!`,
    rating: 5,
    verified: true,
    featured: true,
    date: "Aug 17, 2025",
  },
  {
    name: "Jennifer J.",
    service: "Handyman",
    text: `I had a great experience with this handyman! He was on time, he moved quickly and I am extremely happy with all of the work. He was here for 4.5 hours with many jobs to do and I highly recommend him.`,
    rating: 5,
    verified: true,
    featured: true,
    date: "Aug 16, 2025",
  },
  {
    name: "Gina P.",
    service: "Handyman",
    text: `Kirill did an amazing job for us. He removed a lot of light fixtures for our upcoming paint project. He installed many outlet covers onto our new backsplash and porcelain tile fireplace. We loved how precise he was making sure everything was level. He had covers for his shoes. Very accommodating and professional. He was about 15 minutes early asking if it was okay to come to our door. We are having him back after the painters and hiring him for other things closer to our move and after!`,
    rating: 5,
    verified: true,
    featured: true,
    date: "Aug 14, 2025",
  },
  { name: "Matt M.", service: "Handyman", text: `Highly recommend! Arrived on time, diagnosed the problem and fixed within an hour. Will definitely use his services again!!!`, rating: 5, verified: true, featured: true, date: "Aug 6, 2025" },
  { name: "Miss Najat ❤", service: "Handyman", price: "$50-100 an hour", text: `Very nice and helpful. Arrived on time & assisted with all my tasks and explained as the process continued.`, rating: 5, verified: true, featured: true, date: "Aug 5, 2025" },
  { name: "Andre H.", service: "Handyman", text: `Could’ve selected all 5.. but only let me select 3 items. Definitely recommend.`, rating: 5, verified: true, featured: true, date: "Aug 5, 2025" },
  { name: "Pradeep C.", service: "Handyman", price: "$50-100 an hour", text: `Did a fantastic job with my TV mounts. I had to reschedule a couple of times but was very understanding. Knowledgeable on the work as well.`, rating: 5, verified: true, featured: true, date: "Aug 1, 2025" },
  { name: "Binoy J.", service: "Handyman", price: "$100-200", text: `I called him for fixing my sunroom screens. He did a good job.`, rating: 5, verified: true, featured: true, date: "Jul 24, 2025" },
  { name: "Chloefaith W.", service: "Handyman", price: "$100-200", text: `He did such a good job and very professional! I had been stressing out on my closet door and he fixed it in less than an hour. I will definitely contact him again for anything I need fixing!!!`, rating: 5, verified: true, featured: true, date: "Jul 23, 2025" },
  { name: "Joanie K.", service: "Handyman", text: `My handyman was very good and responsive. He stayed in touch to let me know where he was. He did a great job on the projects I had him do. Would recommend him and use him again.`, rating: 5, verified: true, featured: true, date: "Jul 23, 2025" },
  { name: "Carlton P.", service: "Handyman", text: `Handy K did a good job on my bathroom job with the tile and sealant work. I recommend and would use their services again in the future.`, rating: 5, verified: true, featured: true, date: "Jul 21, 2025" },
  { name: "Kendra T.", service: "Handyman", text: `He did an amazing job and was quick!!!`, rating: 5, verified: true, featured: true, date: "Jul 10, 2025" },
  { name: "Alayni S.", service: "Handyman", price: "$100-200", text: `He was quick, and didn’t have any problems! Communication was perfect as well!`, rating: 5, verified: true, featured: true, date: "Jun 29, 2025" },
  { name: "Pam G.", service: "Handyman", text: `Handy K did a wonderful job setting up my paety.`, rating: 5, verified: true, featured: true, date: "Jun 21, 2025" },
  { name: "Anette P.", service: "Handyman", text: `He did a wonderful job and I will be calling him back.`, rating: 5, verified: true, featured: true, date: "Jun 11, 2025" },
  { name: "Jarel S.", service: "Handyman", price: "$100-200", text: `He did an amazing job installing my curtain rods—showed up just two hours after I booked him and handled everything perfectly. 5 Stars! ⭐️`, rating: 5, verified: true, featured: true, date: "May 26, 2025" },
  { name: "Dee C.", service: "Handyman", text: `Great experience!!! Handyman K has become my go-to handy-person. If you are looking for someone to get the job done…. Handyman K is your guy. Book him today!`, rating: 5, verified: true, featured: true, date: "May 25, 2025" },
  { name: "Martha R.", service: "Handyman", text: `Cyril was right on time and very pleasant. I thought both of my doors could use the same seal but since they couldn't he was willing to make a trip to Lowe's to recheck. Once home, he completed the job and I felt he enjoyed his work and did not get frustrated.`, rating: 5, verified: true, featured: true, date: "May 20, 2025" },
  { name: "Condae T.", service: "Handyman", text: `I don’t know what’s more inspired—a man that knows how to install a complicated water filter or someone who doesn’t know how to speak English that much, but is willing to try and hustle his way to do something. I admire his work ethic and his ability to communicate despite his language barriers. We highly recommend him as he was super responsive and very reliable. I love that he is very punctual as well. Thank you so much.`, rating: 5, verified: true, featured: true, date: "May 15, 2025" },
  { name: "Reese W.", service: "Handyman", price: "$2k-5k an hour", text: `Kirill assisted my family in getting set up in our new home. From changing light and bathroom fixtures, putting beds and pergolas together, to mounting televisions he has done it all for us. He is truly exceptional, honest, and hardworking. I highly recommend him.`, rating: 5, verified: true, featured: true, date: "May 9, 2025" },
  { name: "Fran R.", service: "Handyman", text: `Good worker. Did a great job. Would hire again.`, rating: 5, verified: true, featured: true, date: "May 2, 2025" },
  { name: "Pam C.", service: "Handyman", text: `Great job, very polite and professional!`, rating: 5, verified: true, featured: true, date: "Apr 22, 2025" },
  { name: "Carl T.", service: "Handyman", price: "$200-500", text: `We contacted Handy K about replacing 7 light fixtures around our home. He responded quickly, provided a quote, and set up a time to come over. He showed up on time, was very professional, and did an outstanding job of swapping out the fixtures. My wife and I showed him a few more projects that we'd like to hire him for. Outstanding experience and we would definitely hire him again.`, rating: 5, verified: true, featured: true, date: "Apr 18, 2025" },
  { name: "Nanditha R.", service: "Handyman", text: `The job was well done. Came pretty quick, knowledgeable, polite and professional. Would definitely recommend for handyman services.`, rating: 5, verified: true, featured: true, date: "Apr 15, 2025" },
  { name: "Richard L.", service: "Handyman", price: "$100-200", text: `I was very happy with everything about the service that I received. I would absolutely hire Mr. K again.`, rating: 5, verified: true, featured: true, date: "Apr 15, 2025" },
  { name: "Lamont R.", service: "Handyman", text: `Great experience!`, rating: 5, verified: true, featured: true, date: "Apr 15, 2025" },
  { name: "Mia R.", service: "Handyman", text: `Great handyman! Work was done carefully and with good quality. Very friendly and attentive to details. I’m happy with the result and definitely recommend!`, rating: 5, verified: true, featured: true, date: "Apr 9, 2025" },
];

/* ───────── Helpers ───────── */
const Stars = ({ n = 5 }: { n?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: n }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

function usePerPage() {
  const get = () => (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
  const [perPage, setPerPage] = React.useState(get());
  React.useEffect(() => {
    const onResize = () => setPerPage(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return perPage;
}
function useIsDesktop() {
  const [is, setIs] = React.useState(() => window.innerWidth >= 1024);
  React.useEffect(() => {
    const onResize = () => setIs(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return is;
}
function useSwipeNav(
  ref: React.RefObject<HTMLElement>,
  onNext: () => void,
  onPrev: () => void
) {
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let x0 = 0, t0 = 0;
    const ts = (e: TouchEvent) => { x0 = e.touches[0].clientX; t0 = Date.now(); };
    const te = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - x0;
      const dt = Date.now() - t0;
      if (Math.abs(dx) > 40 && dt < 600) (dx < 0 ? onNext : onPrev)();
    };
    const wheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 15) {
        e.preventDefault();
        (e.deltaX > 0 ? onNext : onPrev)();
      }
    };
    el.addEventListener("touchstart", ts, { passive: true });
    el.addEventListener("touchend", te, { passive: true });
    el.addEventListener("wheel", wheel, { passive: false });
    return () => {
      el.removeEventListener("touchstart", ts);
      el.removeEventListener("touchend", te);
      el.removeEventListener("wheel", wheel as any);
    };
  }, [ref, onNext, onPrev]);
}

function ReviewCard({ r, showInlineReadAll }: { r: Review; showInlineReadAll?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const long = r.text.length > 220;

  return (
    <div className="h-full rounded-2xl border border-neutral-800 bg-neutral-900/30 p-5 flex flex-col">
      <div className="text-yellow-400 text-3xl mb-3">“</div>

      <p className={`${open ? "" : "line-clamp-6"} min-h-[7.5rem]`}>{r.text}</p>

      {long && (
        <button
          onClick={() => setOpen(v => !v)}
          className="self-start mt-2 text-xs text-yellow-400 hover:text-yellow-300"
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}

      <div className="mt-auto pt-4">
        <div className="text-sm text-neutral-300">{r.name}</div>
        <div className="text-xs text-neutral-500">{r.date}</div>
        <div className="mt-3">
          <Stars n={r.rating ?? 5} />
        </div>
      </div>

      {showInlineReadAll && (
        <a
          href={THUMBTACK_REVIEWS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-4 self-end rounded-full border border-neutral-700 px-3 py-1 text-sm hover:bg-neutral-800"
        >
          Read all on Thumbtack ↗
        </a>
      )}
    </div>
  );
}

function ReviewsCarousel() {
  const perPage = usePerPage();
  const isDesktop = useIsDesktop();
  const [page, setPage] = React.useState(0);

  const pages = Math.max(1, Math.ceil(REVIEWS.length / perPage));
  const from = page * perPage;
  const slice = REVIEWS.slice(from, from + perPage);

  const go = (dir: -1 | 1) => setPage(p => (p + dir + pages) % pages);

  const wrapRef = React.useRef<HTMLDivElement>(null);
  useSwipeNav(wrapRef, () => go(1), () => go(-1));

  const maxDots = 9;
  const useWindow = pages > maxDots;
  const start = useWindow ? Math.min(Math.max(0, page - Math.floor(maxDots / 2)), pages - maxDots) : 0;
  const end = useWindow ? start + maxDots : pages;

  const dots = (
    <>
      {Array.from({ length: end - start }).map((_, i) => {
        const idx = start + i;
        return (
          <button
            key={idx}
            onClick={() => setPage(idx)}
            aria-label={`Go to page ${idx + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              idx === page ? "bg-yellow-400" : "bg-neutral-700 hover:bg-neutral-600"
            }`}
          />
        );
      })}
    </>
  );

  return (
    <div ref={wrapRef}>
      <div className="relative">
        <button
          aria-label="Previous"
          onClick={() => go(-1)}
          className="hidden lg:flex absolute left-[-48px] inset-y-0 w-10 items-center justify-center rounded-xl bg-neutral-800/70 hover:bg-neutral-700"
        >
          ‹
        </button>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {slice.map((r, i) => (
            <ReviewCard key={from + i} r={r} showInlineReadAll={!isDesktop} />
          ))}
        </div>

        <button
          aria-label="Next"
          onClick={() => go(1)}
          className="hidden lg:flex absolute right-[-48px] inset-y-0 w-10 items-center justify-center rounded-xl bg-neutral-800/70 hover:bg-neutral-700"
        >
          ›
        </button>
      </div>

      <div className="mt-6">
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex gap-2">{dots}</div>
          <a
            href={THUMBTACK_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neutral-700 px-3 py-1 text-sm hover:bg-neutral-800"
          >
            Read all on Thumbtack ↗
          </a>
        </div>

        <div className="lg:hidden flex justify-center gap-2">{dots}</div>
      </div>
    </div>
  );
}

/* ───────── Component ───────── */
export default function App() {
  // ===== плавный скролл с учётом высоты липкого хедера =====
  const scrollToSection = (id: string) => {
    const header = document.querySelector("header") as HTMLElement | null;
    const offset = (header?.offsetHeight ?? 0) + 12;
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div id="top" />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
          >
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-yellow-400 font-bold text-neutral-900">
              K
            </div>
            <div className="leading-tight">
              <div className="font-semibold">HANDY K</div>
              <div className="text-xs text-neutral-400">
                Handyman Services · Charlotte, NC
              </div>
            </div>
          </a>

          {/* ==== клики по пунктам → плавный скролл ==== */}
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
              className="hover:text-yellow-300"
            >
              Services
            </a>
            <a
              href="#reviews"
              onClick={(e) => { e.preventDefault(); scrollToSection("reviews"); }}
              className="hover:text-yellow-300"
            >
              Reviews
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}
              className="hover:text-yellow-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
              className="hover:text-yellow-300"
            >
              Contact
            </a>
          </nav>

          <a
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-green-500 px-4 py-2 font-medium text-neutral-900 hover:bg-green-400"
          >
            <MessageCircle className="h-5 w-5" />
            Message on WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-900 bg-gradient-to-b from-yellow-500/5 via-neutral-900/30 to-neutral-950">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-300">
              <span className="inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full border border-yellow-400/40">
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                </span>
                Reliable
              </span>
              <span>· Fast response · Charlotte</span>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] sm:text-6xl">
              Handy K — <span className="text-yellow-300">Handyman</span>
              <br /> in Charlotte, NC
            </h1>

            <p className="mt-4 max-w-prose text-neutral-300">
              Lighting, mounting, assembly, repairs. Send a message with photos
              for a quick quote. No calls needed.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-medium text-neutral-900 hover:bg-green-400"
              >
                <MessageCircle className="h-5 w-5" />
                Message on WhatsApp
              </a>

              <a
                href={CONTACT_LINKS.instagram}
                target="_blank"
                className="grid h-11 w-11 place-items-center rounded-xl border border-neutral-800 bg-neutral-900 hover:border-yellow-400/40"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href={CONTACT_LINKS.facebook}
                target="_blank"
                className="grid h-11 w-11 place-items-center rounded-xl border border-neutral-800 bg-neutral-900 hover:border-yellow-400/40"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            {/* Areas */}
            <div className="mt-6 text-neutral-300">
              <div className="mb-2 text-sm">Serving Charlotte +25 miles</div>
              <div className="flex flex-wrap items-center gap-2">
                {AREAS.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-sm"
                  >
                    {name}
                  </span>
                ))}
                <span className="text-sm text-neutral-400">and others</span>
              </div>
            </div>
          </div>

          {/* Two framed images */}
          <div className="relative rounded-3xl border border-neutral-800 bg-gradient-to-br from-yellow-500/5 to-transparent p-3">
            <div className="grid grid-cols-[2fr_1fr] gap-3 h-[320px] md:h-[360px] lg:h-[420px] xl:h-[460px]">
              <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-800 min-h-0">
                <img
                  src="/hero-1.jpeg"
                  alt="Handyman at work"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-800 min-h-0">
                <img
                  src="/hero-2.jpeg"
                  alt="Tools"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-12 scroll-mt-28">
        <h2 className="mb-6 text-center text-3xl font-bold">Services</h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/30 p-5 transition hover:border-yellow-400/40 hover:bg-neutral-800/50"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-3">
                  <Icon className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <div className="text-lg font-semibold">{title}</div>
                  <div className="text-sm text-neutral-400">{desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================== Reviews ================== */}
      <section id="reviews" className="border-t border-neutral-900 bg-neutral-950 scroll-mt-28">
        <div className="mx-auto max-w-6xl px-5 pt-20 pb-8">
          <h2 className="text-center text-3xl font-bold mb-6">Reviews</h2>

          <div className="mb-6 flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-neutral-700 bg-neutral-900/40 px-4 py-2">
              <Stars n={5} />
              <span className="text-neutral-300">{RATING.value.toFixed(1)}</span>
              <span className="text-neutral-500">• {REVIEWS.length} reviews</span>
              <span className="mx-1 hidden lg:inline h-4 w-px bg-neutral-800" />
              <span className="rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs text-yellow-400 lg:order-none order-2">
                {RATING.badge}
              </span>
              <a
                href={THUMBTACK_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-neutral-800/70 px-2 py-0.5 text-xs text-neutral-300 hover:bg-neutral-700 lg:order-none order-2"
              >
                on Thumbtack ↗
              </a>
            </div>
          </div>

          <ReviewsCarousel />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-neutral-900 bg-neutral-950 scroll-mt-28">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="mb-6 text-center text-3xl font-bold">Recent Projects</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-800">
                <img
                  src={`/project-${i + 1}.jpeg`}
                  alt={`Project ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href={CONTACT_LINKS.instagram}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-4 py-2 hover:border-yellow-400/40"
            >
              More photos on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="border-t border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-yellow-500/5 to-neutral-900 p-8 text-center">
            <h3 className="text-3xl font-bold">Ready to start?</h3>
            <p className="mt-2 text-neutral-300">
              Send a message with what you need and a few photos. I reply quickly.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={CONTACT_LINKS.instagram}
                target="_blank"
                className="order-2 md:order-1 inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-4 py-2 hover:border-yellow-400/40"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                className="order-1 md:order-2 inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-medium text-neutral-900 hover:bg-green-400"
              >
                <MessageCircle className="h-5 w-5" />
                Message on WhatsApp
              </a>
              <a
                href={CONTACT_LINKS.facebook}
                target="_blank"
                className="order-3 inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-4 py-2 hover:border-yellow-400/40"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-6 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Handy K. Charlotte, NC.
      </footer>
    </div>
  );
}
