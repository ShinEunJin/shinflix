import axios from "axios";

const api = axios.create({
    baseURL: "api/",
    params: {
        key: process.env.REACT_APP_API_KEY,
        output: 'json'
    }
})

export const bestSellerApi = () => {
    return api.get("bestSeller.api", {
        params: {
            categoryId: 100
        }
    })
}

export const recommendApi = () => {
    return api.get("recommend.api", {
        params: {
            categoryId: 100
        }
    })
}

export const newApi = () => {
    return api.get("newBook.api", {
        params: {
            categoryId: 100
        }
    })
}

export const searchApi = term => {
    return api.get("search.api", {
        params: {
            query: encodeURIComponent(term)
        }
    })
}

export default api;