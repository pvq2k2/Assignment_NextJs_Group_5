/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { signup } from '../../../api/auth';
type Signup = {};
type Inputs = {
  name: string;
  email: string;
  password: string;
};
const Signup = (props: Signup) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
    try {
      await signup(values);
      toast.success("Đăng ký thành công !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push("/signin");
      }, 1000)
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div>
      <div className='xl:w-[1200px] xl:mx-auto mt-10 shadow-inner rounded-lg mx-3 pb-[20px]'>
        <div className='content grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 shadow-lg'>
          <section className='hidden xl:flex lg:flex bg-[#e7f6fb] justify-center rounded-l-lg'>
            <img
              className='p-5 w-8/12 
  xl:px-0 xl:py-40 xl:w-6/12
  lg:px-20 lg:py-36 lg:w-11/12'
              src='https://res.cloudinary.com/assignmentjs/image/upload/v1644399101/img/login-bg_yyrdj7.png'
            />
          </section>
          <section>
            <div className='min-h-full flex items-center justify-center pb-12 px-4 sm:px-6 lg:px-8'>
              <div className='max-w-md w-full space-y-8'>
                <div>
                  <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase'>
                    Đăng Ký
                  </h2>
                  <p className='mt-2 text-center text-sm text-gray-600'>
                    Chú ý các nội dung có dấu * bạn cần phải nhập
                  </p>
                </div>
                <form
                  className='mt-8 space-y-6'
                  id='form-signup'
                  action='#'
                  method='POST'
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input type='hidden' name='remember' defaultValue='true' />
                  <div className='rounded-md shadow-sm -space-y-px'>
                    <div className='pb-4'>
                      <label htmlFor='input-username' className='py-2'>
                        Họ tên
                      </label>
                      <input
                        id='input-username'
                        {...register("name", { required: "Vui lòng nhập họ tên" })}
                        type='text'
                        // required
                        className='appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-blue-700 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm'
                        placeholder='Họ tên*'
                      />
                      <p className="text-red-400 text-xs">{errors.name?.message}</p>
                    </div>
                    <div className='pb-4'>
                      <label htmlFor='input-password' className='py-2'>
                        Mật khẩu
                      </label>
                      <input
                        id='input-password'
                        {...register("password", { required: "Vui lòng nhập mật khẩu" })}
                        type='password'
                        // required
                        className='appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-blue-700 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm'
                        placeholder='Mật khẩu*'
                      />
                      <p className="text-red-400 text-xs">{errors.password?.message}</p>
                    </div>
                    <div className='pb-4'>
                      <label htmlFor='input-email' className='py-2'>
                        Email
                      </label>
                      <input
                        id='input-email'
                        {...register("email", { required: "Vui lòng nhập email" })}
                        type='email'
                        // required
                        className='appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-blue-700 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm'
                        placeholder='Email*'
                      />
                      <p className="text-red-400 text-xs">{errors.email?.message}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      type='submit'
                      className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      Đăng ký
                    </button>
                  </div>
                  <p className='mt-3 text-center text-sm text-gray-600'>
                    Bạn đã có tài khoản?
                    <Link href='/signin'>
                        <span className='ml-2 cursor-pointer text-blue-500 hover:text-blue-700 font-medium ease-in-out duration-300'>Đăng nhập</span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Signup;
