import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product catalog, shopping cart, payment integration, and order management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/Lokesh777777',
      live: 'https://github.com/Lokesh777777'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A responsive weather application with real-time data. Shows current weather, forecasts, and weather alerts with beautiful UI.',
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=300&fit=crop',
      category: 'frontend',
      technologies: ['React', 'API', 'CSS3'],
      github: 'https://github.com/Lokesh777777',
      live: 'https://github.com/Lokesh777777'
    },
    {
      id: 3,
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication. Includes user authentication, task CRUD operations, and role-based access control.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
      github: 'https://github.com/Lokesh777777',
      live: 'https://github.com/Lokesh777777'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio website with modern design. Features dark/light theme toggle, responsive design, and smooth animations.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop',
      category: 'frontend',
      technologies: ['React', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Lokesh777777',
      live: 'https://github.com/Lokesh777777'
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time chat application with Socket.io. Features include user authentication, real-time messaging, and user presence indicators.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      category: 'fullstack',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Lokesh777777',
      live: 'https://github.com/Lokesh777777'
    },
    {
      id: 6,
      title: 'Blog CMS',
      description: 'Content management system for blogs. Includes post creation, editing, categorization, and comment management features.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MySQL', 'Express'],
      github: 'https://github.com/Lokesh777777',
      live: 'https://github.com/Lokesh777777'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="page projects-page">
      <div className="projects-header">
        <br/>
        <br/>
        <h1>My Projects</h1>
        <p>Here are some of my recent works</p>
      </div>

      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'frontend' ? 'active' : ''}
          onClick={() => setFilter('frontend')}
        >
          Frontend
        </button>
        <button 
          className={filter === 'backend' ? 'active' : ''}
          onClick={() => setFilter('backend')}
        >
          Backend
        </button>
        <button 
          className={filter === 'fullstack' ? 'active' : ''}
          onClick={() => setFilter('fullstack')}
        >
          Full Stack
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View GitHub repository">
                    <Github size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="View live project">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}