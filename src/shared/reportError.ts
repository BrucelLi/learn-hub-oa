import { ReportErrorType } from '@/enums/error.ts'

export const reportError = (error: string | Record<string, unknown>, type: ReportErrorType) => {
  // eslint-disable-next-line no-console
  console.error('reportError:', error, type)
}
