import CartComponent from "./CartComponent"
import {resList} from "../utils/mockData"
import { useState } from "react";

const BodyComponent = () => {
    const[restaurantList, setRestaurantList] = useState(resList)

    return (
        <div>
            <div className="search">
                <button className="btn" onClick={()=>{
                    const filterList = resList.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setRestaurantList(filterList);
                }}>Filter</button>
            </div>
            <div className="cart-data">
                {restaurantList.map((restaurant) => (
                    <CartComponent key={restaurant.id} resData={restaurant} ></CartComponent>
                ))}
            </div>
        </div>
    )
}

export default BodyComponent;