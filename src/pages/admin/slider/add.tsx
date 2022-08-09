/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiOutlineCheck, HiOutlineX } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import AdminLayout from "../../../components/Layout/admin";
import { createS } from "../../../features/slide/slide.slice";
import { uploadImage } from "../../../utils";
type Inputs = {
    img: string;
};


const SlideAdd = () => {
    const [preview, setPreview] = useState<string>();
    const dispatch = useDispatch<any>();
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/assignmentjs/image/upload";
    const CLOUDINARY_PRESET = "nextjsslide";


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<Inputs>();
      
      const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
        try {
          const { data } = await uploadImage(values.img[0], CLOUDINARY_API, CLOUDINARY_PRESET);
          values.img = data.url;
          await dispatch(createS(values)).unwrap();
          console.log("value", values);
    
          toast.success("Add slide successfully !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    
          reset();
          setPreview("");
        } catch (error) {
          console.log(error);
        }
      };


  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Slide Add</h1>
          <Link href="/admin/slider" className="sm:ml-3">
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
          <form action="#" id="form-add-product" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">



                <div className="col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Image preview
                    </label>
                    <div className="mt-1 h-60 relative">
                      <img
                        src={
                          preview ||
                          "https://res.cloudinary.com/assignmentjs/image/upload/c_thumb,w_200,g_face/v1648723660/img/noimage_mzjwxl.png"
                        }
                        alt="Preview Image"
                        className="h-60  rounded-sm object-cover"
                        // layout="fill"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="img"
                      className="mt-6 block text-sm font-medium text-gray-700"
                    >
                      Image
                    </label>
                    <div className="mt-2">
                      <input
                        type="file"
                        id="img-add-category"
                        {...register("img", {
                            required: "Vui lòng chọn ảnh",
                          })}
                          onChange={(e: any) => {
                            setPreview(
                              URL.createObjectURL(e.target.files[0])
                            );
                          }}
                        className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                      />
                      <div className="text-sm mt-0.5 text-red-500">
                            {errors.img?.message}
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
SlideAdd.Layout = AdminLayout;
export default SlideAdd;
