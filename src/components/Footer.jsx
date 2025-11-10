export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Futura3D. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-400">
            <a className="hover:text-zinc-900 dark:hover:text-white transition" href="#">Privacy</a>
            <a className="hover:text-zinc-900 dark:hover:text-white transition" href="#">Terms</a>
            <a className="hover:text-zinc-900 dark:hover:text-white transition" href="#">Changelog</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
