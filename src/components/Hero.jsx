import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Build immersive 3D web experiences
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-700 dark:text-zinc-300">
            A sleek, futuristic starter with an interactive 3D hero. Perfect for product showcases, tech brands, and creative portfolios.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#get-started" className="inline-flex px-5 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-medium shadow hover:shadow-lg transition">
              Launch demo
            </a>
            <a href="#features" className="inline-flex px-5 py-3 rounded-md bg-white/80 dark:bg-zinc-800/80 ring-1 ring-black/10 dark:ring-white/10 text-zinc-900 dark:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800 transition">
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Decorative gradients that won't block 3D interactions */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
    </section>
  );
}
