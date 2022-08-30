/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import React from "react";

type Props = {};

const ProductsList = (props: Props) => {
  return (
    <div className="flex flex-row">
      <Head>
        <title>SHOP | Sản phẩm</title>
      </Head>
      <div className="p-5 ml-10 min-w-[250px]">
        {/* <h2 className="text-2xl">Filter</h2> */}
        <div className="mt-5">
          <h2 className="text-xl capitalize mb-3">Danh mục</h2>
          <div className="text-lg">
            <div className="pretty p-default p-pulse flex">
              <input
                type="checkbox"
                id="pcr_R5vMouKY"
                name="category"
                value=""
              />
              <div className="state p-info-o ml-2">
                <label>Hoodies</label>
              </div>
            </div>
          </div>
          <div className="text-lg">
            <div className="pretty p-default p-pulse flex">
              <input
                type="checkbox"
                id="pcr_ejc92VYL"
                name="category"
                value=""
              />
              <div className="state p-info-o ml-2">
                <label>Jeans</label>
              </div>
            </div>
          </div>
          <div className="text-lg">
            <div className="pretty p-default p-pulse flex">
              <input
                type="checkbox"
                id="pcr_9OnNrZLn"
                name="category"
                value=""
              />
              <div className="state p-info-o ml-2">
                <label>Polos</label>
              </div>
            </div>
          </div>
          <div className="text-lg">
            <div className="pretty p-default p-pulse flex">
              <input
                type="checkbox"
                id="pcr_bQzEAESp"
                name="category"
                value=""
              />
              <div className="state p-info-o ml-2">
                <label>Shirts</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-xl capitalize mb-3">Phong cách</h2>
          <div className="text-lg">
            <div className="pretty p-default p-pulse flex">
              <input type="checkbox" id="pcr_COqSv1bu" name="brand" value="" />
              <div className="state p-info-o ml-2">
                <label>Thanh lịch</label>
              </div>
            </div>
          </div>
          <div className="text-lg">
            <div className="pretty p-default p-pulse flex">
              <input type="checkbox" id="pcr_ZVxXTR7f" name="brand" value="" />
              <div className="state p-info-o ml-2">
                <label>Thể thao</label>
              </div>
            </div>
          </div>
          <div className="text-lg">
            <div className="pretty p-default p-pulse flex">
              <input type="checkbox" id="pcr_2oAx1FhV" name="brand" value="" />
              <div className="state p-info-o ml-2">
                <label>Pull &amp; Bear</label>
              </div>
            </div>
          </div>
          <div className="text-lg">
            <div className="pretty p-default p-pulse flex">
              <input type="checkbox" id="pcr_MhIiZdsm" name="brand" value="" />
              <div className="state p-info-o ml-2">
                <label>Giải trí</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 ml-10 mr-10 w-full ">
        <div className="flex justify-between">
          <h2 className="text-2xl">Sản phẩm</h2>
          <div className="w-56 css-b62m3t-container">
            <span
              id="react-select-2-live-region"
              className="css-1f43avz-a11yText-A11yText"
            ></span>
            <span
              aria-live="polite"
              aria-atomic="false"
              aria-relevant="additions text"
              className="css-1f43avz-a11yText-A11yText"
            ></span>
          </div>
        </div>
        {/* flex flex-row flex-wrap gap-5 mt-5 justify-around */}
        {/* class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" */}
        <div className="gap-5 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group border-2 border-zinc-100 hover:shadow-neutral-300 hover:shadow-lg hover:cursor-pointer ">
            <a href="">
              <div className="max-w-[300px] h-[350px] overflow-hidden">
                <img
                  width="100%"
                  height="100%"
                  src="https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Hoodie_1.jpg?alt=media"
                  alt="hinh anh"
                  className="group-hover:scale-105 transition object-cover"
                />
              </div>
              <div className="p-3">
                <h4 className="text-lg font-medium">Hollister</h4>
                <p className="text-lg font-medium mt-2">
                  2300 <span className="text-red-600">đ</span>
                </p>{" "}
              </div>
            </a>
          </div>

          <div className="group border-2 border-zinc-100 hover:shadow-neutral-300 hover:shadow-lg hover:cursor-pointer ">
            <div className="max-w-[300px] h-[350px] overflow-hidden">
              <img
                width="100%"
                height="100%"
                src="https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Jeans_3.jpg?alt=media"
                alt="hinh anh"
                className="group-hover:scale-105 transition object-cover"
              />
            </div>
            <div className="p-3">
              <h4 className="text-lg font-medium">Hollister</h4>
              <p className="text-lg font-medium mt-2">
                2300 <span className="text-red-600">đ</span>
              </p>{" "}
            </div>
          </div>
          <div className="group border-2 border-zinc-100 hover:shadow-neutral-300 hover:shadow-lg hover:cursor-pointer ">
            <div className="max-w-[300px] h-[350px] overflow-hidden">
              <img
                width="100%"
                height="100%"
                src="https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Polo_2.jpg?alt=media"
                alt="hinh anh"
                className="group-hover:scale-105 transition object-cover"
              />
            </div>
            <div className="p-3">
              <h4 className="text-lg font-medium">Hollister</h4>
              <p className="text-lg font-medium mt-2">
                2300 <span className="text-red-600">đ</span>
              </p>{" "}
            </div>
          </div>
          <div className="group border-2 border-zinc-100 hover:shadow-neutral-300 hover:shadow-lg hover:cursor-pointer ">
            <div className="max-w-[300px] h-[350px] overflow-hidden">
              <img
                width="100%"
                height="100%"
                src="https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Hoodie_3.jpg?alt=media"
                alt="hinh anh"
                className="group-hover:scale-105 transition object-cover"
              />
            </div>
            <div className="p-3">
              <h4 className="text-lg font-medium">Hollister</h4>

              <p className="text-lg font-medium mt-2">
                2300 <span className="text-red-600">đ</span>
              </p>
            </div>
          </div>
          <div className="group border-2 border-zinc-100 hover:shadow-neutral-300 hover:shadow-lg hover:cursor-pointer ">
            <div className="max-w-[300px] h-[350px] overflow-hidden">
              <img
                width="100%"
                height="100%"
                src="https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Pb_Jeans_2.jpg?alt=media"
                alt="hinh anh"
                className="group-hover:scale-105 transition object-cover"
              />
            </div>
            <div className="p-3">
              <h4 className="text-lg font-medium">Hollister</h4>

              <p className="text-lg font-medium mt-2">
                2300 <span className="text-red-600">đ</span>
              </p>
            </div>
          </div>
          <div className="group border-2 border-zinc-100 hover:shadow-neutral-300 hover:shadow-lg hover:cursor-pointer ">
            <div className="max-w-[300px] h-[350px] overflow-hidden">
              <img
                width="100%"
                height="100%"
                src="https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Pb_Shirt_3.jpg?alt=media"
                alt="hinh anh"
                className="group-hover:scale-105 transition object-cover"
              />
            </div>
            <div className="p-3">
              <h4 className="text-lg font-medium">Hollister</h4>

              <p className="text-lg font-medium mt-2">
                2300 <span className="text-red-600">đ</span>
              </p>
            </div>
          </div>
          <div className="group border-2 border-zinc-100 hover:shadow-neutral-300 hover:shadow-lg hover:cursor-pointer ">
            <div className="max-w-[300px] h-[350px] overflow-hidden">
              <img
                width="100%"
                height="100%"
                src="https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Pb_Shirt_1.jpg?alt=media"
                alt="hinh anh"
                className="group-hover:scale-105 transition object-cover"
              />
            </div>
            <div className="p-3">
              <h4 className="text-lg font-medium">Hollister</h4>

              <p className="text-lg font-medium mt-2">
                2300 <span className="text-red-600">đ</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
