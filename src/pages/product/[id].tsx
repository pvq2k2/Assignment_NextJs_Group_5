import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react'
import { getAllProduct, readProduct } from '../../../api/product';
import { IProduct } from '../../models/product';
import styles from './productDetail.module.css';
type DetailProductProps = {
  detailProduct: IProduct;
}

const ProductDetail = ({detailProduct}: DetailProductProps) => {
  
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.heder}>
          <ul className={styles.directional}>
            <li><Link href="/">Trang chủ</Link></li>
            <li>/</li>
            <li>{detailProduct.name}</li>
          </ul>
        </div>
        <div className={styles.products_detail}>
          <div className={styles.item_detail}>
            <div className={styles.item_image}>
              <img src={detailProduct.img} alt="" />
            </div>
            <div className={styles.item_info}>
              <h1 className={styles.info_name}>{detailProduct.name}</h1>
              <div className={styles.info_price}>
                <p>{detailProduct.price} <span className={styles.small}>đ</span></p>

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
                <p>{detailProduct.description}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllProduct();
  const paths = data.map(product =>  ({ params: { id: product._id } }));
  console.log(paths);
  
  return {
      paths,
      fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id as string;
  const detailProduct = await readProduct(id);

  
  return {
      props: {
        detailProduct,
      },
      revalidate: 60,
  };
};
export default ProductDetail