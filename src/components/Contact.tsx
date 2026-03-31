import { Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
      <a
        href="https://www.linkedin.com/in/diegoimbriani/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 text-lg hover:underline"
      >
        <Linkedin size={24} />
        <span>linkedin.com/in/diegoimbriani</span>
      </a>
    </section>
  );
}
