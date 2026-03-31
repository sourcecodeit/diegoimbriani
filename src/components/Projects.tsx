import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Ghost in the Cluster',
    description: 'A terminal-style text adventure game to learn Kubernetes commands.',
    image: '/images/ghost-in-the-cluster.jpg',
    link: 'https://ghost.diegoimbriani.me',
  },
  {
    title: 'Borghi',
    description: 'An indie isometric puzzle city-builder set in medieval Italy. Personal passion project.',
    image: '/images/borghi.jpg',
    link: 'https://sourcecodegames.itch.io/borghi',
  },
  {
    title: 'Nezuko',
    description: 'Open source CRM built for freelancers.',
    image: '/images/nezuko.jpg',
    link: 'https://github.com/sourcecodeit/nezuko-crm',
  },
];

export default function Projects() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 overflow-hidden hover:border-gray-400 transition-colors block"
          >
            <div className="aspect-square">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                {project.title}
                <ExternalLink size={18} className="text-gray-600" />
              </h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
