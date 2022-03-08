import axios from "axios";

const apiClientPropertys = axios.create({
  baseURL: "https://lemus-api.herokuapp.com/api/w",

  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPropertys() {
    return apiClientPropertys.get("/estates");
  },
};
