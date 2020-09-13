import axios from 'axios'
import { getToken } from './auth'
const baseUrl = '/api'


export const registerUser = formData => {
  console.log(formData)
  return axios.post(`${baseUrl}/auth/register/`, formData)
}

export const loginUser = formData => {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}

export const createComment = (formData, id) => {
  return axios.post(`${baseUrl}/comments/`, formData, withHeaders())
}


export const withHeaders = () => { 
  return {
    headers: { Authorization: `Bearer ${getToken()}` }  
  }
}

export const getAllMissions = () => {
  return axios.get(`${baseUrl}/missions/`)
}

export const createMission = formData => {
  return axios.post(`${baseUrl}/missions/`, formData, withHeaders())
}

export const editMission = (formData, id) => {
  return axios.put(`${baseUrl}/missions/${id}`, formData, withHeaders())
}

export const getSingleMission = id => {
  return axios.get(`${baseUrl}/missions/${id}`)
}

export const deleteMission = id => {
  return axios.delete(`${baseUrl}/missions/${id}`, withHeaders())
}
// {
//   "email": "aishath@email.com",
// 	"username": "aishath",
// 	"image": "--",
// 	"about_me": "about this person",
//   "password": "passthingie",
// 	"password_confirmation": "passthingie"
// }