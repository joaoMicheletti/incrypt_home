const Axios = require('axios');

const Api = Axios.create({
    baseURL: "http://localhot:3333",
    timeout: 10000,
    headers: {'Content-Type': 'Aplication/json; charset=utf8'}
});
export default Api;