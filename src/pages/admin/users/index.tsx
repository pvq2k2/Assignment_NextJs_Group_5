/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { TiPlus } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import AdminLayout from '../../../components/Layout/admin';
import { getAllU, removeU } from '../../../features/user/user.slice';
import styles from './styles/UserManager.module.scss';

const UserManager = () => {
  const users = useSelector((state: any) => state.user.users);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getAllU());
  }, [dispatch, users]);

  const handleRemove=(id:any)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(removeU(id)).unwrap();
        Swal.fire(
          'Deleted!',
          'Your user has been deleted.',
          'success'
        )
      }
    })
  }
  return (
    <div className={styles.content}>
            <Head>
                <title>User Management</title>
            </Head>
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
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, index: any) => (
            <tr key={user._id}>
            <td>{index + 1}</td>
            <td className='px-6 py-4 whitespace-nowrap'>
            <div className='flex'>
              <div className='flex-shrink-0 h-10 w-10'>
                <div className='w-10 h-10 relative rounded-full object-cover'>
                  <img
                    src={user.avatar}
                    alt=''
                  />
                </div>
              </div>
              <div className='ml-4'>
                <div className='text-sm font-medium text-gray-900 text-left'>
                  {user.firstName} {user.lastName}
                </div>
                <div className='text-sm text-gray-500'>
                  {user.email}
                </div>
              </div>
            </div>
          </td>
          {user.role == 1 ? (<td>Admin</td>) : (<td>User</td>)}
            <td className={styles.action}>
              <Link href={`/admin/users/${user._id}`}>
                <AiOutlineEdit className={styles.edit} />
              </Link>

              <AiOutlineDelete className={styles.delete} onClick={() => handleRemove(user._id)}/>
            </td>
          </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};
UserManager.Layout = AdminLayout;
export default UserManager;
