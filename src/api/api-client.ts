import axios, { type InternalAxiosRequestConfig } from 'axios'

export type InternalAxiosRequestExpansionConfig = InternalAxiosRequestConfig & {
  skipAuth?: boolean
  showLoading?: boolean
}

export const axiosInstance = axios.create({
  baseURL: 'http://192.168.110.21:8080/api',
  timeout: 5000,
  headers: {
    Authorization: 'Bearer TOKEN_HERE'
  }
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestExpansionConfig) => {
    return config
  },
  (error) => {
    if (error instanceof Error) {
      return Promise.reject(error)
    }
    return Promise.reject(new Error(String(error)))
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
