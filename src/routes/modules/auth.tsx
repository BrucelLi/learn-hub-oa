import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
const LoginView = lazy(() => import('@/views/auth/LoginView'))

export const authRoute: RouteObject[] = [
  {
    path: '/auth',
    children: [
      {
        index: true,
        element: <LoginView />
      }
    ]
  }
]
