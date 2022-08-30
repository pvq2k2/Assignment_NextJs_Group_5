/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { TiPlus } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import AdminLayout from '../../../components/Layout/admin';
import { getAllP, removeP } from '../../../features/product/product.slice';
import styles from './styles/productManager.module.scss';
type Props = {};

const ProductManager = (props: Props) => {
  const products = useSelector((state: any) => state.product.products);
  const dispatch = useDispatch<any>();
  // console.log(products);
  useEffect(() => {
    dispatch(getAllP());
  }, [dispatch, products]);

  // console.log(products);

  const handleRemove = (id: any) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(removeP(id)).unwrap();
        Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
      }
    });
  };
  return (
    <div className={styles.content}>
          <Head>
                <title>Product Management</title>
          </Head>
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
              <td>STT</td>
              <td>Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Description</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: any, index: any) => (
              <tr key={product._id}>
                <td>{index + 1}</td>


                <td>{product.name}</td>
                <td>
                  <img
                    className={styles.image}
                    src={product.img}
                    alt=''
                    width='100px'
                  />
                </td>
                <td>{product.price}</td>
                <td>
                {product.description?.slice(0, 30)}
                </td>
                <td className={styles.action}>
                  <Link href={`/admin/products/${product._id}`}>
                    <AiOutlineEdit className={styles.edit} />
                  </Link>

                  <AiOutlineDelete
                    className={styles.delete}
                    onClick={() => handleRemove(product._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

ProductManager.Layout = AdminLayout;

export default ProductManager;

