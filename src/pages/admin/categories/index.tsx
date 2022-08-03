/* eslint-disable @next/next/no-img-element */
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
        <button className={styles.btn}>
          <TiPlus className={styles.io} /> <span>Add Categories</span>
        </button>
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