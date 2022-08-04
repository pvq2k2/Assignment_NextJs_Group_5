/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signin as signinAction } from '../../features/auth/auth.slice';
import { signin } from '../../../api/auth';
import { toast } from 'react-toastify';

type Signin = {};
type Inputs = {
  email: string;
  password: string;
};
const Signin = (props: Signin) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit = async (values: Inputs) => {
    try {
      const user = await signin(values);
      console.log(user.name);
      
      toast.success("Đăng nhập thành công !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // reset();

      dispatch(signinAction(user));

      // admin
      if (user.role === 1) {
        setTimeout(() => {
          router.push("/admin");
        }, 1000)
      } else {
        setTimeout(() => {
          router.push("/");
        }, 1000)
      }
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
xl:px-0 xl:py-20 xl:w-6/12
lg:p-20 lg:w-11/12'
              src='https://res.cloudinary.com/assignmentjs/image/upload/v1644399101/img/login-bg_yyrdj7.png'
            />
          </section>
          <section>
            <div className='min-h-full flex items-center justify-center p-12 px-4 sm:px-6 lg:px-8'>
              <div className='max-w-md w-full space-y-8'>
                <div>
                  <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase'>
                    Đăng nhập
                  </h2>
                </div>
                <form
                  className='mt-8 space-y-6'
                  id='form-signin'
                  onSubmit={handleSubmit(onSubmit)}
                 
                >
                  <input type='hidden' name='remember' defaultValue='true' />
                  <div className='rounded-md shadow-sm -space-y-px'>
                    <div className='mb-4'>
                      <label htmlFor='input-email' className='py-2'>
                        Email
                      </label>
                      <input
                        id='input-email'
                        type='email'
                        // required
                        {...register("email", { required: "Vui lòng nhập email" })}
                        className='appearance-none rounded-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md ease-in-out duration-300 hover:border-blue-500 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm'
                        placeholder='Email'
                      />
                      <p className="text-red-400 text-xs">{errors.email?.message}</p>
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='input-password' className='py-2'>
                        Mật khẩu
                      </label>
                      <input
                        id='input-password'
                        type='password'
                        {...register("password", { required: "Vui lòng nhập email" })}
                        // required
                        className='appearance-none rounded-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md ease-in-out duration-300 hover:border-blue-700 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm'
                        placeholder='Mật khẩu'
                      />
                      <p className="text-red-400 text-xs">{errors.password?.message}</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        className='h-4 w-4 text-blue-500 ease-in-out duration-300 focus:ring-blue-500 border-gray-300 rounded'
                      />
                      <label
                        htmlFor='remember-me'
                        className='ml-2 block text-sm text-gray-900'
                      >
                    
                        Nhớ mật khẩu
                      </label>
                    </div>
                    <div className='text-sm'>
                      <a
                        href='#'
                        className='font-medium text-blue-500 ease-in-out duration-300 hover:text-blue-700'
                      >
                    
                        Quên mật khẩu?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type='submit'
                      className='group w-full relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      Đăng nhập
                    </button>
                  </div>
                  <p className='mt-3 text-center text-sm text-gray-600 mr-2'>
                    Bạn chưa có tài khoản?
                    <Link href='signup'>
                        <span className='ml-2 cursor-pointer font-medium ease-in-out duration-300 text-blue-500 hover:text-blue-700'>Đăng ký</span>
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

export default Signin;
