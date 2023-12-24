import { RESTO_URL } from "../utils/constants";

const CartComponent = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, avgRating, costForTwo, locality } =
    resData?.info;

  return (
    <div>
      <div className="w-60 bg-gray-100 min-h-72 m-2 p-4 rounded-lg">
        <img
          className="w-full h-40 object-contain"
          src={RESTO_URL + cloudinaryImageId}
        />
        <div className="card-body">
          <div className="rest-title">
            <b>{name}</b>
          </div>
          <ul>
            <li>{costForTwo}</li>
            <li>{locality}</li>
            <li>{avgRating}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
