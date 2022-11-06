import React from "react";
import styles from "../styles/Featured.module.scss";
import featuredImg from "../images/featuredImg.png";
import eyeIcon from "../images/icons/Eye.svg";
import arrowIcon from "../images/icons/Arrow.png";

const Featured = () => {
  return (
    <div className={styles.featured_main}>
      <div className={`${styles.featured_card} card`}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src={featuredImg}
              className={`img-fluid rounded-start ${styles.featured_img}`}
              alt="Featured blog"
            />
          </div>
          <div className="col-md-9">
            <div className={`${styles.card_body} card-body`}>
              <div className={styles.top_flex}>
                <div className={styles.blog_view}>
                  <p>Posted on October 6th 2021</p>
                  <p>
                    <img src={eyeIcon} alt="view" /> <span>563 views</span>
                  </p>
                </div>
                <div className={styles.featured_title}>
                  <p>FEATURED</p>
                </div>
              </div>
              <div className={styles.card_desc}>
                <h5>Should I Buy a New Car or Lease a New Car in 2021?</h5>
                <p className="card-text">
                  We provide a full range of front end mechanical repairs for
                  all makes and models of cars, no matter the cause. This
                  includes, We provide a full range of front end mechanical.
                </p>
              </div>
              <div className={styles.read_more}>
                <p>
                  Read More
                  <span>
                    <img src={arrowIcon} alt="arrow" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
