import axios from 'axios'
import { defaultConfig } from './defaultConfig'
const BaseUrl = 'https://swapi.dev/api/'

const axiosInstance = axios.create({
  ...defaultConfig(),
  baseURL: BaseUrl,
})
axiosInstance.defaults.timeout = 300000

export default axiosInstance
