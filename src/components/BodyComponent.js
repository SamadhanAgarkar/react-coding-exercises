import CartComponent from "./CartComponent";
import { resList } from "../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  const [searchText, setsearchText] = useState("");

  return restaurantList.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className="sorting-sec">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        ></input>
        <button
          className="btn"
          onClick={() => {
            const filterList = resList.filter((res) =>
              res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setRestaurantList(filterList);
          }}
        >
          Search
        </button>

        <button
          className="btn"
          onClick={() => {
            const filterList = resList.filter((res) => res.data.avgRating > 4);
            setRestaurantList(filterList);
          }}
        >
          Filter on Rating
        </button>

        <button
          className="btn"
          onClick={() => {
            setRestaurantList(resList);
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="cart-data">
        {restaurantList.map((restaurant) => (
          <CartComponent
            key={restaurant.id}
            resData={restaurant}
          ></CartComponent>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
