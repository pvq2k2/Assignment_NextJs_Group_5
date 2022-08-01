import Link from 'next/link';
import React from 'react';
import style from './contact.module.scss';

const Contact = () => {
  return (
    <div className={style.contact}>
      {/* <section>
            <ul className='head-top'>
                 <li><Link href="">Trang chủ</Link></li> 
                 <span className="cens">/</span>
                <li><Link href="">Liên hệ</Link></li>
            </ul>
        </section> */}

      <div className='left'>
        <div className='top-left'>
          <h4>NƠI GIẢI ĐÁP TOÀN BỘ MỌI THẮC MẮC CỦA BẠN?</h4>
          <p>
            Với sứ mệnh "Khách hàng là ưu tiên số 1" chúng tôi luôn mạng lại giá
            trị tốt nhất
          </p>
          <p>
            <b>Địa chỉ:</b>70 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh
          </p>
          <a href=''>
            <b>hotline:</b> 19003847
          </a>
          <a href=''>
            <b>Email:</b> daongoclinh22@gmail.com
          </a>
        </div>
        <div className="form">
            <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>

         <input type="text" name="" id="" placeholder='họ và tên '/>
         <input type="email" name="" id="" placeholder='Email' />
         <input type="number" name="" id="" placeholder='Số điện thoại' />
         <textarea name="" id="" cols={30} rows={10} placeholder="Nội dung"></textarea>   
        </div>
      </div>

      <div className='right'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904611732553!2d105.81388241542348!3d21.03650239288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gY8O0bmcgbmdo4buHIFNBUE8!5e0!3m2!1svi!2s!4v1555900531747!5m2!1svi!2s'
          width='700px'
          height='450'
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
