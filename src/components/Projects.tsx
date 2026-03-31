import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Ghost in the Cluster',
    description: 'A terminal-style text adventure game to learn Kubernetes commands.',
    link: 'https://ghost.diegoimbriani.me',
  },
  {
    title: 'Borghi',
    description: 'An indie isometric puzzle city-builder set in medieval Italy. Personal passion project.',
    link: 'https://sourcecodegames.itch.io/borghi',
  },
  {
    title: 'Nezuko',
    description: 'Open source CRM built for freelancers.',
    link: 'https://github.com/sourcecodeit/nezuko-crm',
  },
];

export default function Projects() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 p-6 hover:border-gray-400 transition-colors"
          >
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              {project.title}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </h3>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
