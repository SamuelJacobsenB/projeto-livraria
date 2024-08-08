import axios from "axios";
//------------------------------------------------------
const api = axios.create({
    baseURL: 'http://localhost:2024', //My API domain
});
//------------------------------------------------------
export default api;