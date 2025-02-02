import API from '../utils/API'

export const addVelhice = async (plate) => {
  const token = localStorage.getItem('@fleet-control/token')
  const url = `/vehicle`
  const body = { plate }
  return await API.post(url, body, { headers: { Authorization: token } })
}

export const removeVelhice = async (id) => {
  const token = localStorage.getItem('@fleet-control/token')
  const url = `/vehicle/${id}`
  return await API.delete(url, { headers: { Authorization: token } })
}

export const getAllVelhices = async () => {
  const token = localStorage.getItem('@fleet-control/token')
  const url = `/vehicle`
  return await API.get(url, { headers: { Authorization: token } })
}
