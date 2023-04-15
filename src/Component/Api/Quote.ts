import axios from "axios";

const BASE_URL = "https://api.quotable.io/";

export const getRandomQuote = (tag: string) => {
  return axios.get(BASE_URL + "random?tags=" + tag).then((res) => {
    return res.data;
  });
};

export const fetchTags = () => {
  return axios.get(BASE_URL + "tags").then((res) => {
    return res.data;
  });
};
