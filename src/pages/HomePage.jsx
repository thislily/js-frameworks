/**
 * @file HomePage.jsx is the home page where the user can see all the products and search for a product.
 * @name HomePage
 * @returns {JSX.Element} Home page component
 */

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../service/api';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import MessageBox from '../components/MessageBox';
import LoadingBar from '../components/LoadingBar';


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
        setFilteredProducts(response.data); // First set filtered products to all products
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  useEffect(() => {
    if (!products) return;
    // Filter products based on the search term
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  if (!products) {
    return <MessageBox border='darkred 4px solid' message='We are having some dificulties, please come back later!' />;
  }

  return (
    <div>
      <h1 className='font-heading text-4xl text-center my-6' >Welcome home friend, get shoppin'!</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading && <LoadingBar />}
      {error && <MessageBox border='darkred 4px solid' message='Something went wrong' />}
      {filteredProducts.length === 0 && <MessageBox border='darkred 4px solid' message='No products found' />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
