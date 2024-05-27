import React, { Suspense, lazy } from 'react'
import { PublicRoute } from './PublicRoute'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Loader} from '../components/Loader'
import {HomeLayout} from '../components/Layouts/HomeLayout'
import 'react-toastify/dist/ReactToastify.css'
const Home = lazy(() => import('../pages/Home'))

const AppRouter = () => (
  <Router>
    <Suspense fallback={Loader}>
      <Routes>
        <Route
          path="/"
          element={<PublicRoute component={Home} layout={HomeLayout} />}
        />

      </Routes>
    </Suspense>
    <ToastContainer
      position="top-right"
      autoClose={4000}
      theme="colored"
      limit={3}
      style={{ marginTop: '50px' }}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </Router>
)

export default AppRouter
