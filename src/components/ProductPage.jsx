import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import { getProductsByCategory } from '../api/api';

const ProductPage = () => {
  const { categoryId } = useParams();
  const { state, dispatch } = useProductContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch({ type: 'SET_LOADING' });
        const res = await getProductsByCategory(categoryId);
        dispatch({ type: 'SET_PRODUCTS', payload: res.data });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
    };
    fetchProducts();
  }, [dispatch, categoryId]);

  if (state.loading) return <div>Loading...</div>;
  if (state.error) return <div>Error: {state.error}</div>;

  return (
    <div>
      <h2>Products in {categoryId}</h2>
      <div>
        {state.products
          .filter((product) => product.price <= 100)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductPage;