import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from 'Stores/store'

function MainLayout() {
  const token = useAppSelector(store => store.auth.token)

  return (
    !token
      ? <Navigate to="/login" />
      : <Outlet />
  )
}

export { MainLayout }
