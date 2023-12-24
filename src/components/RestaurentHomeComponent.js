import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const RestaurentHomeComponent = () => {
  const [responceData, setresponceData] = useState("");

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" +
        resId
    );
    const json = await data.json();
    setresponceData(json.data);
    console.log(json.data.cards[0].card.card.info);
  };

  return responceData.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="m-4">
      <Link to="/">
        <button className="px-2 py-1 bg-blue-500 rounded-lg text-white float-right">
          Back to Home
        </button>
      </Link>
      <h1>
        <b>Name:</b> {responceData.cards[0].card.card.info.name}
      </h1>
      <h2>
        <b>City:</b> {responceData.cards[0].card.card.info.city}
      </h2>
      <h2>
        <b>Cost For Two:</b>{" "}
        {responceData.cards[0].card.card.info.costForTwoMessage}
      </h2>
      <h2>
        <b>Slug String:</b> {responceData.cards[0].card.card.info.slugString}{" "}
      </h2>
      <h2>
        <b>Address:</b> {responceData.cards[0].card.card.info.labels[1].message}{" "}
      </h2>
      <h2>
        <b>Total Ratings:</b>{" "}
        {responceData.cards[0].card.card.info.totalRatingsString}
      </h2>
    </div>
  );
};

export default RestaurentHomeComponent;
