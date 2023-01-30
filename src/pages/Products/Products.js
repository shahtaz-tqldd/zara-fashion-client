import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div>Products: {products?.length} </div>
    )
}

export default Products