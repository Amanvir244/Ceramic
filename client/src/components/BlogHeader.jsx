import React from 'react';
import './BlogHeader.css';

const BlogHeader = () => {
  const backgroundImage = '/images/bg1.jpg'; 
  return (
    <section
      className="blog-header"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <h1>Blog</h1>
    </section>
  );
};

export default BlogHeader;
