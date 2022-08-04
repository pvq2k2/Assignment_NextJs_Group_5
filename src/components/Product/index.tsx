import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getAllP } from '../../features/product/product.slide'
import styles from './Products.module.css'
const Products = () => {


  return (

    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>WEEKLY BEST</h2>
        </div>
        <div className={styles.product}>
          {/* {product.map((item,index)=>(
            <div className={styles.item} key={index}>
           <div className={styles.tranf}>
              <div className={styles.item_image}>
                <img src={item.img} alt="" />
              </div>
              <div className={styles.item_size}>
                <button className={styles.add_card}>
                 <a href="">Thêm vào giỏ hàng</a> </button>

              </div>
              </div>
            <div className={styles.item_info}>
              <div>
                <a href={`/product/${item.slug}`} className={styles.item_info_name}> {item.name}</a>
                <p className={styles.item_info_price}>{item.price} <span className={styles.currency_symbol}>₫</span></p>
              </div>

            ))}
          </div>
          ))} */}
        </div>

      </div>
    </div>
  )
}

export default Products