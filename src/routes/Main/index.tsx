import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
  Header,
  Footer,
} from '../../components'
import Explosion from '../../components/Explosion'
import '../../scss/main.scss'

export const Main: React.FC = () => {
  return (
    <>
      <Explosion waitBeforeShow={2550} />
      <Header />
      <main id='main'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
