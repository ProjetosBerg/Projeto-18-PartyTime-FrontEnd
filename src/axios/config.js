import axios from "axios";

const partyFetch = axios.create({
  baseURL: "https://projeto-18-partytime-backend.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
