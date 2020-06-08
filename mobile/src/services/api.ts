import axios from 'axios'

// CONFIGURAR COMO VARIAVEIS DE AMBIENTE
const api = axios.create({
  baseURL: 'http://192.168.15.147:3000'
})

export default api