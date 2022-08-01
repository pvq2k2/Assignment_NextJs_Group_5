import React from 'react'
import { Html } from 'next/document';
import { FaBeer } from 'react-icons/fa';
import styles from './login.module.css'


type Singin = {}

const Singin = (props: Singin) => { 
  return (
    <div>
      
    <form className='form'> 
    <h1>Sign In</h1> 
        <div className={styles.container}>   
            <label>Username : </label>   
            <input  className={`${styles.input}`} type="text" placeholder="Enter Username" name="username" required />  
            <label>Password : </label>   
            <input className={`${styles.input}`} type="password" placeholder="Enter Password" name="password" required />  
            <button type="submit" className={styles.btn}>Login</button>   
            <input   type="checkbox" /><span> Remember me  </span> 
            <button type="button" className={`${styles.cancelbtn} ${styles.btn}`}> Cancel</button>   
            Forgot<a href="#"> password? </a>   
        </div>   
    </form>     
        </div>
        )
}

        export default Singin