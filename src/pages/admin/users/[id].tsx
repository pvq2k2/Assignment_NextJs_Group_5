import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiOutlineCheck, HiOutlineX } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import AdminLayout from "../../../components/Layout/admin";
import { readU, updateU } from "../../../features/user/user.slice";
import { uploadImage } from "../../../utils";

type Inputs = {
    name:string;
    email:string,
    password:string,
    avatar:string
};

const UpdateUser = () => {
    const [preview,setPreview]=useState<string>();
    const dispatch = useDispatch<any>();
    const CLOUDINARY_API =
    "https://api.cloudinary.com/v1_1/assignmentjs/image/upload";
  const CLOUDINARY_PRESET = "nextjscategory";
  const router = useRouter();
  const id = router.query.id;

    const {register,handleSubmit,formState:{errors},reset}= useForm<Inputs>();
    useEffect(()=>{
        (async()=>{
            const user = await dispatch(readU(id)).unwrap();
            reset(user);
            setPreview(user?.avatar);
        })();
    },[dispatch,id,reset]);
    const onSubmit:SubmitHandler<Inputs>=async(values:Inputs)=>{
        try{
            if(typeof values.avatar==="object"){
                const{data}=await uploadImage(
                    values.avatar[0],
                    CLOUDINARY_API,
                    CLOUDINARY_PRESET
                );
                values.avatar=data.url
            }
            await dispatch(updateU(values)).unwrap();
            toast.success("Update category successfully !", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setTimeout(()=>{
                router.push("/admin/users");
              },1000);
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <div>
      <div>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900">User Update</h1>
            <Link href="/admin/users" className="sm:ml-3">
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
            <form action="#" id="form-add-user" method="POST" onSubmit={handleSubmit(onSubmit)}>
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
                        {...register("name",{
                            required:"Vui lòng nhập tên"
                        })}
                        id="name-add-user"
                        className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                        placeholder="Name..."
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        {...register("email",{
                            required:"Vui lòng nhập email"
                        })}
                        id="email-add-user"
                        className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                        placeholder="Email..."
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        type="password"
                        {...register("password",{
                            required:"Vui lòng nhập password"
                        })}
                        id="password-add-user"
                        className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                        placeholder="Password..."
                      />
                    </div>
                  </div>

                  <div className="col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Avatar preview
                    </label>
                    <div className="mt-1 w-40 h-40 relative">
                      <img
                        src={
                            preview||"https://res.cloudinary.com/assignmentjs/image/upload/c_thumb,w_200,g_face/v1648723660/img/noimage_mzjwxl.png"
                        }
                        
                        alt="Preview Image"
                        className="h-40 w-40 rounded-sm object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Avatar
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
                          <input {...register("avatar")} onChange={(e:any)=>{setPreview(URL.createObjectURL(e.target.files[0]))}} id="file-upload" type="file" />
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
UpdateUser.Layout=AdminLayout
export default UpdateUser;
