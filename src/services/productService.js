import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:9999/api/products/getall")
    }

}