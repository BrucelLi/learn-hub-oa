import axios, { type InternalAxiosRequestConfig } from 'axios'

export type InternalAxiosRequestExpansionConfig = InternalAxiosRequestConfig & {
  skipAuth?: boolean
  showLoading?: boolean
}

const instance = axios.create({
  baseURL: 'http://192.168.110.21:8080/api',
  timeout: 5000,
  headers: {
    Authorization: 'Bearer TOKEN_HERE'
  }
})

instance.interceptors.request.use(
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

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export const axiosInstance = <T>(config: InternalAxiosRequestConfig): Promise<T> => {
  return instance.request<T>(config).then((response) => response.data)
}
