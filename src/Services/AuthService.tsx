// @ts-nocheck

import axios from "axios";

const api = "https://localhost:5001/api/user";

export const loginApi = async (username, password) => {
  try {
    const data = await axios.post(`${api}/login`, { username, password });
    return data;
  } catch(error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    } else {
      console.error(`Unexpected error: ${error}`);
      return "An unexpected error occurred.";
    }
  }
};

export const signupApi = async (username, email, password) => {
  try {
    const data = await axios.post(`${api}`, { username, email, password });
    return data;
  } catch(error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    } else {
      console.error(`Unexpected error: ${error}`);
      return "An unexpected error occurred.";
    }
  }
};