import axios from 'axios'

const clientAxios = axios.create({
    baseURL : 'http://localhost:4010/api/'
})

export default clientAxios