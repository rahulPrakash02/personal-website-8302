import { FaLinkedin } from 'react-icons/fa';
import './Linkedin.css';

const LinkedInLink = () => {
  return (
    <a 
      href="https://www.linkedin.com/in/your-linkedin-username" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
      className="linkedin-icon"
    >
      <FaLinkedin size={24} color="#0A66C2" />
    </a>
  );
};

export default LinkedInLink;