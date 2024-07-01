import { Link } from "react-router-dom";

const BlogCard = ({blog}) => {
  return (
    <div className="border border-slate-300 flex flex-col-reverse md:flex-row items-center gap-4 p-4 w-full md:w-2/3 rounded-lg bg-blue-800 bg-opacity-40 shadow-lg">
      <div className="md:w-3/4 flex flex-col md:gap-4">
        <h2 className="text-2xl font-semibold">{blog.title}</h2>
        <p>
          {blog.content.substring(0, 85)}...
          &nbsp;
          <Link to={`blog/${blog.id}`} className="text-sm text-white">Read more</Link>
        </p>
        <div>
          <p className="text-xl">By:- <span className="italic">{blog.author}</span></p>
        </div>
      </div>
      <div>
        <img
          src={blog.image}
          alt={blog.title}
          className="md:w-[200px]"
        />
      </div>
    </div>
  );
};

export default BlogCard;
