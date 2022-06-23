import axios from "axios"

// const baseUrl = 'https://polar-mountain-19321.herokuapp.com/api/persons';
const baseUrl = '/api/persons';

export const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
export const getPersonDB = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export const createInDB = (newObj) => {
    const request = axios.post(baseUrl, newObj)
    return request.then(response => response.data)
}

export const deletePersondDB = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export const updatePersonDB = (id, newObj) => {
    const request = axios.put(`${baseUrl}/${id}`, newObj)
    return request.then(response => response.data)
}