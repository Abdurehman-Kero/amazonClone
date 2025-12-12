import { useContext, useState } from "react";
import classes from "./product.module.css";
import Rating from "@mui/material/Rating";
import { DataContext } from "../Context/DataProvider";
import { Link } from "react-router-dom";
import CurrencyFormatter from "../CurrencyFormatter";

function ProductCard({ product }) {
  const { image, title, rating, price, id, description } = product;
const [state, dispatch] = useContext(DataContext);


  const addToCart = () => {
    dispatch({ type: "ADD_TO_BASKET", item: product });
  };

  // console.log(state.basket);

  return (
    <div className={classes.card__container}>
      <Link to={`/product/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>

      <div>
        <h3>{title}</h3>

        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>

        <div>
          <CurrencyFormatter amount={price} />
        </div>

        <button className={classes.button} onClick={addToCart}>
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
