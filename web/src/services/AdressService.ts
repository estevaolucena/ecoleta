import api from './api'

import Uf from '../models/Uf'
import City from '../models/City'

const IBGE_API = process.env.REACT_APP_IBGE_API

const AdressService = () => {

  const getUfs = async () => {
    try {
      const response = await api.get<Uf[]>(`${IBGE_API}`)
      const ufInitials = response.data.map(uf => uf.sigla)
      return ufInitials
    } catch (error) {
      return error
    }
  }

  const getCities = async (selectedUf: string) => {
    try {
      const response = await api.get<City[]>(`${IBGE_API}${selectedUf}/municipios`)
      const cityNames = response.data.map(city => city.nome)
      return cityNames
    } catch (error) {
      return error
    }
  }

  return {
    getUfs,
    getCities,
  }  
}

export default AdressService

