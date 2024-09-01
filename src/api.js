const API_URL = 'https://api.escuelajs.co/api/v1/products';

export const getProducts = async () => {
  const response = await fetch(`${API_URL}?limit=20`);
  return response.json();
};

export const createProduct = async (product) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  return response.json();
};

export const updateProduct = async (id, product) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  return response.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
};
