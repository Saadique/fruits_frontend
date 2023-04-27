import axios from './axios';

const fetchAllFruits = (data) => {
    return axios.get('/fruits', {params : {
        page : data.page,
        name : data.name,
        family: data.family
    }});
}


export default {
    fetchAllFruits: fetchAllFruits
}