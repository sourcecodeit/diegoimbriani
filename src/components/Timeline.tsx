interface TimelineItem {
  period: string;
  company: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    period: '2026–present',
    company: 'Cybersecurity',
    description: 'Full Stack Developer',
  },
  {
    period: '2020–2026',
    company: 'Source Code SRL',
    description: 'Full-stack, AWS, Kubernetes, real-time collaborative systems',
  },
  {
    period: '2018–present',
    company: 'Volta Analytics',
    description: 'SaaS platform, millions of daily records, microservices',
  },
  {
    period: '2015–2020',
    company: 'Freelance',
    description: 'Node.js, PHP, open source WordPress plugins (tens of thousands of installs)',
  },
  {
    period: '2008–2015',
    company: 'LSVmultimedia',
    description: '.NET/C#, proprietary headless CMS',
  },
  {
    period: '2007–2008',
    company: 'Cubica SRL',
    description: 'Built a CMS in CakePHP, Enrico Letta\'s website',
  },
  {
    period: '2006–2007',
    company: 'Zero Computing',
    description: 'Repubblica.it classifieds portal',
  },
];

export default function Timeline() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Career</h2>
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200"></div>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6 relative">
              <div className="relative flex-shrink-0">
                <div className={`w-[15px] h-[15px] rounded-full border-2 mt-1.5 ${
                  index === 0 ? 'bg-gray-900 border-gray-900' : 'bg-white border-gray-300'
                }`}></div>
              </div>
              <div className="flex-1 pb-2">
                <div className="text-gray-500 font-mono text-sm mb-1">{item.period}</div>
                <h3 className="text-xl font-bold mb-1">{item.company}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
