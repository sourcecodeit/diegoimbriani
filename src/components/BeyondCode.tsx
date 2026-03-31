import { ExternalLink, Guitar, Crown } from 'lucide-react';

export default function BeyondCode() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Beyond Code</h2>
      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <Guitar size={24} className="text-gray-400 flex-shrink-0 mt-1" />
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            When I'm not coding, I'm usually making music. I play guitar, bass, drums, clarinet,
            and trumpet. Currently learning piano, which turns out to be harder than debugging
            production issues at 3 AM.
          </p>
        </div>
        <div className="flex gap-4 items-start">
          <Crown size={24} className="text-gray-400 flex-shrink-0 mt-1" />
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            I also play chess on{' '}
            <a
              href="https://lichess.org/@/darkoromanov"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black inline-flex items-center gap-1"
            >
              Lichess
              <ExternalLink size={16} />
            </a>
            , where I make questionable sacrifices and occasionally brilliant blunders.
          </p>
        </div>
      </div>
    </section>
  );
}
