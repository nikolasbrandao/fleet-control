import API from '../utils/API'

export const login = async (email, password) => {
  const url = `/auth`
  const body = { email, password }
  return await API.post(url, body)
}
