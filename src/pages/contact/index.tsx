import Link from 'next/link';
import React from 'react';
import style from './contact.module.css';
import { BsEnvelope, BsTelephone, BsPinMap } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className='contact'>

        <div className='grid lg:grid-cols-2  md:grid-cols-1 py-[40px]  '>
          <div className='px-[30px]'>
            <h4 className='text-[25px] font-extrabold text-slate-500'>
              NƠI GIẢI ĐÁP TOÀN BỘ MỌI THẮC MẮC CỦA BẠN ?
            </h4>
            <p className='pt-[20px]'>
              Với sứ mệnh "Khách hàng là ưu tiên số 1" chúng tôi luôn mạng lại
              giá trị tốt nhất
            </p>
            <p></p>
            <div className='flex items-center my-2 pt-3'>
              <BsPinMap className='mr-[10px]' />
             <b className='mr-[5px]'>Địa chỉ :</b> Cau Giay District, Hanoi, Vietnam
            </div>
            <div className='flex items-center my-2'>
              <BsEnvelope className='mr-[10px]' />
             <b className='mr-[5px]'>Email:</b> {' '}
              <Link href='/' className='hover:text-green-600'>
              info@shop.com
              </Link>
            </div>{' '}
            <div className='flex items-center my-2'>
              <BsTelephone  className='mr-[10px]'/>
              <b className='mr-[5px]'>Hotline:</b>1900 6750
            </div>
            <h4 className='font-black text-[15px] pt-[20px]'>Liên hệ với chúng tôi</h4>
            <div className=' pt-3 ml-[17px]'>
              <form action=''>
                <input
                  type='text'
                  className=' bg-white border border-gray-200 text-black h-[50px] mx-[10px] my-[5px]  placeholder:text-gray-300 placeholder:italic  w-96 px-5 py-2  outline-none '
                  placeholder='Họ và tên '
                />
                <input
                  type='text'
                  className=' bg-white border border-gray-200 text-black h-[50px] mx-[10px] my-[5px]  placeholder:text-gray-300 placeholder:italic  w-96 px-5 py-2  outline-none '
                  placeholder='Email '
                />
                <input
                  type='number'
                  className=' bg-white border border-gray-200 text-black h-[50px] mx-[10px] my-[5px]  placeholder:text-gray-300 placeholder:italic  w-96 px-5 py-2  outline-none '
                  placeholder='Điện thoại'
                />
                <textarea
                  id='message'
                  rows={4}
                  cols={4}
                  className=' bg-white border border-gray-200 text-black mx-[10px] my-[5px] font-quicksand  placeholder:text-gray-300   w-96 px-5 py-2  h-[100px] outline-none'
                  placeholder='Nội dung'
                ></textarea>
                <p></p>
                <div className='pt-[10px]'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
                  Gửi thông tin
                </button>
                </div>

              </form>
            </div>
          </div>
          <div className='mx-[30px] pt-[30px]'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.505359537!2d105.746865!3d21.02763025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb070185ba1%3A0x4e6baae5cfbabd39!2sBZCOM!5e0!3m2!1svi!2s!4v1659370906589!5m2!1svi!2s'
              width='100%'
              height='600'
              style={{ border: 5 }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
