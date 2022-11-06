import React, { useEffect, useState } from "react";
import styles from "../styles/BlogList.module.scss";
import eyeIcon from "../images/icons/Eye.svg";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { blogCount } from "../redux/countSlice";

const BlogList = () => {
  const [blog, setBlog] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [count, setCount] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs"
      );
      setBlog(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const selectCount = (id) => {
    const countArr = [{ id: 1, count: 0 }];

    for (let i = 0; i < countArr.length; i++) {
      if (countArr[i].id == id) {
        countArr[i].count = countArr[i].count + 1;
      } else {
        countArr.push({ id: id, count: 1 });
      }
    }
    dispatch(blogCount(countArr));
  };
  return (
    <div className={styles.blogList_main}>
      <div className={`${styles.blogList_flex}`}>
        <div className="row">
          {(loadMore ? blog : blog.slice(0, 6)).map((data, ind) => (
            <>
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="col-lg-4 col-md-6 col-xs-12">
                  <div className={`${styles.blogList_card} card`} key={ind}>
                    <img src={data.Image} className="card-img-top" alt="blog" />
                    <div className="card-body p-0">
                      <div className={styles.blog_view}>
                        <p>Posted on October 6th 2021</p>
                        <p>
                          <img src={eyeIcon} alt="view" />{" "}
                          <span>563 views</span>
                        </p>
                      </div>
                      <div
                        className={styles.blogList_desc}
                        onClick={() => {
                          selectCount(data.id);
                          // navigate(`/single-blog/${data.id}`);
                        }}
                      >
                        <h5>{data.Title}</h5>
                        <p>{data.Subtitle.substring(0, 150)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      <div className={styles.loadMore_btn}>
        {loadMore ? (
          <button onClick={() => setLoadMore(!loadMore)}>Load Less</button>
        ) : (
          <button onClick={() => setLoadMore(!loadMore)}>Load More</button>
        )}
      </div>
    </div>
  );
};

export default BlogList;
