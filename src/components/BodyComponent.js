import CartComponent from "./CartComponent";
import { useState, useEffect } from "react";

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.675276800000006&lng=77.1588096&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const Resdata =
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(Resdata);
    setFilteredRestaurant(Resdata);
    console.log(">>>>>>>", Resdata);
  };

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
            const filteredRestaurant = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>

        <button
          className="btn"
          onClick={() => {
            const filteredRestaurant = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Filter on Rating
        </button>

        <button
          className="btn"
          onClick={() => {
            setFilteredRestaurant(restaurantList);
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="cart-data">
        {filteredRestaurant.map((restaurent) => (
          <CartComponent key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
