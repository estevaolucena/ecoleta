import api from './api'

const PointService = () => {

  const create = async (data: FormData) => {
    try {
      const response = await api.post('points', data)
      return response.data
    } catch (error) {
      console.log('Error ', error)
      return error
    }
  }

  return {
    create,
  }
}

export default PointService