/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

// import AdminLayout from '@/components/Layout/admin'
import styles from './styles/dashboard.module.scss'
import React from 'react'
import { IoCartOutline, IoCashOutline, IoChatbubbleOutline, IoEyeOutline } from 'react-icons/io5'
import AdminLayout from '../../components/Layout/admin'
import Head from 'next/head'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>
    <Head>
      <title>Dashboard</title>
    </Head>
<div>
  {/* ======================= Cards ================== */}
  <div className={styles.cardBox}>
    <div className={styles.card}>
      <div>
        <div className={styles.numbers}>1,504</div>
        <div className={styles.cardName}>Daily Views</div>
      </div>
      <div className={styles.iconBx}>
        <IoEyeOutline />
        {/* <ion-icon name="eye-outline" /> */}
      </div>
    </div>
    <div className={styles.card}>
      <div>
        <div className={styles.numbers}>80</div>
        <div className={styles.cardName}>Sales</div>
      </div>
      <div className={styles.iconBx}>
        <IoCartOutline />
        {/* <ion-icon name="cart-outline" /> */}
      </div>
    </div>
    <div className={styles.card}>
      <div>
        <div className={styles.numbers}>284</div>
        <div className={styles.cardName}>Comments</div>
      </div>
      <div className={styles.iconBx}>
        <IoChatbubbleOutline />
        {/* <ion-icon name="chatbubbles-outline" /> */}
      </div>
    </div>
    <div className={styles.card}>
      <div>
        <div className={styles.numbers}>$7,842</div>
        <div className={styles.cardName}>Earning</div>
      </div>
      <div className={styles.iconBx}>
        <IoCashOutline />
        {/* <ion-icon name="cash-outline" /> */}
      </div>
    </div>
  </div>
  {/* ================ Order Details List ================= */}
  <div className={styles.details}>
    <div className={styles.recentOrders}>
      <div className={styles.cardHeader}>
        <h2>Recent Orders</h2>
        <a href="#" className={styles.btn}>View All</a>
      </div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Payment</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Star Refrigerator</td>
            <td>$1200</td>
            <td>Paid</td>
            <td><span className="status delivered">Delivered</span></td>
          </tr>
          <tr>
            <td>Dell Laptop</td>
            <td>$110</td>
            <td>Due</td>
            <td><span className="status pending">Pending</span></td>
          </tr>
          <tr>
            <td>Apple Watch</td>
            <td>$1200</td>
            <td>Paid</td>
            <td><span className="status return">Return</span></td>
          </tr>
          <tr>
            <td>Addidas Shoes</td>
            <td>$620</td>
            <td>Due</td>
            <td><span className="status inProgress">In Progress</span></td>
          </tr>
          <tr>
            <td>Star Refrigerator</td>
            <td>$1200</td>
            <td>Paid</td>
            <td><span className="status delivered">Delivered</span></td>
          </tr>
          <tr>
            <td>Dell Laptop</td>
            <td>$110</td>
            <td>Due</td>
            <td><span className="status pending">Pending</span></td>
          </tr>
          <tr>
            <td>Apple Watch</td>
            <td>$1200</td>
            <td>Paid</td>
            <td><span className="status return">Return</span></td>
          </tr>
          <tr>
            <td>Addidas Shoes</td>
            <td>$620</td>
            <td>Due</td>
            <td><span className="status inProgress">In Progress</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    {/* ================= New Customers ================ */}
    <div className={styles.recentCustomers}>
      <div className={styles.cardHeader}>
        <h2>Recent Customers</h2>
      </div>
      <table>
        <tbody><tr>
            <td width="60px">
              <div className={styles.imgBx}><img src="https://i.postimg.cc/Bn3JHgwV/customer02.jpg" /></div>
            </td>
            <td>
              <h4>David <br /> <span>Italy</span></h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className={styles.imgBx}><img src="https://i.postimg.cc/DymsM897/customer01.jpg" /></div>
            </td>
            <td>
              <h4>Amit <br /> <span>India</span></h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className={styles.imgBx}><img src="https://i.postimg.cc/Bn3JHgwV/customer02.jpg" /></div>
            </td>
            <td>
              <h4>David <br /> <span>Italy</span></h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className={styles.imgBx}><img src="https://i.postimg.cc/DymsM897/customer01.jpg" /></div>
            </td>
            <td>
              <h4>Amit <br /> <span>India</span></h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className={styles.imgBx}><img src="https://i.postimg.cc/Bn3JHgwV/customer02.jpg" /></div>
            </td>
            <td>
              <h4>David <br /> <span>Italy</span></h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className={styles.imgBx}><img src="https://i.postimg.cc/DymsM897/customer01.jpg" /></div>
            </td>
            <td>
              <h4>Amit <br /> <span>India</span></h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className={styles.imgBx}><img src="https://i.postimg.cc/DymsM897/customer01.jpg" /></div>
            </td>
            <td>
              <h4>David <br /> <span>Italy</span></h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className={styles.imgBx}><img src="https://i.postimg.cc/Bn3JHgwV/customer02.jpg" /></div>
            </td>
            <td>
              <h4>Amit <br /> <span>India</span></h4>
            </td>
          </tr>
        </tbody></table>
    </div>
  </div>
</div>

    </div>
  )
}

Dashboard.Layout = AdminLayout

export default Dashboard