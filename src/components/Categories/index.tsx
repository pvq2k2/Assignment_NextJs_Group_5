import React from 'react'
import styles from './Categories.module.css'
type Props = {}

const Categories = (props: Props) => {
    return (
        <div>

            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Danh Mục Sản Phẩm</h2>
                </div>
                <div className={styles.category}>
                    <div className={styles.category_item}>
                        <div className={styles.category_image}>
                            <img src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_f9b5296a77c5472c8a7ebd72b9ee863c/feaer/file/thumbs/apThun.webp" alt="" />
                        </div>
                        <div className={styles.category_name}>
                            <button>
                                <a href="">Áo thun</a> </button>
                        </div>
                    </div>
                    <div className={styles.category_item}>
                        <div className={styles.category_image}>
                            <img src="https://cdn.ssstutter.com/products/nCRHI1bpbr1ZIsxG/072022/1658121997644.jpeg" alt="" />
                        </div>
                        <div className={styles.category_name}>
                            <button>
                                <a href="">Áo thun</a> </button>
                        </div>
                    </div>
                    <div className={styles.category_item}>
                        <div className={styles.category_image}>
                            <img src="https://cdn.ssstutter.com/products/nCRHI1bpbr1ZIsxG/122021/1639108853105.jpeg" alt="" />
                        </div>
                        <div className={styles.category_name}>
                            <button>
                                <a href="">Áo thun</a> </button>
                        </div>
                    </div>
                    <div className={styles.category_item}>
                        <div className={styles.category_image}>
                            <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/072022/1658369936512.jpeg" alt="" />
                        </div>
                        <div className={styles.category_name}>
                            <button>
                                <a href="">Áo thun</a> </button>
                        </div>
                    </div>
                </div>
                <div className={styles.boder}>
                    <hr />
                </div>

            </div>
        </div>
    )
}

export default Categories 