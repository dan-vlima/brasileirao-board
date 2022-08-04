import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.api-futebol.com.br/v1",
});

export const cartolaAPI = axios.create({
    baseURL: "https://api.cartola.globo.com",
});

api.defaults.headers.common['Authorization'] = 'Bearer test_09f39093beee53892f81baa01c7183';