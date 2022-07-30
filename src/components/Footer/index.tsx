import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import styles from './styles/Footer.module.scss'
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__row}>
        <div>
          <h4>Shop</h4>
          <p className={styles.about}>
          Shop mong muốn đem đến cho khách hàng một lối sống tinh gọn bằng các sản phẩm thời trang tinh tế.
          </p>
        </div>

        <div>
          <h4>Chính sách</h4>
          <p>Hướng dẫn đổi trả</p>
        </div>

        <div>
          <h4>Liên hệ</h4>
          <ul>
            <li><a href="">Hotline: 0123 456 789</a></li>
            <li><a href="">Email: info@shop.com</a></li>
          </ul>
        </div>

        <div>
          <h4>Xã hội</h4>
          <ul className={styles.social}>
            <li><a href="#"><AiOutlineFacebook /></a></li>
            <li><a href="#"><AiOutlineInstagram /></a></li>
            <li><a href="#"><AiOutlineYoutube /></a></li>
          </ul>


        </div>
      </div>
      <p className={styles.copyright}>Copyright ⓒ by Q</p>
    </footer>
  )
}

export default Footer