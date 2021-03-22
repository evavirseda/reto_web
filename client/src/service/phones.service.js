import axios from 'axios'

class PhonesService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`,
            withCredentials: true
        })
    }

    getAllPhones = () => this.api.get('/phones')
    getOnePhone = phoneId => this.api.get(`/details/${phoneId}`)
}

export default PhonesService