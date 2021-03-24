import axios from "axios"

const api = axios.create({
    baseURL: "https://book.interpark.com/api/",
    params: {
        key: process.env.REACT_APP_API_KEY,
        output: 'json'
    },
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
    }
})

export const bestSellerApi = async () => {
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
            query: term
        }
    })
}

export default api;