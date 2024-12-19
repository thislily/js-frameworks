const API_BASE_URL = "https://v2.api.noroff.dev/online-shop";

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}`);
  return response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  return response.json();
};
