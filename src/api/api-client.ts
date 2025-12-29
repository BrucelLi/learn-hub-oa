import axios, { type AxiosRequestConfig, type InternalAxiosRequestConfig } from 'axios'

export type InternalAxiosRequestExpansionConfig = InternalAxiosRequestConfig & {
  skipAuth?: boolean
  showLoading?: boolean
}

const instance = axios.create({
  baseURL: 'http://192.168.110.21:8080/api',
  timeout: 5000
})

instance.interceptors.request.use((config: InternalAxiosRequestExpansionConfig) => {
  if (!config.skipAuth) {
    const token = 'TOKEN_HERE'
    config.headers = Object.assign({}, config.headers, {
      Authorization: `Bearer ${token}`
    })
  }
  return config
})

instance.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
)

export const axiosInstance = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const res = await instance.request<T>(config)
  return res.data
}
