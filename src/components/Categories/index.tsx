/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { ICategory } from "../../models/category";
import styles from "./Categories.module.css";
type CategoryProps = {
  listCategory: ICategory[];
};

const Categories = ({ listCategory }: CategoryProps) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Danh Mục Sản Phẩm</h2>
        </div>
        <div className={styles.category}>
          {listCategory?.map((item) => (
            <Link key={item._id} href={`/categories/${item.slug}`}>
              <div className={styles.category_item}>
                <div className={styles.category_box}>
                    <div className={styles.category_img}>
                  <img src={item.img} alt="" />
                    </div>
                  <div className={styles.category_name}>
                  <span>{item.name}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.boder}>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Categories;
