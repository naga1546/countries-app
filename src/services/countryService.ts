import axios from "axios";

const API_URL = "https://restcountries.com/v3.1/all";  // or use your local data

export const fetchCountries = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
