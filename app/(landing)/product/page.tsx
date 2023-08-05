// 'use client'

import ProductClient from "./Product";

const ProductServer = async () => {
    const response = await fetch("https://chungta.vanhanhhethong.com/api/users");
    const movies = await response.json();

    return(<ProductClient  props={movies}/>)
}

export default ProductServer