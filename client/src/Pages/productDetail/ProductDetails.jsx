import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";
import axios from "axios"; 
 
import Layout from "../../Layout/Layout";
import ProductCard from "../../Components/Product/ProductCard";
import  Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setIsLoading(false);
        setProduct(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  console.log(product);
  return (
    <Layout>
      {isLoading? (<Loader/>):  <ProductCard product={product} flex renderDesc renderAdd={true} />
}
    </Layout>
  );
}

export default ProductDetail;
