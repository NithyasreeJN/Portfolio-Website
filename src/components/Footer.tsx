import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted">
      © {new Date().getFullYear()} {profile.name}. Built with Next.js.
    </footer>
  );
}
