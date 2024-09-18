import axios from "axios";

const partyFetch = axios.create({
  baseURL: "https://projeto-18-party-time-backend.vercel.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
