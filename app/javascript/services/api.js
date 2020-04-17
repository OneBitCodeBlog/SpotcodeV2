import axios from 'axios';
const Api = axios.create({baseURL: '/api/v1'});
export default Api;