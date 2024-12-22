/**
 * @file api.js is a service file that contains functions to fetch data from the API.
 * @name api
 * @returns {JSON} JSON data from the API
 * 
 */

const API_BASE_URL = "https://v2.api.noroff.dev/online-shop";

// Fetch all products
export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}`);
  return response.json();
};

// Fetch a single product by ID
export const fetchProductById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  return response.json();
};
