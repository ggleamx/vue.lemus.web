import axios from "axios";

const apiClientPropertys = axios.create({
  baseURL: "http://lemus.gleam.mx/api/w",

  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async getPropertys() {
    return apiClientPropertys.get("/estates");

  },
  // async getProperty() {

  // }

};

