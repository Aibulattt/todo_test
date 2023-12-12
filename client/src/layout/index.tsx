import { CircularProgress, Container } from '@mui/material'
import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { useAppSelector } from 'Stores/store'

import { Auth } from '@/pages/auth'
import { MainPage } from '@/pages/main'
import { Signup } from '@/pages/signup'

import { MainLayout } from './main-layout'

function PreRoute() {
  const token = useAppSelector(store => store.auth.token)

  if (!token) {
    return <Navigate to="/login" />
  }

  return (
    <React.Suspense fallback={<Container><CircularProgress /></Container>}>
      <Outlet />
    </React.Suspense>
  )
}

function Router() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route index element={<Navigate to="/todos" />} />
      <Route path="/todos" element={<PreRoute />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Auth />} />
    </Routes>
  )
}

export { Router }
