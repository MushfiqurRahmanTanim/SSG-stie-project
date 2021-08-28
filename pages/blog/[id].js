import React from 'react';

const Post = ({ blog }) => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center gap-3 text-xl text-gray-600 font-mono font-semibold mt-24'>
      <h1>
        {blog.id} {blog.title}
      </h1>
      <h3>{blog.category}</h3>
      <h2> {blog.price}</h2>
      <h2> {blog.description}</h2>
    </div>
  );
};
export const getStaticPaths = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  const paths = data.map(path => {
    return {
      params: { id: path.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return {
    props: {
      blog: data,
    },
  };
};
export default Post;
