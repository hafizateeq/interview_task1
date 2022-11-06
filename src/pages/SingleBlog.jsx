import React, { useEffect, useState } from "react";
import styles from "../styles/SingleBlog.module.scss";
import eyeIcon from "../images/icons/Eye.svg";
import blogImg from "../images/blogImg.png";
import blogImg2 from "../images/blogImg2.png";
import { useLocation } from "react-router";
import axios from "axios";

const SingleBlog = () => {
  const [blogData, setBlogData] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`
      );
      setBlogData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.singleBlog_main}>
      <div className={styles.blog_width}>
        <div className={styles.blog_view}>
          <p>Posted on October 6th 2021</p>
          <p>
            <img src={eyeIcon} alt="view" /> <span>563 views</span>
          </p>
        </div>
        <div className={styles.blog_title}>
          <h3>{blogData.Title}</h3>
          <p>
           {blogData.Subtitle}
          </p>
        </div>
      </div>
      <div className={styles.blogImg}>
        <img src={blogData.Image} alt="blog" />
      </div>
      <div className={styles.blog_width}>
        <div className={styles.blog_title}>
          <h4>This is a blog post headline</h4>
          <p>
           {blogData.Article}
          </p>
        </div>
        <div className={`my-5 ${styles.blogImg2}`}>
          <img src={blogData.Image} alt="blog" />
        </div>
        <div className={styles.blog_title}>
          <h4>This is a small blog post headline</h4>
          <p>
            {blogData.Article}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
