import { Link } from "react-router-dom";

function Shop() {
  return (
    <>
      <div className="cta py">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 p-5">
              <h2>Shope pages</h2>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium magnam iure saepe eos? Ullam nostrum quo, corrupti
                facilis sunt illo?
              </p>
              <Link to="/products" className="btn btn-primary">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* message */}
      <div className="message py">
        <h2 className="text-center text-white">Sve na jednom mestu sve vama</h2>
      </div>
    </>
  );
}
export default Shop;
