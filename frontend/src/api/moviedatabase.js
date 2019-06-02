import axios from "axios";
const baseURL =
  process.env.NODE_ENV !== "production" ? "http://localhost:8080/api" : "/api";
export default axios.create({
  baseURL: baseURL
});
