import { City, ListResponse } from "models";
import axiosClient from "./axiosClient";

const cityApi = {
    getAll() : Promise<ListResponse<City>> {
        const url ='/city'
        return axiosClient.get(url, {params: {
            page: 1, 
            limit: 10
        }});
    }
}

export default cityApi