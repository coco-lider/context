import React, { createContext, useContext, useReducer } from 'react';
import productReducer from '../reducers/productReducer';

const ProductContext = createContext();

const initialState = {
  categories: [],
  products: [],
  loading: false,
  error: null,
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
