import api from "./axios";

export async function getAllProducts() {
  try {
    const res = await api.get("/products?select=*&order=id.asc");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
