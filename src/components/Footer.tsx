import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <p className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted sm:px-6">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
