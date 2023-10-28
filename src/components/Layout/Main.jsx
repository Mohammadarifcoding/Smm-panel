import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Pages/Header'
import Footer from '../Pages/Footer'
import Header from '../Pages/Header'

export default function Main() {
  return (
    <div >
       <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
  )
}
