export default interface Point extends FormData {
  name: string
  email: string
  whatsapp: string
  uf: string
  city: string
  latitude: number
  longitude: number
  items: string
  image: File
}