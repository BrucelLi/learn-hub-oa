import '@/assets/styles/common.css'
import '@/locales/i18n'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/routes'
import { renderErrorHandler } from '@/shared/globalErrorHandler.ts'
import ErrorView from '@/views/errors/ErrorView.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorView} onError={renderErrorHandler}>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </ErrorBoundary>
  </StrictMode>
)
