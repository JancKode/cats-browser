import axios from 'axios'

const url = 'https://api.thecatapi.com/v1'

const apiKey = '7c810948-e1f0-4f6c-bead-8d3823bf95ec'

axios.defaults.headers.common['x-api-key'] = apiKey

const instance = axios.create({
    baseURL: url,
})

export default instance