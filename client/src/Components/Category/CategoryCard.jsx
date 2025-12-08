import classes from "./Category.module.css";
import Category from "./Catergory";
function CategoryCard({info}) {
  return (
    <div className={classes.category}>
      <a href={`/category/${info.name}`}>
        <span>
          <h2>{info.title}</h2>
        </span>
        <img src={info.imgLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
