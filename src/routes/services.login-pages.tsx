import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, LogIn } from "lucide-react";
import l1 from "@/assets/login-retro.png";
import l2 from "@/assets/login-purple-glass.png";
import l3 from "@/assets/login-3.png";
import l4 from "@/assets/login-4.png";
import l5 from "@/assets/login-5.webp";

export const Route = createFileRoute("/services/login-pages")({
  component: LoginPagesService,
  head: () => ({
    meta: [
      { title: "Login Page Designs — Sean Andrei D. Tan" },
      { name: "description", content: "A collection of modern login page UI examples." },
    ],
  }),
});

const examples = [
  { src: l1, title: "Retro.OS Neon Arcade", desc: "Synthwave login with neon pink + cyan grid horizon and arcade-style CTA." },
  { src: l2, title: "Purple Glass Welcome", desc: "Soft violet gradient backdrop with a frosted glass sign-in card and biometric badge." },
  { src: l3, title: "Editorial Split-Screen", desc: "Dark quote panel paired with a clean serif sign-in." },
  { src: l4, title: "Aurora Dark", desc: "Deep navy with gradient CTA and Google continue button." },
  { src: l5, title: "Minimal Mono Form", desc: "Stripped-down terminal-style auth with accent CTA." },
];

function LoginPagesService() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 mx-auto mt-4 max-w-6xl px-6">
        <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold">
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
          <span className="hidden items-center gap-2 text-xs font-medium text-muted-foreground sm:inline-flex">
            <LogIn className="h-3.5 w-3.5" /> Service · Login Pages
          </span>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Service</div>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Login Page Designs</h1>
          <p className="mt-4 text-base text-muted-foreground">
            Responsive authentication screens — from glassmorphism to brutalism. Each concept
            balances clarity, hierarchy, and brand tone.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {examples.map((e) => (
            <figure
              key={e.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="overflow-hidden">
                <img
                  src={e.src}
                  alt={e.title}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5">
                <div className="text-base font-semibold">{e.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{e.desc}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
    </div>
  );
}
