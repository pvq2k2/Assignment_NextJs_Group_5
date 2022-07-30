import React from 'react'
import styles from './Banner.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Arrow from './arrow';
type Props = {}

const Banner = (props: Props) => {
    const settings = {
        autoplay: true,
        infinite: true,
        nextArrow: <Arrow direction="right" onClick={() => {}} />,
        prevArrow: <Arrow onClick={() => {}} />,
      };
      return (
        <div className={styles.banner}>
             <section>
          <ul id="banner" className={styles.banner__box}>
            <Slider {...settings}>
              <li className={styles.item}>
                <a
                  href={""}
                  title={"title"}
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/assignment22/image/upload/v1658670701/banner2_twinww.jpg)`,
                  }}
                  target=""
                  rel="noreferrer"
                />
              </li>
    
              <li className={styles.item}>
                <a
                  href={""}
                  title={"title"}
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/assignment22/image/upload/v1658670701/banner1_ca3cer.jpg)`,
                  }}
                  target=""
                  rel="noreferrer"
                />
              </li>
    
              <li className={styles.item}>
                <a
                  href={""}
                  title={"title"}
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/assignment22/image/upload/v1658676120/Aristino-layout-website_1920x850x0x0x2_ivahb4.png)`,
                  }}
                  target=""
                  rel="noreferrer"
                />
              </li>
            </Slider>
          </ul>
        </section>
    
        </div>
      );
}

export default Banner