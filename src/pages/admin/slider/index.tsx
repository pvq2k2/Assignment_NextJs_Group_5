/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../components/Layout/admin";
import styles from "./styles/SlideManager.module.scss";
import Swal from 'sweetalert2';
import { getAllS, removeS } from "../../../features/slide/slide.slice";
import Head from "next/head";

const SlideManager = () => {
  const slider = useSelector((state: any) => state.slide.slides);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getAllS());
  }, [dispatch, slider]);

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
        await dispatch(removeS(id)).unwrap();
        Swal.fire(
          'Deleted!',
          'Your slide has been deleted.',
          'success'
        )
      }
    })
  }
  return (
    <div>
         <Head>
                <title>Slider Management</title>
        </Head>
      <div className={styles.content}>
        <header>
          <div className={styles.title}>Slide Manager</div>
          <Link href="slider/add" className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <TiPlus className="text-[20px] mr-2" />
              Add Slide
            </button>
          </Link>
        </header>
        <main>
          <table>
            <thead>
              <tr>
                <td>STT</td>
                <td>Image</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>

              {slider?.map((slide: any, index: any) => (
                              <tr key={slide._id}>
                              <td>{index + 1}</td>
                              <td>
                                <img
                                  className={styles.image}
                                  src={slide.img}
                                  alt=""
                                  width="100px"
                                />
                              </td>
              
                              <td className={styles.action}>
                                <Link href={`/admin/slider/${slide._id}`}>
                                <AiOutlineEdit className={styles.edit} />
                                </Link>
                                <AiOutlineDelete className={styles.delete} onClick={() => handleRemove(slide._id)} />
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
SlideManager.Layout = AdminLayout;
export default SlideManager;
