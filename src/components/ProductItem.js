import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
//   const product = props.product;
//   const cookiedId = useParams().product.id
// console.log(cookieId)

let product = props.product;

  return (
    <div className="productWrapper">
      < Link to = {`/ProductList/${product.id}`}><img alt={product.name} src={product.image} /></Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
    </div>
  );
};

export default ProductItem;
