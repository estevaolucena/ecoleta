import axios from 'axios'

// CONFIGURAR VARIÁVEIS DE AMBIENTE
const api = axios.create({
  baseURL: 'http://localhost:3000/'
})

export default api