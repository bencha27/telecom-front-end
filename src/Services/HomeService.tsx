// @ts-nocheck

import axios from "axios";

const api = "https://localhost:5001/api/phoneplan";

export const phonePlanGetApi = async () => {
  try {
    const data = await axios.get(`${api}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    } else {
      console.error(`Unexpected error: ${error}`);
      return "An unexpected error occurred.";
    }
  }
}