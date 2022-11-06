import React from 'react';
import styles from "../styles/Banner.module.scss";

const Banner = () => {
  return (
    <>
      <div className='row g-0'>
          <div className='col-lg-6 col-md-6 col-xs-12'>
            <div className={styles.banner_back}>
               <h1>Our Blog</h1>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-xs-12'>
              <div className={styles.banner_desc}>
                <h4>Diagnose Car Problems If You Don’t Know Much About Cars</h4>
                <p>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</p>
              </div>
          </div>
      </div>
    </>
  )
}

export default Banner;