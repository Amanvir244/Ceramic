import React from 'react';

import './Blog.css';
import Sidebar from '../components/Sidebar';
import BlogSection from '../components/BlogSection';
import BlogHeader from '../components/BlogHeader';
import PaginatedBlog from '../components/PaginatedBlog';
function Blog() {
  return (
    <div>
    <div>
      <BlogHeader/>
   </div>
    <div className="main-container">

   
      <BlogSection />
        <Sidebar />
    </div>

     <div>
    <PaginatedBlog/>
    </div>
    </div>
  );
}

export default Blog;
