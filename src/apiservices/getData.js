import { API_URL } from './config'
import axios from 'axios'

async function getData() {
    try {
        const data = await axios.get(API_URL)
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

export default getData();