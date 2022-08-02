import React from 'react'
import styles from './productDetail.module.scss';
type Props = {}

const ProductDetail = (props: Props) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.heder}>
          <ul className={styles.directional}>
            <li><a href="">Trang chủ</a></li>
            <li>/</li>
            <li>SURFER LOGO TEE</li>
          </ul>
        </div>
        <div className={styles.products_detail}>
          <div className={styles.item_detail}>
            <div className={styles.item_image}>
              <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/072022/1657878495405.jpeg" alt="" />
            </div>
            <div className={styles.item_info}>
              <h1 className={styles.info_name}>SURFER LOGO TEE</h1>
              <div className={styles.info_price}>
                <p>349.000 <span className={styles.small}>đ</span></p>

              </div>
              <div className={styles.row}>
                <div className={styles.info_size}>
                  <h3 className={styles.size_name}>Chọn size:</h3>
                  <ul className={styles.nav_size}>
                    <li><button>S</button></li>
                    <li><button>L</button></li>
                    <li><button>M</button></li>
                    <li><button>XL</button></li>
                  </ul>
                </div>
                <div className={styles.amount}>
                  <div className={styles.amount_name}>
                    <h3>Số lượng:</h3>
                  </div>
                  <div className={styles.amount_handler}>
                    <ul className={styles.amount_btn}>
                      <li><button>-</button></li>
                      <li><button>0</button></li>
                      <li><button>+</button></li>
                    </ul>
                  </div>

                </div>
              </div>


              <div className={styles.btn_add}>
                <button>Thêm Vào Giỏ Hàng</button>
              </div>
              <div className={styles.info_desc}>
                <h3 className={styles.titel_desc}>Chi tiết:</h3>
                <p> Vải Cotton khô Vải mịn, co giãn, chống nhăn xù Áo phông, form rộng vừa phải Bo cổ chắc chắn, ôm cổ Chữ in SSStutter sau lưng và trước ngực, hiệu ứng mặt biển Phong cách Casual, Hangout Mẫu cao 1m80 nặng 64kg, mặc size 3</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail