import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../service/api';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const response = await fetchProducts();
        setProducts(response.data);
        setFilteredProducts(response.data); // Initially set filtered products to all products
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  useEffect(() => {
    // Filter products based on the search term
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  return (
    <div>
      <h1>Home Page</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
