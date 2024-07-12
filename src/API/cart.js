// src/api.js
import axios from "axios";

const API_URL = "http://localhost:3001"; // Ganti dengan URL backend kamu

export const fetchCarts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/carts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching carts:", error);
    throw error;
  }
};