/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";

function Product({ products }) {
  const params = useParams();

  let product = products.find((product) => product.id == +params.id);

  console.log(product);

  return (
    <div className="product container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img className="w-100 img-fluid" src={product.image} alt="" />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <h4 className="py-3">{product.price}</h4>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
            vero.
          </p>
          <a href="" className="btn btn-warning">
            Shop
          </a>
        </div>
      </div>
    </div>
  );
}
export default Product;
