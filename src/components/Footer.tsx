import { Logo } from "./Nav";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background-dark py-8 md:py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <Logo />
        <p className="mt-6 text-sm text-slate-600">© {new Date().getFullYear()}. All systems operational.</p>
      </div>
    </footer>
  );
}
