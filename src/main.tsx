import '@/assets/styles/index.css'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/routes/index.tsx'
import { renderErrorHandler } from '@/shared/globalErrorHandler.ts'
import NotFoundView from '@/views/errors/NotFoundView.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={NotFoundView} onError={renderErrorHandler}>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </ErrorBoundary>
  </StrictMode>
)
