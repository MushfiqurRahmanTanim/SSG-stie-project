import Link from 'next/link'
import Image from 'next/image'
const BlogList = ({blogs}) => {
  return (
    <div className="bg-red-200 py-10 px-5">
    <div className="flex flex-col gap-10 justify-center items-center container mx-auto ">
      <h1>List of blog</h1>
      {blogs.map((blog)=>{
         return (
           <div key={blog.id} className="py-4 px-2 bg-white w-1/2 self-center text-center rounded-md hover:bg-green-200 transition">
              <Link href={`blog/${blog.id}`}>
              <a>
              <h1>{blog.id} {blog.title}</h1>
              <h4>{blog.category}</h4>
              <h1>${blog.price}</h1>
              </a>
              </Link>
              <hr />
           </div>
         )
      })}
      </div>
    </div>
  )
}

export default BlogList

export const getStaticProps = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return{
    props:{
      blogs: data.slice(0, 10)}
  }
}
