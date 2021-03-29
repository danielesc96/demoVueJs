import axios from 'axios'
import config from '../../config.js'
const axiosConfig = {
  baseURL: config.serviceURL
}
const ds = axios.create(axiosConfig)
export default ds