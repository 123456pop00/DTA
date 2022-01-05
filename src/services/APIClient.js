import axios from 'axios'
import Router from 'vue-router';
var a = 1;
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_API,
  timeout: process.env.VUE_APP_TIME_OUT,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'OKE' : a
  },
})
apiClient.interceptors.response.use(function(response) {
  const data = response.data
  if (data.status && data.status !== 200) {
    const error = new Error(data.message || data.data)
    error.status = data.status
    error.data = data.data
    throw error
  }
  // else {
  //   window.location.href = "/components/texteditor/";
  // }
  return data
}, function(error) {
  return Promise.reject(error)
})

export default apiClient
