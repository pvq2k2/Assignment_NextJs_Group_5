import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react'
import { getAllCategory, readCategory } from '../../../api/category';
import { ICategory } from '../../models/category';
import styles from './CategoriesDetail.module.css';

type CategoryProps = {
    detailCate: ICategory;
};

const CategoriesDetail = ({ detailCate }: CategoryProps) => {
    console.log(detailCate);
    const cate = detailCate.category;
    const product = detailCate.products;
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <ul className={styles.directional}>
                    <li><Link href="/"><span>Trang chủ</span></Link></li>
                    <li>/</li>
                    <li>{cate.name}</li>
                </ul>
            </div>
            <div className={styles.product}>
                {product?.map(item => (
                <div key={item._id} className={styles.item}>
                    <div className={styles.tranf}>
                        <div className={styles.item_image}>
                            <img src={item.img} alt="" />
                        </div>
                        <div className={styles.item_size}>
                            <button className={styles.add_card}>
                                <a href="">Thêm vào giỏ hàng</a> </button>

                        </div>
                    </div>
                    <div className={styles.item_info}>
                        <div>
                            <a href='' className={styles.item_info_name}>{item.name}</a>
                            <p className={styles.item_info_price}>{item.price}<span className={styles.currency_symbol}> ₫</span></p>
                        </div>

                    </div>
                </div>
                ))}
                </div>
                 </div>
    )
}
export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getAllCategory();
    const paths = data.map(cate => ({ params: { slug: cate.slug } }));
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const slug = context.params?.slug as string;
    const detailCate = await readCategory(slug);
    return {
        props: {
            detailCate,
        },
        revalidate: 60,
    };
};
export default CategoriesDetail