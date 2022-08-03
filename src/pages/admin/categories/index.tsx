/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { TiPlus } from 'react-icons/ti';
import AdminLayout from '../../../components/Layout/admin';
import styles from './styles/CategoriesManager.module.scss';
type Props = {}

const CategoriesManager = (props: Props) => {
  return (
    <div><div className={styles.content}>
      <header>
        <div className={styles.title}>Categories Manager</div>
        <Link href='categories/add' className='sm:ml-3'>
          <button
            type='button'
            className='inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <TiPlus className='text-[20px] mr-2' />
            Add Categories
          </button>
        </Link>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Image</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >Product A</td>
              <td ><img className={styles.image} src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/072022/1657878495405.jpeg" alt="" width='100px' /></td>

              <td className={styles.action}>
                <AiOutlineEdit className={styles.edit} />
                <AiOutlineDelete className={styles.delete} />
              </td>
            </tr>
            <tr>
              <td >Product B</td>
              <td ><img  className={styles.image} src="https://cdn.ssstutter.com/products/nCRHI1bpbr1ZIsxG/032022/1647313881009.jpeg" alt="" width='100px' /></td>
              <td className={styles.action}>
                <AiOutlineEdit className={styles.edit} />
                <AiOutlineDelete className={styles.delete} />
              </td>
            </tr>

          </tbody>
        </table>
      </main>
    </div></div>
  )
}
CategoriesManager.Layout = AdminLayout
export default CategoriesManager