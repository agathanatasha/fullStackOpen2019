import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = newObject => {
    const request = axios.put(`${baseUrl}/${newObject.id}`, newObject)
    return request.then(response => response.data)
}

const remove = personId => {
    const request = axios.delete(`${baseUrl}/${personId}`)
    return request.then(() => getAll())
}

export default {getAll, create, update, remove}