import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import ProductCard from './ProductCard';
import Pagination from '../Pagination';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Paginação
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="product-list">
      {currentProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Pagination 
        productsPerPage={productsPerPage} 
        totalProducts={products.length} 
        paginate={setCurrentPage}
      />
    </div>
  );
}

export default ProductList;
