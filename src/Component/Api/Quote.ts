import axios from "axios";

const BASE_URL = "https://api.quotable.io/";

export const getRandomQuote = () => {
  return axios.get(BASE_URL + "random").then((res) => {
    return res.data;
  });
};

export const fetchTags = () => {
  return axios.get(BASE_URL + "tags").then((res) => {
    return res.data;
  });
};
