import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Products({ products }) {
  return (
    <div className="shop py">
      <div className="container">
        <h2 className="mb-5 text-center">Prodavnica</h2>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 text-center" key={index}>
              <div className="product">
                <img className="img-fluid pb-4" src={product.image} alt="" />
                <h4>{product.title}</h4>
                <p>{product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-warning">
                  Add to basket
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a href="">
            Pogledaj ostale proizvode <i className="bi bi-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Products;
