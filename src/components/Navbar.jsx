import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-zinc-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <Rocket className="h-5 w-5 text-cyan-500" />
          <span className="text-zinc-900 dark:text-white">Futura3D</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          <a href="#features" className="hover:text-zinc-900 dark:hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-flex px-3 py-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">Sign in</a>
          <a href="#get-started" className="inline-flex px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white text-sm font-medium shadow hover:shadow-lg transition">Get started</a>
        </div>
      </div>
    </header>
  );
}
