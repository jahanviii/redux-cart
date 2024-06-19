import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBarPAnel'

const RootLayout = () => {
  return (
    <>
     <Provider store={store}>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
      
      </Provider> 
    </>
  )
}

export default RootLayout
