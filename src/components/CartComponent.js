import { RESTO_URL } from "../utils/constants";

const CartComponent = (props) => {
  const { resData } = props;

  return (
    <div>
      <div className="cart-sec">
        <div className="card">
          {/* <img className="card-img-top" src={ RESTO_URL + resData.data.cloudinaryImageId} /> */}
          <div className="card-body">
            <div className="rest-title">
              <b>{resData.data.name}</b>
            </div>
            <ul>
              <li>{resData.data.cuisines.join(", ")}</li>
              <li>{resData.data.costForTwo}</li>
              <li>{resData.data.locality}</li>
              <li>{resData.data.avgRating}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
