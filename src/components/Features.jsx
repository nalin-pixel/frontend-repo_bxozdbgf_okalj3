import { Layers, Sparkles, MousePointerClick } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'High-fidelity 3D',
    desc: 'Render interactive scenes with buttery-smooth performance and crisp visuals.'
  },
  {
    icon: Sparkles,
    title: 'Polished UI',
    desc: 'Modern, responsive interface with gradients and soft shadows that feels premium.'
  },
  {
    icon: MousePointerClick,
    title: 'Interactive by default',
    desc: 'The hero is fully interactive—pan, orbit, and explore on any device.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Everything you need to wow your audience</h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">Purpose-built components make it easy to launch a futuristic, corporate-grade site.</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/5 dark:border-white/10 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
