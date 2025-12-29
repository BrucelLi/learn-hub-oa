import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { authRoute } from '@/routes/modules/auth.tsx'
const NotFoundView = lazy(() => import('@/views/errors/NotFoundView'))
const HomeView = lazy(() => import('@/views/HomeView'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />
  },
  ...authRoute,
  {
    path: '*',
    element: <NotFoundView />
  }
])
