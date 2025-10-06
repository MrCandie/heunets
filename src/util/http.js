import axios from "axios";

const API_URL = "http://localhost:4000/api/work-items";

export const fetchWorkItems = async (userId) => {
  const { data } = await axios.get(`${API_URL}?userId=${userId}`);
  return data;
};

export const createWorkItem = async (newItem) => {
  const { data } = await axios.post(API_URL, newItem);
  return data;
};
