import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './layout/AppLayput'
import AuthLayout from './layout/AuthLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

type Props = {}

const App = (props: Props) => {
  return (
    <Routes>

      <Route path='/' element={<AuthLayout />} >
        <Route index element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route path='/app' element={<AppLayout />} >
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App