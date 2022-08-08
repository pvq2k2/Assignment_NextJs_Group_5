/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './Banner.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Arrow from './arrow';
import { ISlide } from '../../models/slide';
type sliderProps = {
  listSliders:ISlide[];
}

const Banner = ({listSliders}: sliderProps) => {
  console.log(listSliders)
    const settings = {
        autoplay: true,
        infinite: true,
        nextArrow: <Arrow direction="right" onClick={() => {}} />,
        prevArrow: <Arrow onClick={() => {}} />,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrow: false,
              dots: true
            }
          },
        ]
      };
      return (
        <div className={styles.banner}>
             <section>
          <ul id="banner" className={styles.banner__box}>
            <Slider {...settings}>
              {listSliders.map((item)=>(
                <li key={item._id} className={styles.item}>
                {/* <a
                  href={""}
                  title={"title"}
                  style={{
                    backgroundImage: `${item.img}`,
                  }}
                  target=""
                  rel="noreferrer"
                /> */}
                <img src={item.img} alt="" />
              </li>
              ))}
            </Slider>
          </ul>
        </section>
        </div>
      );
}

export default Banner