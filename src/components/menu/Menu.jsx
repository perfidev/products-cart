import React, { useContext, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import Loader from "../../ui/Loader";

import { getProducts } from "../../services/apiProducts";
import { useCart } from "../../contexts/CartContext";

function Menu() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { shouldRefreshProducts } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [shouldRefreshProducts]);

  return isLoading ? (
    <Loader />
  ) : (
    <ul className="grid grid-cols-1 gap-6 list-none sm:grid-cols-2 sm:auto-rows-auto md:grid-cols-3 md:gap-y-8 md:gap-x-6">
      {products.map((product) => (
        <MenuItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default Menu;
