import { useState } from "react";
import BlogCard from "../components/BlogCard";
import { useEffect } from "react";
import { axiosInstance } from "../api/axios";
import GoUp from "../components/GoUp";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      setLoading(true);
      setError(null);
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get("blogs");
        const data = await response.data;
        setBlogs(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const blogCards = blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />);

  const body = loading ? (
    <span>Loading...</span>
  ) : !error ? (
    blogCards
  ) : (
    <span>{error.message}</span>
  );

  return (
    <section className="flex flex-col items-center gap-4 px-8 relative">
      <h1 className="text-2xl my-4" id="heading">Latest Blogs</h1>
      {body}
      <GoUp />
    </section>
  );
};

export default Home;
