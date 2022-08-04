/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from './adminLayout.module.scss';
import React, { useEffect, useRef, useState } from 'react'
import { IoChatbubbleOutline, IoHelpOutline, IoHomeOutline, IoLockClosedOutline, IoLogoOctocat, IoLogOutOutline, IoMenuOutline, IoPeopleOutline, IoSearchOutline, IoSettingsOutline } from 'react-icons/io5'
import { RiProductHuntLine } from 'react-icons/ri';
import { TbSlideshow } from 'react-icons/tb';
import { LayoutProps } from '../../../models/layout';
import { MdOutlineCategory } from 'react-icons/md';
import Link from 'next/link';


const AdminLayout = ({children}: LayoutProps) => {
  const navigationElement = useRef<HTMLDivElement>(null);
  const mainElement = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    const navigationE = navigationElement.current!;
    const mainE = mainElement.current!;
    if (toggle) {
      navigationE.classList.toggle(styles.active);
      mainE.classList.toggle(styles.active);
    }
    else{
      navigationE.classList.remove(styles.active);
      mainE.classList.remove(styles.active);
    }
  }, [toggle])


  return (
    <>
{/* =============== Navigation ================ */}
<div className={styles.container}>
  <div ref={navigationElement} className={styles.navigation}>
    <ul>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoLogoOctocat className={styles.io} />
          </span>
          <span className={styles.title}>Brand Name</span>
        </a>
      </li>
      <li>
      <Link href="/admin">
        <a href="#">
          <span className={styles.icon}>
            <IoHomeOutline className={styles.io} />
          </span>
          <span className={styles.title}>Dashboard</span>
        </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/products">
          <a>
          <span className={styles.icon}>
            <RiProductHuntLine className={styles.io} />
          </span>
          <span className={styles.title}>Product</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/categories">
          <a>
          <span className={styles.icon}>
            <MdOutlineCategory className={styles.io} />
          </span>
          <span className={styles.title}>Category</span>
          </a>
        </Link>
      </li>

      <li>
        <Link href="/admin/slider">
          <a>
          <span className={styles.icon}>
            <TbSlideshow className={styles.io} />
          </span>
          <span className={styles.title}>Slide</span>
          </a>
        </Link>
      </li>
      {/* <li>
        <a href="#">
          <span className={styles.icon}>
            <IoHelpOutline className={styles.io} />
          </span>
          <span className={styles.title}>Help</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoSettingsOutline className={styles.io} />
          </span>
          <span className={styles.title}>Settings</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoLockClosedOutline className={styles.io} />
          </span>
          <span className={styles.title}>Password</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoLogOutOutline className={styles.io} />
          </span>
          <span className={styles.title}>Sign Out</span>
        </a>
      </li> */}
    </ul>
  </div>
  {/* ========================= Main ==================== */}
  <div ref={mainElement} className={styles.main}>
    <div className={styles.topbar}>
      <div onClick={() => setToggle(!toggle)} className={styles.toggle}>
        <IoMenuOutline className={styles.io} />
      </div>
      <div className={styles.search}>
        <label>
          <input type="text" placeholder="Search here" />
          <IoSearchOutline className={styles.io} />
        </label>
      </div>
      <div className={styles.user}>
        <img src="https://i.postimg.cc/DymsM897/customer01.jpg" />
      </div>
    </div>

    <div className={styles.content}>
    {children}
    </div>
  </div>
</div>

    </>
  )
}

export default AdminLayout