import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllP } from '../../features/product/product.slide'
import styles from './Products.module.css'
const Products = () => {
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
          <div className={styles.item}>
           <div className={styles.tranf}>
              <div className={styles.item_image}>
                <img src="https://cdn.ssstutter.com/products/nCRHI1bpbr1ZIsxG/032022/1647313881009.jpeg" alt="" />
              </div>
              <div className={styles.item_size}>
                <button className={styles.add_card}>
                 <a href="">Thêm vào giỏ hàng</a> </button>

              </div>
              </div>
            <div className={styles.item_info}>
              <div>
                <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
              </div>

            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.tranf}>
              <div className={styles.item_image}>
                <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/062022/1656562214790.jpeg" alt="" />
              </div>
              <div className={styles.item_size}>

              <button className={styles.add_card}>
                 <a href="">Thêm vào giỏ hàng</a> </button>


              </div>
            </div>
            <div className={styles.item_info}>
              <div>
                <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
              </div>

            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.tranf}>
              <div className={styles.item_image}>
                <img src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_f9b5296a77c5472c8a7ebd72b9ee863c/feaer/files/images/6ef192da-de64-46d1-9d6c-db2f452a81fe/91_result.webp" alt="" />
              </div>
              <div className={styles.item_size}>

              <button className={styles.add_card}>
                 <a href="">Thêm vào giỏ hàng</a> </button>


              </div>
            </div>
            <div className={styles.item_info}>
              <div>
                <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
              </div>

            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.tranf}>
              <div className={styles.item_image}>
                <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/072022/1658369936512.jpeg" alt="" />
              </div>
              <div className={styles.item_size}>
              <button className={styles.add_card}>
                 <a href="">Thêm vào giỏ hàng</a> </button>


              </div>
            </div>
            <div className={styles.item_info}>
              <div>
                <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.tranf}>
              <div className={styles.item_image}>
                <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/072022/1658369936512.jpeg" alt="" />
              </div>
              <div className={styles.item_size}>
              <button className={styles.add_card}>
                 <a href="">Thêm vào giỏ hàng</a> </button>


              </div>
            </div>
            <div className={styles.item_info}>
              <div>
                <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
              </div>
            </div>
          </div>
          
          <div className={styles.item}>
            <div className={styles.tranf}>
              <div className={styles.item_image}>
                <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/062022/1656562214790.jpeg" alt="" />
              </div>
              <div className={styles.item_size}>

              <button className={styles.add_card}>
                 <a href="">Thêm vào giỏ hàng</a> </button>


              </div>
            </div>
            <div className={styles.item_info}>
              <div>
                <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
              </div>

            </div>
          </div>
          <div className={styles.item}>
           <div className={styles.tranf}>
              <div className={styles.item_image}>
                <img src="https://cdn.ssstutter.com/products/nCRHI1bpbr1ZIsxG/032022/1647313881009.jpeg" alt="" />
              </div>
              <div className={styles.item_size}>
                <button className={styles.add_card}>
                 <a href="">Thêm vào giỏ hàng</a> </button>

              </div>
              </div>
            <div className={styles.item_info}>
              <div>
                <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
              </div>

            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.tranf}>
              <div className={styles.item_image}>
                <img src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_f9b5296a77c5472c8a7ebd72b9ee863c/feaer/files/images/6ef192da-de64-46d1-9d6c-db2f452a81fe/91_result.webp" alt="" />
              </div>
              <div className={styles.item_size}>

              <button className={styles.add_card}>
                 <a href="">Thêm vào giỏ hàng</a> </button>


              </div>
            </div>
            <div className={styles.item_info}>
              <div>
                <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
              </div>

            </div>
          </div>
         

        </div>

      </div>
    </div>
  )
}

export default Products