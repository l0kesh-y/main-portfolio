import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight, Code, Zap, ExternalLink, Award } from 'lucide-react';
import lokeshImg from '../assets/lokesh.jpg';

export default function Home() {
  const profiles = [
    {
      name: 'GitHub',
      username: '@l0kesh-y',
      image: 'https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp',
      stats: [
        { label: 'Repos', value: '30+' },
        { label: 'Contributions', value: '130+' }
      ],
      url: 'https://github.com/l0kesh-y',
      color: '#171515'
    },
    {
      name: 'LinkedIn',
      username: '@l0kesh-y',
      image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&h=200&fit=crop',
      stats: [
        { label: 'Connections', value: '800+' },
        { label: 'Posts', value: '10+' }
      ],
      url: 'https://www.linkedin.com/in/l0kesh-y/',
      color: '#0077B5'
    },
    {
      name: 'LeetCode',
      username: '@lokesh-y',
      image: 'https://assets.leetcode.com/static_assets/public/images/LeetCode_Sharing.png',
      stats: [
        { label: 'Solved', value: '450+' },
        { label: 'Ranking', value: '30%' }
      ],
      url: 'https://leetcode.com/u/lokesh-y/',
      color: '#FFA116'
    },
    {
      name: 'HackerRank',
      username: '@lokeshyuvaraj33',
      image: 'https://cdn.nwe.io/files/x/62/37/c30122710aaaf27ba163584f6194.png',
      stats: [
        { label: 'Stars', value: '5 Star' },
        { label: 'Domain', value: 'SQL' }
      ],
      url: 'https://www.hackerrank.com/profile/lokeshyuvaraj33',
      color: '#00EA64'
    },
    {
      name: 'GeeksforGeeks',
      username: '@lokeshyuvaraj33',
      image: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg',
      stats: [
        { label: 'Rank', value: '2nd' },
        { label: 'Problems', value: '500+' }
      ],
      url: 'https://www.geeksforgeeks.org/user/lokeshyuvaraj33/',
      color: '#2F8D46'
    }
  ];
  return (
    <div className="page home-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Lokesh</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Web Developer</h2>
            <p className="hero-description">
              I craft exceptional digital experiences through clean code, innovative solutions, 
              and cutting-edge technologies. Passionate about building scalable applications 
              that make a real impact.
            </p>
            
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                <Code size={20} />
                View My Work
                <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                <Zap size={20} />
                About Me
              </Link>
            </div>

            <div className="social-links">
              <a 
                href="https://github.com/l0kesh-y" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/l0kesh-y/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:lokeshyuvaraj33@gmail.com" 
                className="social-link"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-image">
              <img src={lokeshImg} alt="Lokesh - Full Stack Java Developer" />
            </div>
          </div>
        </div>
      </div>

      <div className="quick-stats">
        <div className="stat-item">
          <h3>50+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-item">
          <h3>3+</h3>
          <p>Hackathons Participated</p>
        </div>
        <div className="stat-item">
          <h3>100+</h3>
          <p>LeetCode Problems Solved</p>
        </div>
        <div className="stat-item">
          <h3>10+</h3>
          <p>Technologies Mastered</p>
        </div>
      </div>

      {/* My Profiles Section */}
      <div className="profiles-section">
        <div className="profiles-header">
          <h2>My Profiles</h2>
          <p>Connect with me across different platforms and explore my coding journey, professional network, and achievements.</p>
        </div>
        
        <div className="profiles-grid">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <div className="profile-card-image">
                <img src={profile.image} alt={profile.name} />
                <div className="profile-card-badge" style={{ background: profile.color }}>
                  {profile.name === 'GitHub' && <Github size={20} />}
                  {profile.name === 'LinkedIn' && <Linkedin size={20} />}
                  {profile.name === 'LeetCode' && <Code size={20} />}
                  {profile.name === 'HackerRank' && <Zap size={20} />}
                  {profile.name === 'GeeksforGeeks' && <Award size={20} />}
                </div>
              </div>
              
              <div className="profile-card-content">
                <h3>{profile.name}</h3>
                <p className="profile-username">{profile.username}</p>
                
                <div className="profile-stats">
                  {profile.stats.map((stat, i) => (
                    <div key={i} className="profile-stat">
                      <span className="stat-label">{stat.label}</span>
                      <span className="stat-value">{stat.value}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href={profile.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="profile-visit-btn"
                  style={{ background: profile.color }}
                >
                  <ExternalLink size={16} />
                  Visit Profile →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}