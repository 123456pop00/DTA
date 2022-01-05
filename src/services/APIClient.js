import axios from 'axios'
import Router from 'vue-router';
import workLocalStorage from "../common/workLocalStorage";
var dataUser =  workLocalStorage("DataUser");
var token  = dataUser.get("Token");
console.log(token);
var headers ={};
if(!token){
  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
} else {
  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization' : token
  }
}
console.log(headers);
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_API,
  timeout: process.env.VUE_APP_TIME_OUT,
  withCredentials: false,
  headers: headers,
})
apiClient.interceptors.response.use(function(response) {
  const data = response.data
  if (data.ResultCode && data.ResultCode == 401 ) {
    dataUser.removeKey("DataUser");
    window.location.href = "/login/";
    // const error = new Error(data.message || data.data)
    // error.status = data.status
    // error.data = data.data
    // throw error
  }
  // else {
  //   window.location.href = "/components/texteditor/";
  // }
  return data
}, function(error) {
  return Promise.reject(error)
})

export default apiClient
