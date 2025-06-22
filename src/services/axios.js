import axios from "axios";

// axios instance
const api = axios.create({
  baseURL: `${import.meta.env.VITE_SUPABASE_URL}/rest/v1`,
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_KEY,
    Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
    "Content-type": "application/json",
    // return data after insert
    Prefer: "return=representation",
  },
});

export default api;
