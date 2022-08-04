/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../components/Layout/admin";
import { getAllC, removeC } from "../../../features/category/category.slice";
import styles from "./styles/CategoriesManager.module.scss";
import Swal from 'sweetalert2';

const CategoriesManager = () => {
  const categories = useSelector((state: any) => state.category.categories);
  const dispatch = useDispatch<any>();
  console.log(categories);

  useEffect(() => {
    dispatch(getAllC());
  }, [dispatch, categories]);

  console.log(categories);

  const handleRemove=(slug:any)=>{
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
        await dispatch(removeC(slug)).unwrap();
        Swal.fire(
          'Deleted!',
          'Your category has been deleted.',
          'success'
        )
      }
    })
  }
  return (
    <div>
      <div className={styles.content}>
        <header>
          <div className={styles.title}>Categories Manager</div>
          <Link href="categories/add" className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <TiPlus className="text-[20px] mr-2" />
              Add Categories
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
                <td>Action</td>
              </tr>
            </thead>
            <tbody>

              {categories?.map((category: any, index: any) => (
                              <tr key={category._id}>
                              <td>{index + 1}</td>
                              <td>{category.name}</td>
                              <td>
                                <img
                                  className={styles.image}
                                  src={category.img}
                                  alt=""
                                  width="100px"
                                />
                              </td>
              
                              <td className={styles.action}>
                                <Link href={`/admin/categories/${category.slug}`}>
                                <AiOutlineEdit className={styles.edit} />
                                </Link>
                                <AiOutlineDelete className={styles.delete} onClick={() => handleRemove(category.slug)} />
                              </td>
                            </tr>
              ))}


            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};
CategoriesManager.Layout = AdminLayout;
export default CategoriesManager;
