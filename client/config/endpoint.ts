import axios from "axios";

const apiurl = "http://localhost:5000/api/items";

export const Api = axios.create({
  baseURL:apiurl
});
