import { useContext, useState } from "react";
import classes from "./product.module.css";
import Rating from "@mui/material/Rating";
import { DataContext } from "../Context/DataProvider";
import { Link } from "react-router-dom";
import CurrencyFormatter from "../CurrencyFormatter";
import { Type } from "../../utils/action.type";

function ProductCard({ product, flex, renderDesc }) {
  const { image, title, rating, price, id, description } = product;
// console.log(description);
  const [state, dispatch] = useContext(DataContext);
  console.log(state);
  const addToCart = () => {
    dispatch({
      type:  Type.ADD_TO_BASKET,
      item: { image, title, rating, price, id, description },
    });
  };
  // console.log(state);

  // console.log(state.basket);

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/product/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>

      <div>
        <h3>{title}</h3>

        {renderDesc && <div style={{ maxWidth: "700px" }}>{description}</div>}
        
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
