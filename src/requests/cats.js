import axios from "axios";

export const fetchCats = () => {
  return axios.get("https://aws.random.cat/meow");
};
