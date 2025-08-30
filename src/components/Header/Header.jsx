import React from 'react';
import './Header.css';
import LinkedInLink from '../Linkedin/Linkedin';
import GitHubLink from '../GitHub/GitHub';

const Header = () => {
  return (
    <header className="top-toolbar">
      <div className="toolbar-logo">
        <span className="logo-text">Rahul Prakash</span>
      </div>
      <nav className="toolbar-nav">
      <LinkedInLink />
      <GitHubLink />
      </nav>
    </header>
  );
};

export default Header;
