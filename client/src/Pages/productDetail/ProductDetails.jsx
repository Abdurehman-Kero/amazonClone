import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";
import axios from "axios"; 
// import Spinner from "../../components/Loading/Spinner";
import Layout from "../../Layout/Layout";
import ProductCard from "../../Components/Product/ProductCard";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        // setIsLoading(false);
      })
      .catch((err) => {
        // setIsLoading(false);
        console.log(err);
      });
  }, []);
  console.log(product);
  return (
    <Layout>
      { <ProductCard product={product}   />}
    </Layout>
  );
}

export default ProductDetail;
