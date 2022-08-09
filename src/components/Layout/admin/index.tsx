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
import { FaRegUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../../models/user';
import { useRouter } from 'next/router';
import { signout } from '../../../features/auth/auth.slice';
import PrivateRoute from '../../PrivateRoute';


const AdminLayout = ({children}: LayoutProps) => {
  const boxUser = useRef<HTMLDivElement>(null);
  const navigationElement = useRef<HTMLDivElement>(null);
  const mainElement = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const [showModelUser, setShowModelUser] = useState<Boolean>(false);
  const curentUser = useSelector(
    (state: any) => state.auth.currentUser
  ) as IUser;
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const handleSignout = () => {
    dispatch(signout());
    router.push('/signin');
  };
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

  useEffect(() => {
    const boxUserElement = boxUser.current!;
    if (showModelUser) {
      boxUserElement.style.display = "block";
    } else {
      boxUserElement.style.display = "none";
    }
  }, [showModelUser]);
  return (
    <PrivateRoute>
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

      <li>
        <Link href="/admin/users">
          <a>
          <span className={styles.icon}>
            <FaRegUser className={styles.io} />
          </span>
          <span className={styles.title}>User</span>
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
      <div className={styles.user} onClick={() => setShowModelUser(!showModelUser)}>
        <img src={curentUser.user?.avatar} />
        {/* ---------------------- */}
        <div ref={boxUser} className={styles.box}>
                <ul>
                  <li>
                    <span className="block italic">Xin chào!</span>
                    <span className="font-bold">
                      {curentUser.user?.firstName}
                    </span>
                  </li>
                    <li>
                      <Link href="/">Trang chủ</Link>
                    </li>
                  <li>
                    <div onClick={() => handleSignout()}>Đăng xuất</div>
                  </li>
                </ul>
            </div>

        {/* --------------------- */}
      </div>
    </div>

    <div className={styles.content}>
    {children}
    </div>
  </div>
</div>

    </PrivateRoute>
  )
}

export default AdminLayout