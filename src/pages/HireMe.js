import { useState } from 'react';
import { Send, User, Mail, Building, Briefcase, DollarSign, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

export default function HireMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-Commerce',
    'API Development',
    'Full Stack Project',
    'Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Less than ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,50,000',
    '₹2,50,000+',
    'Let\'s Discuss'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const apiUrl = '/.netlify/functions/hire'; // Netlify Functions endpoint
        
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', company: '', projectType: '', budget: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Server unavailable. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="page hire-page">
      <div className="hire-header">
        <h1>Hire Me</h1>
        <p>Let's build something amazing together</p>
      </div>

      <div className="hire-content">
        <div className="hire-info">
          <div className="info-card">
            <h2>Let's Work Together</h2>
            <p>
              I'm currently available for freelance projects and full-time opportunities. 
              Whether you need a web application, API development, or technical consulting, 
              I'm here to help bring your ideas to life.
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
                <Mail size={20} />
                <span>lokeshyuvaraj33@gmail.com</span>
              </div>
              <div className="detail-item">
                <Briefcase size={20} />
                <span>Available for Projects</span>
              </div>
            </div>

            <div className="services-list">
              <h3>Services I Offer</h3>
              <ul>
                <li>Full Stack Web Development</li>
                <li>Java & Spring Boot Applications</li>
                <li>React Frontend Development</li>
                <li>RESTful API Design</li>
                <li>Database Design & Optimization</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hire-form-container">
          <form onSubmit={handleSubmit} className="hire-form">
            <h2>Send a Message</h2>
            
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span>{status.message}</span>
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label><User size={16} /> Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label><Mail size={16} /> Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label><Building size={16} /> Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company (optional)"
                />
              </div>
              <div className="form-group">
                <label><Briefcase size={16} /> Project Type</label>
                <select name="projectType" value={formData.projectType} onChange={handleChange}>
                  <option value="">Select project type</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label><DollarSign size={16} /> Budget Range</label>
              <select name="budget" value={formData.budget} onChange={handleChange}>
                <option value="">Select budget range</option>
                {budgetRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label><MessageSquare size={16} /> Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}