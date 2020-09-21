import Axios from "axios";

export const API_URL = "http://localhost:1337";

export const getEvents = async () => {
  const response = await Axios.get(`${API_URL}/events`);
  return response.data;
};
