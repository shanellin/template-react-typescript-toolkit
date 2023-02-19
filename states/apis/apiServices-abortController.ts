import isBrowser from "@utils/isBrowser"
import { apiBaseUrl } from "@utils/appConfig"
import axios, { Method, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

let http = axios.create({ baseURL: apiBaseUrl })

const getParams = (params) => (params ? JSON.stringify(params) : "")

const pending = new Map()

const addPending = (config: AxiosRequestConfig) => {
  const key = [config.method, config.url, getParams(config.params)].join("&")
  const controller = new AbortController()
  config.signal = controller.signal
  if (!pending.has(key)) pending.set(key, controller)
}

const removePending = (config: AxiosRequestConfig) => {
  const key = [config.method, config.url, getParams(config.params)].join("&")
  if (pending.has(key)) {
    const controller = pending.get(key)
    controller.abort()
    pending.delete(key)
  }
}

const onRequest = (configs: AxiosRequestConfig): AxiosRequestConfig => {
  if (isBrowser) {
    removePending(configs)
    addPending(configs)
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
  removePending(response)
  return response.data
}
const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (axios.isCancel(error)) return Promise.reject({ manualCancel: true })

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
