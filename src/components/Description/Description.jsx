import React from 'react';
import './Description.css';

const BumbleDescription = () => {
  const tags = ['Full-Stack Development', 'Android', 'DevOps', 'Machine Learning', 'UI/UX', 'Fitness'];

  return (
    <section className="bumble-description">
      <div className="description-content">
        <h1>Rahul, 23</h1>
        <p>
          Passionate software developer, avid learner, and tech enthusiast. I also love working out and travelling by the way.
        </p>
      </div>
      <div className="description-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </section>
  );
};

export default BumbleDescription;
