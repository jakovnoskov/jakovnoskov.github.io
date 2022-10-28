import React, { Suspense } from 'react'
import { createHashRouter } from 'react-router-dom'
import { Main } from './Main'
import { Skills } from './Skills'
//import { Detail } from './Detail'
//import { Cart } from './Cart'
// import { Orders } from './Orders'
// import { NotFound } from './NotFound'
// import { ErrorPage } from './ErrorPage'
import { GlobalLoader } from '../components/GlobalLoader'

//const Cart: React.FC = React.lazy(() => import('./Cart'))

const JobExperience: React.FC = React.lazy(() => import(/*webpackChunkName: "JobExperience"*/'./JobExperience'))
const Detail: React.FC = React.lazy(() => import(/*webpackChunkName: "Detail"*/'./Detail'))
const Contacts: React.FC = React.lazy(() => import(/*webpackChunkName: "Contacts"*/'./Contacts'))
const Projects: React.FC = React.lazy(() => import(/*webpackChunkName: "Projects"*/'./Projects'))
const NotFound: React.FC = React.lazy(() => import(/*webpackChunkName: "NotFound"*/'./NotFound'))
const ErrorPage: React.FC = React.lazy(() => import(/*webpackChunkName: "ErrorPage"*/'./ErrorPage'))

export const router = createHashRouter([
  {
    path: '',
    element: <Suspense fallback={<GlobalLoader />}><Main /></Suspense>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/',
        element: <Skills />,
      },
      {
        path: '/:id',
        element: <Detail />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'experience',
        element: <JobExperience />,
      },
    ],
  },
]) 