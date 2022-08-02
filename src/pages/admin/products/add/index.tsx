import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../../components/Layout/admin';
import { HiOutlineX, HiOutlineCheck } from 'react-icons/hi'

const ProductAdd = () => {
  return (
    <div>
      <div>
        <header className='bg-white shadow'>
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between'>
            <h1 className='text-3xl font-bold text-gray-900'>Product Add</h1>
            <Link href='/admin/products' className='sm:ml-3'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                  <HiOutlineX className='text-[20px] mr-2'/>
                Close
              </button>
            </Link>
          </div>
        </header>
        <div className='m-auto max-w-7xl pb-36 mt-5'>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form action='#' id='form-add-product' method='POST'>
              <div className='shadow sm:rounded-md sm:overflow-hidden'>
                <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Name
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        id='name-add-product'
                        className='shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2'
                        placeholder='Name...'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='price'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Price
                    </label>
                    <div className='mt-1'>
                      <input
                        type='number'
                        id='price-add-product'
                        className='shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2'
                        placeholder='Price...'
                      />
                    </div>
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='category'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Category
                    </label>
                    <select
                      id='category'
                      name='category'
                      autoComplete='category-name'
                      className='mt-1 block w-full py-2 px-3 appearance-none border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    >
                      <option value='0'>Select Category</option>
                      <option value='1'>Áo nam</option>
                      <option value='2'>Áo nữ</option>
                      <option value='3'>Áo trẻ em</option>
                    </select>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Image
                    </label>
                    <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                      <div className='space-y-1 text-center'>
                        <svg
                          className='mx-auto h-12 w-12 text-gray-400'
                          stroke='currentColor'
                          fill='none'
                          viewBox='0 0 48 48'
                          aria-hidden='true'
                        >
                          <path
                            d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <div className='flex text-sm text-gray-600'>
                          <input id='file-upload' type='file' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    <HiOutlineCheck className='mr-2 text-[20px]'/>
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
ProductAdd.Layout = AdminLayout;
export default ProductAdd;
