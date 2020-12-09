import axios from 'axios'
import { categories, searchJoke, randomCategory} from './paths'

const getPath = (path) => `${URL}${path}`;

const URL = "https://api.chucknorris.io/jokes/"

const getJokes = async () => {
        try {
            let response = axios.get(getPath(categories))
            return response.data
        } catch (error) {
            console.error(error);
            throw error
        }
}

export default getJokes;