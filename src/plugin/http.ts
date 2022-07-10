import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL

const HTTP = axios.create({
  baseURL: baseUrl,
})

export default HTTP
