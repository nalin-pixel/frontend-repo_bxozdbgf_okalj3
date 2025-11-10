import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="py-24 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Simple, transparent pricing</h2>
              <p className="mt-4 text-zinc-700 dark:text-zinc-300">Start free and scale when you’re ready.</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Starter</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Good for simple showcases</p>
                <p className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white">$0</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Interactive 3D hero</li>
                  <li>Basic components</li>
                  <li>Community support</li>
                </ul>
                <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 font-medium">Get started</a>
              </div>

              <div className="rounded-2xl border border-cyan-600/30 bg-gradient-to-b from-cyan-500/10 to-fuchsia-500/10 p-6 shadow-sm ring-1 ring-cyan-500/20">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Pro</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">For startups and creators</p>
                <p className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white">$19</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Advanced sections</li>
                  <li>Priority support</li>
                  <li>Theme customization</li>
                </ul>
                <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white px-4 py-2 font-medium">Upgrade</a>
              </div>

              <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Enterprise</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Tailored to your needs</p>
                <p className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white">Custom</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Dedicated support</li>
                  <li>Custom 3D scenes</li>
                  <li>Integration assistance</li>
                </ul>
                <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 font-medium">Contact sales</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
