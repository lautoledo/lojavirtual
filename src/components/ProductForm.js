import React, { useState } from 'react';
import { createProduct, updateProduct } from '../api';
import '../styles/products.css';

function ProductForm({ existingProduct, onSave }) {
  const [title, setTitle] = useState(existingProduct ? existingProduct.title : '');
  const [price, setPrice] = useState(existingProduct ? existingProduct.price : '');
  const [image, setImage] = useState(existingProduct ? existingProduct.image : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { title, price, images: [image] };

    if (existingProduct) {
      await updateProduct(existingProduct.id, product);
    } else {
      await createProduct(product);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input 
        type="text" 
        placeholder="Título" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Preço" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="URL da Imagem" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
      />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default ProductForm;



