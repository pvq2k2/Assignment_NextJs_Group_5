import Link from "next/link";
import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";
import AdminLayout from "../../../components/Layout/admin";
import styles from "./styles/productManager.module.scss";
type Props = {};

const ProductManager = (props: Props) => {
  return (
    <div className={styles.content}>
      <header>
        <div className={styles.title}>Product Manager</div>
                <Link href='products/add' className='sm:ml-3'>
          <button
            type='button'
            className='inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <TiPlus className='text-[20px] mr-2' />
            Add Product
          </button>
        </Link>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Category</td>
              <td>Description</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
              <tr>
              <td>Product A</td>
              <td>ảnh</td>
              <td>100</td>
              <td>áo nữ</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. </td>
              <td className={styles.action}>
                 <Link href=''><AiOutlineEdit className={styles.edit}/></Link>
                 
                  <AiOutlineDelete className={styles.delete} />
              </td>
              </tr>

          </tbody>
        </table>
      </main>
    </div>
  );
};

ProductManager.Layout = AdminLayout;

export default ProductManager;
