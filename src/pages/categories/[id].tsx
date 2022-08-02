import React from 'react'
import styles from './CategoriesDetail.module.scss';
type Props = {}

const Categories_Detail = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <ul className={styles.directional}>
                    <li><a href="">Trang chủ</a></li>
                    <li>/</li>
                    <li>Áo</li>
                </ul>
            </div>
            <div className={styles.product}>
                <div className={styles.item}>
                    <div className={styles.tranf}>
                        <div className={styles.item_image}>
                            <img src="https://cdn.ssstutter.com/products/nCRHI1bpbr1ZIsxG/032022/1647313881009.jpeg" alt="" />
                        </div>
                        <div className={styles.item_size}>
                            <button className={styles.add_card}>
                                <a href="">Thêm vào giỏ hàng</a> </button>

                        </div>
                    </div>
                    <div className={styles.item_info}>
                        <div>
                            <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                            <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
                        </div>

                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.tranf}>
                        <div className={styles.item_image}>
                            <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/062022/1656562214790.jpeg" alt="" />
                        </div>
                        <div className={styles.item_size}>

                            <button className={styles.add_card}>
                                <a href="">Thêm vào giỏ hàng</a> </button>


                        </div>
                    </div>
                    <div className={styles.item_info}>
                        <div>
                            <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                            <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
                        </div>

                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.tranf}>
                        <div className={styles.item_image}>
                            <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/072022/1658473576440.jpeg" alt="" />
                        </div>
                        <div className={styles.item_size}>

                            <button className={styles.add_card}>
                                <a href="">Thêm vào giỏ hàng</a> </button>


                        </div>
                    </div>
                    <div className={styles.item_info}>
                        <div>
                            <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                            <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
                        </div>

                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.tranf}>
                        <div className={styles.item_image}>
                            <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/072022/1657878372479.jpeg" alt="" />
                        </div>
                        <div className={styles.item_size}>
                            <button className={styles.add_card}>
                                <a href="">Thêm vào giỏ hàng</a> </button>


                        </div>
                    </div>
                    <div className={styles.item_info}>
                        <div>
                            <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                            <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.tranf}>
                        <div className={styles.item_image}>
                            <img src="https://cdn.ssstutter.com/products/nCRHI1bpbr1ZIsxG/032022/1647487257623.jpeg" alt="" />
                        </div>
                        <div className={styles.item_size}>
                            <button className={styles.add_card}>
                                <a href="">Thêm vào giỏ hàng</a> </button>


                        </div>
                    </div>
                    <div className={styles.item_info}>
                        <div>
                            <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                            <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.tranf}>
                        <div className={styles.item_image}>
                            <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/062022/1656560340269.jpeg" alt="" />
                        </div>
                        <div className={styles.item_size}>

                            <button className={styles.add_card}>
                                <a href="">Thêm vào giỏ hàng</a> </button>


                        </div>
                    </div>
                    <div className={styles.item_info}>
                        <div>
                            <a href='' className={styles.item_info_name}> Áo Polo Chaintee</a>
                            <p className={styles.item_info_price}>349.000 <span className={styles.currency_symbol}>₫</span></p>
                        </div>

                    </div>
                </div>

            </div> </div>
    )
}

export default Categories_Detail