import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; 
import classes from "./Results.module.css";
import ProductCard from "../../Components/Product/ProductCard";
import Layout from "../../Layout/Layout";
import Loader from "../../Components/Loader/Loader"

function Result() {
  const { categoryName } = useParams();
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
 setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => {setFilteredProduct(res.data)
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err)
      });
  }, []);
  console.log(filteredProduct);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {filteredProduct?.map((product) => (
              <ProductCard key={product.id} product={product} 
              renderAdd={true}
              />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Result;
