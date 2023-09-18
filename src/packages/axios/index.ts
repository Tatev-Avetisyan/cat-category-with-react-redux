import axios from "axios";

const defaultOptions = {
  baseURL: process.env.REACT_APP_BASE_URL,
};

export const axiosBaseUrl = axios.create(defaultOptions);
