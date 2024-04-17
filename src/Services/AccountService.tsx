// @ts-nocheck

import axios from "axios";
import exp from "constants";

const api = "https://localhost:5001/api/user";

export const getBillsApi = async (userId)=>{
    try{
        const data = await axios.get(`${api}/${userId}/bills`);
        return data;
    }catch(error){
        if(axios.isAxiosError(error)){
        console.error(error.message);
        }else{
        console.error(`Unexpected error: ${error}`);
        return "An unexpected error occurred.";
        }
    }
}
export const getPhonePlansApi = async (userId) => {
    try {
        const data = await axios.get(`${api}/${userId}/phoneplan`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.message);
        }
    }
}
export const getDevicesApi = async (userId) => {
    try {
        const data = await axios.get(`${api}/${userId}/device`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.message);
        }
    }
}