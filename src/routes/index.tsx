import { createBrowserRouter } from 'react-router-dom'

import NotFoundView from '@/views/errors/NotFoundView.tsx'
import Home from '@/views/Home.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '*',
    element: <NotFoundView />
  }
])
