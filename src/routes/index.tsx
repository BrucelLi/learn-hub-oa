import { createBrowserRouter } from 'react-router-dom'

import NotFound from '@/views/errors/NotFound.tsx'
import Home from '@/views/Home.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '*',
    element: <NotFound />
  }
])
