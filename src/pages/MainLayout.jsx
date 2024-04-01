import React from 'react'
import HeaderTop from '../components/HeaderTop'
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
  return (
    <>
      <HeaderTop />
      <Outlet />
    </>
  )
}

export default MainLayout
