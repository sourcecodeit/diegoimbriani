const Highlight = ({ children }: { children: React.ReactNode }) => (
  <strong>{children}</strong>
);

export default function About() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>
      <div className="text-lg md:text-xl leading-loose space-y-4 text-gray-700">
        <p>
          I started coding in <Highlight>2006</Highlight> at Zero Computing, working on Repubblica.it's classifieds portal.
          That was nearly 20 years ago, and I haven't stopped since.
        </p>
        <p>
          Over the years, I've built everything from <Highlight>headless CMS platforms</Highlight> to <Highlight>distributed Kubernetes
          systems</Highlight>. I've worked with .NET, Node.js, PHP, Java, React, and pretty much everything in between.
          I've shipped <Highlight>open source WordPress plugins</Highlight> with tens of thousands of installs, built <Highlight>SaaS
          platforms</Highlight> handling millions of daily records, and developed <Highlight>real-time collaborative systems</Highlight>.
        </p>
        <p>
          Currently, I'm working as a full stack developer in <Highlight>cybersecurity</Highlight>, which keeps things
          interesting. I like building things that solve real problems, and I'm always learning
          something new.
        </p>
        <p>
          Lately, I've been building <Highlight>AI-augmented applications</Highlight>, integrating <Highlight>LLM APIs</Highlight>, <Highlight>retrieval-augmented
          generation</Highlight>, and <Highlight>vector databases</Highlight> into real products. It's a space where software engineering
          meets creativity, and I find it genuinely exciting.
        </p>
      </div>
    </section>
  );
}
