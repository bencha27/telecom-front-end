// @ts-nocheck

import axios from "axios";

export const search = async (query) => {
  try {
    const data = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    } else {
      console.error(`Unexpected error: ${error}`);
      return "An unexpected error occurred."
    }
  }
}