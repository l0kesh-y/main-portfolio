import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Import project images
import aiLearningImg from '../assets/lokesh.jpg';
import codeVerseImg from '../assets/Rapid-min.png';
import newsAnalyzerImg from '../assets/lokesh.jpg';
import portfolioImg from '../assets/image.png';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Learning Assistant',
      description: 'An intelligent learning assistant powered by AI to help students learn more effectively. Features personalized learning paths, progress tracking, and interactive quizzes.',
      image: aiLearningImg,
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      github: 'https://github.com/l0kesh-y/AI-LEARNING_ASSISTANT',
      live: 'https://ai-learning-assistant-cu4a.onrender.com'
    },
    {
      id: 2,
      title: 'CodeVerse AI',
      description: 'An AI-powered code analysis and generation platform. Helps developers write better code with intelligent suggestions and automated code reviews.',
      image: codeVerseImg,
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'AI API', 'Express'],
      github: 'https://github.com/l0kesh-y/CodeVerse_AI',
      live: 'https://codeverse-ai-lokesh.onrender.com'
    },
    {
      id: 3,
      title: 'AI News Analyzer',
      description: 'Real-time news analysis platform using AI to categorize, summarize, and analyze news sentiment. Features automated content processing and trend detection.',
      image: newsAnalyzerImg,
      category: 'backend',
      technologies: ['Node.js', 'Express', 'AI/ML', 'MongoDB'],
      github: 'https://github.com/l0kesh-y/ai-news-analyzer',
      live: 'https://ai-newsanalyzer.onrender.com'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with dark/light theme toggle, smooth animations, and contact form integration. Built with React and deployed on Netlify.',
      image: portfolioImg,
      category: 'frontend',
      technologies: ['React', 'CSS3', 'JavaScript', 'Netlify'],
      github: 'https://github.com/l0kesh-y/main-portfolio',
      live: 'https://lokesh-portfolio.netlify.app'
    },
    {
      id: 5,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product catalog, shopping cart, payment integration, and order management system.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/Lokesh777777/ecommerce-app',
      live: 'https://github.com/Lokesh777777'
    },
    {
      id: 6,
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and progress tracking. Includes role-based access control.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      category: 'fullstack',
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/Lokesh777777/task-manager',
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