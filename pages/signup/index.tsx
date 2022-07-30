import React from 'react'
import styles from './styles.module.css'
type Signup = {}

const Signup = (props: Signup) => {
    return (
        <div className={styles.body}>
            <form className={styles.action} action="" >
                <div className={styles.container}>
                    <h1 className={styles.h1}  >Form Đăng Ký</h1>
                    <p>Xin hãy nhập biểu mẫu bên dưới để đăng ký.</p>
                    <hr  className={styles.hr}  />
                        <label className={styles.label}   htmlFor="email"><b>Email</b></label>
                        <input className={styles.input} type="text" placeholder="Nhập Email" name="email" required />

                            <label className={styles.label}  htmlFor="psw"><b>Mật Khẩu</b></label>
                            <input className={styles.input}  type="password" placeholder="Nhập Mật Khẩu" name="psw" required />

                                <label htmlFor="psw-repeat"><b>Nhập Lại Mật Khẩu</b></label>
                                <input className={styles.input}  type="password" placeholder="Nhập Lại Mật Khẩu" name="psw-repeat" required />

                                    <label className={styles.label}  >
                                        <input className={` ${styles.input} ${styles.checkbox}`} type="checkbox"  name="remember"  /> Nhớ Đăng Nhập
                                    </label>

                                    <div  className={styles.clearfix}>
                                        <button className={`${styles.button} ${styles.signupbtn}`}  type="submit" >Sign Up</button>
                                    </div>
                                </div>
                            </form>

        </div>
                        )
}

                        export default Signup