import { useEffect, useState } from "react";
import classes from "./Product.module.css";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "../../Components/Loader/Loader"
function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setIsLoading(false)
        setProducts(res.data)
      })
      .catch((err) => { 
        setIsLoading(false);
        console.log(err)
      }
      );
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product}  
            renderAdd={true}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
