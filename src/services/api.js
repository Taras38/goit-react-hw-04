import axios from "axios";

export const fetchArticles = async (query, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID DI2RCzcI3Kemtgeww-d0e7b4gd8eBDpOM_iUREexAOM`,
    },
  });

  return response.data;
};
