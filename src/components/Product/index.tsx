/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { type } from 'os';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from '../../models/product';
// import { getAllP } from '../../features/product/product.slide'
import styles from './Products.module.css';
type ProductProps={
  listProducts:IProduct[];
}
const Products = ({listProducts}:ProductProps) => {
  // const product= useSelector((state: any) => state.product.products)
  // const dispatch  = useDispatch<any>();
  // console.log(product);
  
  // useEffect(()=>{
  //   dispatch(getAllP())
  // },[dispatch])
  // console.log(product);
  return (

    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>WEEKLY BEST</h2>
        </div>
        <div className={styles.product}>
          {listProducts.map((item)=>(
            <Link key={item._id} href={`product/${item._id}`}>
            <div className={styles.item}>
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

            </div>
          </div>
          </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Products