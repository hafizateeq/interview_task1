import React from 'react';
import Banner from '../components/Banner';
import BlogList from '../components/BlogList';
import Featured from '../components/Featured';

const Blog = () => {
  return (
    <div>
      <Banner />
      <Featured />
      <BlogList />
    </div>
  )
}

export default Blog