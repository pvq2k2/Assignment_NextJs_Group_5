/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { TiPlus } from 'react-icons/ti';
import AdminLayout from '../../../components/Layout/admin';
import styles from './styles/UserManager.module.scss';

const UserManager = () => {
  return (
    <div className={styles.content}>
      <header>
        <div className={styles.title}>
          <p>Users Manager</p>{' '}
        </div>
        <Link href='users/add' className='sm:ml-3'>
          <button
            type='button'
            className='inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <TiPlus className='text-[20px] mr-2' />
            Add Users
          </button>
        </Link>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <td>STT</td>
              <td>User</td>
              <td>Role</td>
              <td>CreateAt</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>

              <td className='px-6 py-4 whitespace-nowrap'>
              <div className='flex items-center justify-center'>
                <div className='flex-shrink-0 h-10 w-10'>
                  <div className='w-10 h-10 relative rounded-full object-cover'>
                    <img
                      src='https://res.cloudinary.com/assignment22/image/upload/v1656862542/front-end-developers-openings_680x428_f5hyez.gif'
                      alt=''
                    />
                  </div>
                </div>
                <div className='ml-4'>
                  <div className='text-sm font-medium text-gray-900 text-left'>
                    đào ngọc linh
                  </div>
                  <div className='text-sm text-gray-500'>
                    daongoclinh22@gmail.com
                  </div>
                </div>
              </div>
            </td>
              <td>
                Admin
          
              </td>
              <td className='text-blue-500'>8/7/2022</td>
              <td className={styles.action}>
                <Link href={`/admin/users`}>
                  <AiOutlineEdit className={styles.edit} />
                </Link>

                <AiOutlineDelete className={styles.delete} />
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};
UserManager.Layout = AdminLayout;
export default UserManager;
