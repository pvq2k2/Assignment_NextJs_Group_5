/* eslint-disable @next/next/no-img-element */
import styles from "./styles/Header.module.scss";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineShoppingBag } from "react-icons/md";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineBars
} from "react-icons/ai";
import Image from "next/image";
type Props = {};

const Header = (props: Props) => {
  const boxCart = useRef<HTMLDivElement>(null);
  const navBar = useRef<HTMLDivElement>(null);
  const boxUser = useRef<HTMLDivElement>(null);
  const boxSearch = useRef<HTMLDivElement>(null);
  const [showModelCart, setShowModelCart] = useState<Boolean>(false);
  const [showModelUser, setShowModelUser] = useState<Boolean>(false);
  const [showModelSearch, setShowModelSearch] = useState<Boolean>(false);
  const [showNav, setShowNav] = useState<Boolean>(false);

  useEffect(() => {
    const boxCartElement = boxCart.current!;
    if (showModelCart) {
      boxCartElement.style.right = '0px';
    } else {
      boxCartElement.style.right = '-100%';
    }
  }, [showModelCart])

  useEffect(() => {
    const navBarElement = navBar.current!;
    if (showNav) {
      navBarElement.style.left = '0px';
    } else {
      navBarElement.style.left = '-100%';
    }
  }, [showNav])


  useEffect(() => {
    const boxUserElement = boxUser.current!;
    if (showModelUser) {
      boxUserElement.style.display = 'block';
    } else {
      boxUserElement.style.display = 'none';
    }
  }, [showModelUser])

  useEffect(() => {
    const boxSearchElement = boxSearch.current!;
    if (showModelSearch) {
      boxSearchElement.style.display = 'block';
    } else {
      boxSearchElement.style.display = 'none';
    }
  }, [showModelSearch])

  return (
    <header className={styles.header}>
      <div className={styles.header_top}>
        <div onClick={() => setShowNav(!showNav)} className={styles.ic_bar}>
          <AiOutlineBars className={styles.ic} />
        </div>
        <div className={styles.logo}>
          <h3>Shop</h3>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Bạn cần tìm gì ?" />
          <AiOutlineSearch className={styles.ic} />
        </div>
        <div className={styles.box_ic}>
        <div onClick={() => setShowModelSearch(!showModelSearch)} className={styles.ic_search}>
        <AiOutlineSearch className={styles.ic} />
        </div>
          <div onClick={() => setShowModelUser(!showModelUser)} className={styles.user}>
            <AiOutlineUser className={styles.ic} />
            <div ref={boxUser} className={styles.box}>
              <ul>
                <li>
                  <a href="#">Đăng nhập</a>
                </li>
                <li>
                  <a href="#">Đăng ký</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.cart}>
            {/* cái này để lmj em
             cái này là cái thằng chứa icon với cái box kia á
             được chưa e
             lú cái đầu a
             :))
            sao e lại để ở thằng chứa nó nhỉ
            núc em code lú á
            
            */}
            <MdOutlineShoppingBag className={styles.ic}  onClick={() => setShowModelCart(!showModelCart)} />
            <div ref={boxCart} className={styles.box}>
              <div onClick={(e) => { e.stopPropagation(); setShowModelCart(!showModelCart)}} className={styles.overlay}></div> 
              {/* ?? cái nền đen ý a vì cái này ở trên nút bấm e em cũng lm 1 cái tương tự mà nó k bị cơ */}
              {/* ý e là khi click vào cái nền đen thì nó cũng close đúng k đr a
              
              vậy e đọc thêm cái này nhé z-index
              em có để z index mà a
              mà nó có được đâu mà


              */}
              <div className={styles.content}>
                <div className={styles.h_cart}>
                  <div className={styles.close}>
                    <AiOutlineClose onClick={(e) => { e.stopPropagation(); setShowModelCart(!showModelCart)}} className={styles.ic} />
                  </div>
                  <div className={styles.title}>
                    <span>Cart</span>
                  </div>
                </div>
                <div className={styles.c_cart}>
                  <div className={styles.item}>
                    <div className={styles.img}>
                      <img
                        src="https://i.postimg.cc/PxCCKf4S/121-result.jpg"
                        alt=""
                      />
                    </div>
                    <div className={styles.detall}>
                      <div className={styles.name}>
                        <h3>Product A</h3>
                      </div>
                      <div className={styles.price}>
                        <span>200000đ</span>
                      </div>
                      <div className={styles.quantity}>
                        <span className={styles.title}>Số lượng</span>
                        <div className={styles.box_control}>
                          <button
                            id="down-quantity"
                            className={styles.down_quantity}
                          >
                            <AiOutlineMinus />
                          </button>
                          <span className={styles.input_quantity}>2</span>
                          {/* <input id="input-quantity" type="text" role="spinbutton" aria-valuenow={1} defaultValue={1} className="border w-14 h-8 text-base font-normal box-border text-center cursor-text outline-none" /> */}
                          <button
                            id="up-quantity"
                            className={styles.up_quantity}
                          >
                            <AiOutlinePlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.b_cart}>
                  <button>Check Out !</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav ref={navBar} className={styles.navbar}>
        <div onClick={() => setShowNav(!showNav)} className={styles.overlay}></div>
        <ul>
          <li>
            <a href="#">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="#">
              Sản phẩm
            </a>
          </li>
          <li>
            <a href="#">
              Giới thiệu
            </a>
          </li>
          <li>
            <a href="#">
              Liên hệ
            </a>
          </li>
        </ul>
      </nav>

      <div ref={boxSearch} className={styles.box_search}>
        <div className={styles.search}>
          <input type="text" placeholder="Bạn cần tìm gì ?" />
          <AiOutlineSearch className={styles.ic} />
        </div>
      </div>
    </header>
  );
};

export default Header;
