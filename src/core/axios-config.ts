import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.api-futebol.com.br/v1",
});

api.defaults.headers.common['Authorization'] = 'Bearer test_09f39093beee53892f81baa01c7183';