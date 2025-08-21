import React from 'react';
import BlogCard from './BlogCard';
import './BlogSection.css';

const BlogSection = () => {
  return (
    <div className="blog-section">
      <BlogCard
        image="/images/company.jpg"
        title="What affects the quality of ceramic products?"
        date="17 August 2022"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis.Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla."
      />
     
      <BlogCard
        image="/images/adult2.jpg"
        title="How ceramics are made"
        date="17 August 2022"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis.Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla."
      />
    </div>
  );
};

export default BlogSection;
