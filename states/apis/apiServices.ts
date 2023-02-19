import isBrowser from "@utils/isBrowser"
import { apiBaseUrl } from "@utils/appConfig"
import axios, { Method, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

let http = axios.create({ baseURL: apiBaseUrl })

const onRequest = (configs: AxiosRequestConfig): AxiosRequestConfig => {
  if (isBrowser) {
    let Token = ""
    if (Token && configs.headers) {
      configs.headers.Authorization = `Bearer ${Token}`
    }
  }
  return configs
}
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  log(response.config, response.data)
  return response.data
}
const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  let { response } = error
  if (isBrowser && response) {
    log(response.config, response.data)
    if (errorCodeCheck(response.status)) {
      //...
    }
  }
  return Promise.reject(response)
}

http.interceptors.request.use(onRequest, onRequestError)
http.interceptors.response.use(onResponse, onResponseError)

export const errorCodeCheck = (status: number) => {
  return status === 401 || status === 403
}

function log({ url, method, isAxiosError }: { url?: string; method?: Method; isAxiosError?: boolean }, text: any) {
  console.log(`%c ${method}/${url} `, `color: white; background-color: #${isAxiosError ? "f66361" : "95B46A"}`, text)
}

export default http
