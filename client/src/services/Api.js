import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://vuejs-login-elisal.c9users.io:8081`
  })
}
