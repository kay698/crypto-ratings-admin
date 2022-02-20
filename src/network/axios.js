import axios from "axios";

const instance = axios.create({
  baseURL: "https://iraters-backend.herokuapp.com",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("admin_token")}` || null,
  },
});

export default instance;
