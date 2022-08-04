import React, { useEffect } from 'react'
import { useProduct } from '../../Hook/products';


import styles from './Products.module.css'
const Products = () => {
  const { data, error } = useProduct()

  console.log(data);

  // const dataNew = data.filter((item:any)=>item.status == true)
  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to loading</div>

  return (

    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>WEEKLY BEST</h2>
        </div>
        <div className={styles.product}>

          <div className={styles.item}>
            {data.map((item: any) => (
              <div className={styles.tranf} key={item._id}>
                <div className={styles.item_image}>
                  <img src={item.img} alt="" />
                </div>
                <div className={styles.item_size}>
                  <button className={styles.add_card}>
                    <a href="">Thêm vào giỏ hàng</a> </button>


                </div>
                <div className={styles.item_info}>
                  <div>
                    <a href='' className={styles.item_info_name}> {item.name}</a>
                    <p className={styles.item_info_price}>{item.price} <span className={styles.currency_symbol}>₫</span></p>
                  </div>
                </div>
              </div>

            ))}
          </div>



        </div>

      </div>
    </div>
  )
}

export default Products