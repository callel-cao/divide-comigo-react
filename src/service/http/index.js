import axios from 'axios';

const get = async (target) => {
    try {
        const url = 'https://pokeapi.co/api/v2/' + target;
        const data = (await axios.get(url)).data;
        return data;
    }
    catch (err) {
        throw err;
    }
};

export default {
    get
};