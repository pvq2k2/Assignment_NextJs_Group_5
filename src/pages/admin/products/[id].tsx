/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiOutlineX, HiOutlineCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import AdminLayout from "../../../components/Layout/admin";
import { getAllC } from "../../../features/category/category.slice";
import { readP, updateP } from "../../../features/product/product.slice";
import { uploadImage } from "../../../utils";
type Inputs = {
  name: string;
  price: number;
  description: string;
  category: string;
  img: string;
};
const UpdateProduct = () => {
  const cateProducts = useSelector((state: any) => state.category.categories);
  const [preview, setPreview] = useState<string>();
  const dispatch = useDispatch<any>();
  const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/assignmentjs/image/upload";
  const CLOUDINARY_PRESET = "nextjsproduct";
  const router = useRouter();
  const id = router.query.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  useEffect(() => {
    (async () => {
      // console.log(id);

      const product = await dispatch(readP(id)).unwrap();

      const categories = await dispatch(getAllC());

      // console.log(cateProducts);
      // console.log(product);

      reset(product);
      
      setPreview(product?.img);
    })();
  }, [dispatch, id, reset]);

  // console.log(cateProducts);

  const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
    // console.log("value", values);
    try {
      if (typeof values.img === "object") {
        const { data } = await uploadImage(values.img[0], CLOUDINARY_API, CLOUDINARY_PRESET);
        values.img = data.url;
      }
      await dispatch(updateP(values)).unwrap();
      // console.log("value", values);

      toast.success("Update product successfully !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push("/admin/products");
      }, 1000);
      // reset();
      // setPreview("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
            <Head>
                <title>Product Update</title>
            </Head>
      <div>
        <div>
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
              <h1 className="text-3xl font-bold text-gray-900">
                Product Update
              </h1>
              <Link href="/admin/products" className="sm:ml-3">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <HiOutlineX className="text-[20px] mr-2" />
                  Close
                </button>
              </Link>
            </div>
          </header>
          <div className="m-auto max-w-7xl pb-36 mt-5">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form
                action="#"
                id="form-edit-product"
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="name-edit-product"
                          {...register("name", {
                            required: "Vui lòng nhập tên sản phẩm",
                          })}
                          className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                          placeholder="Name..."
                        />
                        <div className="text-sm mt-0.5 text-red-500">
                          {errors.name?.message}
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          {...register("price", {
                            required: "Vui lòng nhập giá",
                          })}
                          id="price-edit-product"
                          className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                          placeholder="Price..."
                        />
                        <div className="text-sm mt-0.5 text-red-500">
                          {errors.price?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category
                      </label>
                      <select
                        {...register("category", {
                          required: "Vui lòng nhập chi tiết",
                        })}
                        id="category"
                        name="category"
                        autoComplete="category-name"
                        className="mt-1 block w-full py-2 px-3 appearance-none border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="0">Select Category</option>
                        {cateProducts &&
                          cateProducts.map((category: any) => (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          ))}
                      </select>
                      <div className="text-sm mt-0.5 text-red-500">
                        {errors.category?.message}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          {...register("description", {
                            required: "Vui lòng nhập chi tiết",
                          })}
                          id="description-edit-product"
                          className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                          placeholder="Description..."
                        />
                        <div className="text-sm mt-0.5 text-red-500">
                          {errors.description?.message}
                        </div>
                      </div>
                    </div>

                    <div className="col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Image preview
                      </label>
                      <div className="mt-1 w-40 h-40 relative">
                        <img
                          src={
                            preview ||
                            "https://res.cloudinary.com/assignmentjs/image/upload/c_thumb,w_200,g_face/v1648723660/img/noimage_mzjwxl.png"
                          }
                          alt="Preview Image"
                          className="h-40 w-40 rounded-sm object-cover"
                          // layout="fill"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Image
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <input
                              {...register("img")}
                              onChange={(e: any) => {
                                setPreview(
                                  URL.createObjectURL(e.target.files[0])
                                );
                              }}
                              id="file-upload"
                              type="file"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <HiOutlineCheck className="mr-2 text-[20px]" />
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
UpdateProduct.Layout = AdminLayout;
export default UpdateProduct;
