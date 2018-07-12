import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-5649f.firebaseio.com/'
});

export default instance;