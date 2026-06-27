import { useReveal } from '../lib/useReveal';

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal bg-slate-900 py-20 sm:py-28 relative overflow-hidden blueprint-grid"
    >
      {/* Decorative element */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.03] font-display font-800 text-[20vw] text-white flex items-center justify-center select-none pointer-events-none leading-none"
        style={{ fontWeight: 800 }}
      >
        OP
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-coral-600/20 rounded-2xl blur-2xl" />
            <img
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Workshop at Oviedo Publishing"
              className="relative w-full rounded-xl object-cover aspect-[4/3] shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10">
              <p className="font-mono text-[10px] text-white/50 tracking-widest uppercase mb-1">
                Workshop · Oviedo, FL
              </p>
              <p className="font-display text-white text-sm font-semibold">
                Small Business Strategy Bootcamp, 2024
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <div
              data-coord="40.0 · ABT"
              className="coord-marker font-mono text-xs text-coral-400 tracking-widest uppercase mb-2"
            />
            <h2
              className="font-display text-4xl sm:text-5xl text-white mb-6 leading-tight"
              style={{ fontWeight: 700 }}
            >
              A Small Press
              <br />
              With a Single Focus
            </h2>

            <div className="space-y-4 font-body text-slate-300 leading-relaxed">
              <p>
                Oviedo Publishing was founded on a simple observation: most business books are too
                long, too vague, and too expensive. The market is full of 400-page tomes where 80%
                of the content is either padding or irrelevant to your specific situation.
              </p>
              <p>
                We publish handbooks — practical, mid-length guides in the 150–250 page range — 
                that respect your time. Every chapter earns its place. Every concept connects
                directly to something you can do this week.
              </p>
              <p>
                We're based in Oviedo, Florida, a small city in Seminole County with a strong
                entrepreneurial community and a practical, no-nonsense business culture that
                informs everything we publish.
              </p>
              <p>
                Our companion materials — worksheets, scorecards, templates — are always free.
                We believe the tools for implementation should never be behind a paywall.
              </p>
            </div>

            {/* Values grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { stat: '150–250', label: 'Pages per handbook' },
                { stat: '100%', label: 'Free companion files' },
                { stat: 'Oviedo', label: 'Florida headquarters' },
                { stat: '2024', label: 'Year founded' },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div
                    className="font-display text-xl text-coral-400"
                    style={{ fontWeight: 700 }}
                  >
                    {stat}
                  </div>
                  <div className="font-body text-xs text-slate-400 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
