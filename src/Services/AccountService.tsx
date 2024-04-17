// @ts-nocheck

import axios from "axios";

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