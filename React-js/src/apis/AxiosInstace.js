import axios from "axios";
let AxiosInstace = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: { "Content-Type": "application/json" },
});
export default AxiosInstace;
