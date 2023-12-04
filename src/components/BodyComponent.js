import CartComponent from "./CartComponent"
import {resList} from "../utils/mockData"

const BodyComponent = () => {
    return (
        <div>
            <div className="search">Search</div>
            <div className="cart-data">
                {/* <CartComponent resData={resList[0]}/>
            <CartComponent resData={resList[1]}/>
            <CartComponent resData={resList[2]}/> */}
                {resList.map((restaurant) => (
                    <CartComponent resData={restaurant} key={restaurant.id}></CartComponent>
                ))}
            </div>
        </div>
    )
}

export default BodyComponent;