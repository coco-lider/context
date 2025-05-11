    import React, { useEffect, useState } from 'react';
    import { useParams } from 'react-router-dom'; // ❗ Qo‘shilgan
    import { useProductContext } from '../context/ProductContext';
    import ProductCard from './ProductCard';

    const ProductPage = () => {
    const { categoryId } = useParams(); // ✅ To‘g‘ri ishlatilmoqda
    const { state, dispatch } = useProductContext();
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            dispatch({ type: 'SET_LOADING' });
            const response = await fetch(`https://fakestoreapi.com/products?categoryId=${categoryId}`);
            const data = await response.json();
            dispatch({ type: 'SET_PRODUCTS', payload: data });
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
        <h2>Products</h2>
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