import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../api/axios";
import { BsLinkedin } from "react-icons/bs";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinIcon, LinkedinShareButton } from "react-share";
import { BiLeftArrowCircle } from "react-icons/bi";


const SingleBlog = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState({})

    const shareBlog = window.location.href
    
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axiosInstance.get(`blogs/${id}`);
                const data = await response.data;
                setBlog(data)
            } catch (error) {
                console.log(error)
              } 
            };
            fetchBlog();
        
    }, [])

    return (
        <div className="flex flex-col items-center justify-center mt-10 w-full p-4 border border-white rounded-lg bg-blue-300">
            <Link to='..' className="flex items-center justify-start gap-2 w-full mb-4 text-cyan-700 text-lg"><BiLeftArrowCircle /> Go Back</Link>
            <h1 className="w-full text-xl sm:text-4xl font-bold">{blog.title}</h1>
            <div className="w-full mt-4 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-2">
                <p>By : <span className="italic font-semibold text-lg">{blog.author}</span></p>
                <Link to={blog.linkedIn} target="_blank" className="px-4 py-2 rounded-2xl bg-blue-600 text-white flex items-center gap-3">Go to LinkedIn <BsLinkedin /></Link>
            </div>
            
            <div className="flex flex-col-reverse md:flex-row items-center gap-6 my-8">
                <p className="font-medium text-lg">{blog.content}</p>
                <img src={blog.image} alt={blog.title} />
            </div>
            <div className="w-full flex flex-col gap-2">
                <p className="italic">Share this blog:</p>
                <div className="w-full flex items-center justify-start gap-2">
                    <FacebookShareButton url={shareBlog}>
                        <FacebookIcon size={32} round/>
                    </FacebookShareButton>
                    <TwitterShareButton url={shareBlog}>
                        <TwitterIcon size={32} round/>
                    </TwitterShareButton>
                    <WhatsappShareButton url={shareBlog}>
                        <WhatsappIcon size={32} round/>
                    </WhatsappShareButton>
                    <LinkedinShareButton url={shareBlog}>
                        <LinkedinIcon size={32} round/>
                    </LinkedinShareButton>
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;