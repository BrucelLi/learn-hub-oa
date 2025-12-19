import type { ErrorInfo } from 'react'

import { ReportErrorType } from '@/enums/error.ts'
import { reportError } from '@/shared/reportError.ts'

export const initGlobalErrorHandler = () => {
  window.addEventListener('error', (event) => reportError(event.error || event.message, ReportErrorType.Error))
  window.addEventListener('unhandledrejection', (event) =>
    reportError(event.reason, ReportErrorType.Unhandledrejection)
  )
}

export const renderErrorHandler = (error: Error, info: ErrorInfo) => {
  reportError({ error: error, errorInfo: info }, ReportErrorType.renderError)
}
