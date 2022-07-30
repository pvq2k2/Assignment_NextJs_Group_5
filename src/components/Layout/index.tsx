import React from 'react'
import styles from './styles/WebsiteLayout.module.scss';
import Footer from '../Footer'
import Header from '../Header'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
    <Header />
    <div className={styles.main}>
    {children}
    </div>
    <Footer />
    </>

  )
}

export default Layout