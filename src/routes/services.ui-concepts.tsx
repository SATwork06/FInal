import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Palette } from "lucide-react";
import u1 from "@/assets/concept-school-login.png";
import u2 from "@/assets/concept-parent-overview.png";
import u3 from "@/assets/concept-teacher-dashboard.png";
import u4 from "@/assets/concept-teacher-feedback.png";
import u5 from "@/assets/concept-admin-users.png";
import u6 from "@/assets/concept-admin-analytics.png";
import u7 from "@/assets/concept-assignments.png";

export const Route = createFileRoute("/services/ui-concepts")({
  component: UIConceptsService,
  head: () => ({
    meta: [
      { title: "UI Design Concepts — Sean Andrei D. Tan" },
      { name: "description", content: "School performance monitoring system — UI design concepts." },
    ],
  }),
});

const examples = [
  { src: u1, title: "Rizal Elementary — Multi-Role Login", desc: "Branded school login with role selector and immersive campus photo background." },
  { src: u2, title: "Parent Portal — Academic Overview", desc: "Parent dashboard with overall grade, attendance, subject performance, and quarterly progress." },
  { src: u3, title: "Teacher Dashboard — Class Summary", desc: "Teacher home with class stats, quick actions, and recent assignment submissions." },
  { src: u4, title: "Teacher Feedback Stream", desc: "Categorized academic, behavior, and attendance feedback messages for parents." },
  { src: u5, title: "Admin — User Management", desc: "System administration with searchable user table and role badges." },
  { src: u6, title: "Admin — System Analytics", desc: "Login statistics, weekly activity bars, and most active features overview." },
  { src: u7, title: "Manage Assignments", desc: "Assignment tracker with status tabs and per-assignment submission progress." },
];

function UIConceptsService() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 mx-auto mt-4 max-w-6xl px-6">
        <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold">
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
          <span className="hidden items-center gap-2 text-xs font-medium text-muted-foreground sm:inline-flex">
            <Palette className="h-3.5 w-3.5" /> Service · UI Design Concepts
          </span>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Service</div>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">UI Design Concepts</h1>
          <p className="mt-4 text-base text-muted-foreground">
            A connected set of UI concepts for a school Student Performance Monitoring System —
            login, parent portal, teacher tools, and admin analytics.
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
