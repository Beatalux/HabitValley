import axios from 'axios';


const access_token = localStorage.getItem('access_token')

export const getUserInfo = async () => {
  const response = await axios.get('/api/account/userInfo', {
    headers: { Authorization: `bearer ${access_token}` }
  })
  return response.data
}

export default { getUserInfo }