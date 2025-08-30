import { FaGithub } from 'react-icons/fa';
import './GitHub.css';

const GitHubLink = () => {
  return (
    <a
      href="https://github.com/your-github-username"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Profile"
      className="github-icon"
    >
      <FaGithub size={24} color="#000" />
    </a>
  );
};

export default GitHubLink;