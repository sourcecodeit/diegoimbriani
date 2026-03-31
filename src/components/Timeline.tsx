interface TimelineItem {
  period: string;
  company: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    period: '2026–present',
    company: 'Full Stack Developer',
    description: 'Cybersecurity',
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
      <div className="space-y-8">
        {timeline.map((item, index) => (
          <div key={index} className="flex gap-6">
            <div className="text-gray-500 font-mono text-sm w-32 flex-shrink-0 pt-1">
              {item.period}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">{item.company}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
