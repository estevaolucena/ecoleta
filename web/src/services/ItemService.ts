import api from './api'

const ItemService = () => {

  const get = async () => {
    try {
      const response = await api.get('items')
      return response.data
    } catch (error) {
      return error
    }
  }

  return {
    get
  }
}

export default ItemService