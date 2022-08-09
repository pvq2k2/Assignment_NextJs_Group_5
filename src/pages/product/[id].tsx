/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllProduct, readProduct } from "../../../api/product";
import { addToCart } from "../../features/cart/cart.slice";
import { IProduct } from "../../models/product";
import styles from "./productDetail.module.css";
type DetailProductProps = {
  detailProduct: IProduct;
};

const ProductDetail = ({ detailProduct }: DetailProductProps) => {
  const listCart = useSelector((state: any) => state.cart.cartItems);
  const isLogged = useSelector((state: any) => state.auth.isLogged);
  const dispatch = useDispatch<any>();
  // let [quantity, setQuantity] = useState(detailProduct.quantity!);


  // console.log("size gốc", detailProduct);
  const changeSize = (kc: any) => {
    detailProduct = { ...detailProduct, size: kc };
    console.log("size change ", detailProduct);
  };



  // const Decrement = (quantity: any) => {
  //   if (detailProduct.quantity! > 1 || quantity > 1) {
  //     detailProduct = { ...detailProduct, quantity: detailProduct.quantity!--, writable: true };
  //     setQuantity(--quantity);
  //     console.log("Decrement", detailProduct);
  //   } else {
  //     toast.error("Số lượng phải lớn hơn 1", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // };
  // const Increment = (quantity: any) => {
  //   detailProduct = { ...detailProduct, quantity: detailProduct.quantity!++, writable: true };
  //   setQuantity(++quantity);
  //   console.log("Increment", detailProduct);
  // };
  const onHandlerAddToCart = (detailProduct: any) => {
    if(isLogged) {
      dispatch(addToCart(detailProduct))
      toast.success("Thêm sản phẩm vào giỏ hàng thành công!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Bạn phải đăng nhập mới có thể thêm vào giỏ hàng!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }



      // dispatch(addToCart(detailProduct))
      // toast.success("Thêm sản phẩm vào giỏ hàng thành công!", {
      //   position: "bottom-left",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });


      

  };
  // console.log("list cart ", listCart);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.heder}>
          <ul className={styles.directional}>
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
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
                <p>
                  {detailProduct.price} <span className={styles.small}>đ</span>
                </p>
              </div>
              <div className={styles.row}>
                <div className={styles.info_size}>
                  <h3 className={styles.size_name}>Chọn size:</h3>
                  <ul className={styles.nav_size}>
                    <li>
                      <input
                        type="radio"
                        name="size"
                        id="s"
                        hidden
                        className="relative w-full h-full"
                      />
                      <label htmlFor="s" onClick={() => changeSize("S")}>
                        S
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="size"
                        id="l"
                        hidden
                        className="relative w-full h-full"
                      />
                      <label htmlFor="l" onClick={() => changeSize("L")}>
                        L
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="size"
                        id="m"
                        hidden
                        className="relative w-full h-full"
                      />
                      <label htmlFor="m" onClick={() => changeSize("M")}>
                        M
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="size"
                        id="xl"
                        hidden
                        className="relative w-full h-full"
                      />
                      <label htmlFor="xl" onClick={() => changeSize("XL")}>
                        XL
                      </label>
                    </li>
                  </ul>
                </div>
                {/* <div className={styles.quantity}>
                  <span className={styles.title}>Số lượng</span>
                  <div className={styles.box_control}>
                    <button id="down-quantity" className={styles.down_quantity} onClick={() => Decrement(quantity)}>
                      <AiOutlineMinus />
                    </button>
                    <span className={styles.input_quantity}>{quantity}</span> */}
                    {/* <input id="input-quantity" type="text" role="spinbutton" aria-valuenow={1} defaultValue={1} className="border w-14 h-8 text-base font-normal box-border text-center cursor-text outline-none" /> */}
                    {/* <button id="up-quantity" className={styles.up_quantity} onClick={() => Increment(quantity)}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div> */}
              </div>

              <div className={styles.btn_add}>
                <button onClick={() => onHandlerAddToCart(detailProduct)}>
                  Thêm Vào Giỏ Hàng
                </button>
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
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllProduct();
  const paths = data.map((product) => ({ params: { id: product._id } }));
  console.log(paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id = context.params?.id as string;
  const detailProduct = await readProduct(id);

  return {
    props: {
      detailProduct,
    },
    revalidate: 60,
  };
};
export default ProductDetail;
