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
        <button className={styles.btn}>
          <TiPlus className={styles.io} /> <Link href='products/add'><span>Add Product</span></Link> 
        </button>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Image</td>
              <td>Category</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
              <tr>
              <td>Product A</td>
              <td>100</td>
              <td>
                ảnh
              </td>
              <td>áo nữ</td>
              <td className={styles.action}>
                  <AiOutlineEdit className={styles.edit} />
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
