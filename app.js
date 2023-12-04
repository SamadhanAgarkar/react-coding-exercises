import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
    return (
        <div>
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8EOQiw7gSHpsV1I8KOqwqn4qQXQiE1mg4qtJOFS-IkEmq8Q-QI5guRV2WZy7Z9iNsqs&usqp=CAU"></img>
                </div>
                <div className="d-flex" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Contact
                        </li>
                        <li className="nav-item">
                            About
                        </li>
                        <li className="nav-item">
                            Home
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const resList = [{
    id: "797048",
    name: "Garden Pav Bhaji",
    cloudinaryImageId: "d2699789b44cdd45847aa6df2cce2c5d",
    locality: "Wanowrie",
    areaName: "Wanowrie",
    costForTwo: "₹300 for two",
    cuisines: [
        "Street Food"
    ],
    avgRating: 4.2
},
{
    id: "797047",
    name: "Pizza Mania Kids Specials",
    cloudinaryImageId: "97a5dc106839dc84ae7942195d814385",
    locality: "Wanowrie",
    areaName: "Wanowrie",
    costForTwo: "₹300 for two",
    cuisines: [
        "Pizzas"
    ],
    avgRating: 1.2
},
{
    id: "796392",
    name: "Salim'S Shahi Sigdi",
    cloudinaryImageId: "808324ae229e7dbe4f5df33b1010e1fb",
    locality: "Kondhwa",
    areaName: "Kondhwa",
    costForTwo: "₹500 for two",
    cuisines: [
        "Indian",
        "Seafood",
        "Biryani"
    ],
    avgRating: 4.4
}, {
    id: "14548",
    name: "Burger King",
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    locality: "Paud Road",
    areaName: "Kothrud",
    costForTwo: "₹350 for two",
    cuisines: [
        "Burgers",
        "American",
    ],
    avgRating: 4.2,
},
{
    id: "659799",
    name: "Wendy's Burgers",
    cloudinaryImageId: "a2ec5418246b622ec4baa3bd051ef6ab",
    locality: "Ask Building",
    areaName: "Law College Road",
    costForTwo: "₹200 for two",
    cuisines: [
        "Burgers",
        "American",
        "Fast Food",
        "Snacks",
        "Beverages"
    ],
    avgRating: 2.2
},
{
    id: "622143",
    name: "MOJO Pizza - 2X Toppings",
    cloudinaryImageId: "59b64f9bb67234987652437f21d379c2",
    locality: "Camp",
    areaName: "Koregaon Park",
    costForTwo: "₹250 for two",
    cuisines: [
        "Pizzas",
        "Italian",
        "Fast Food",
        "Desserts"
    ],
    avgRating: 3.2
},
{
    id: "243625",
    name: "KFC",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    locality: "Deccan Gymkhana",
    areaName: "Deccan Gymkhana",
    costForTwo: "₹400 for two",
    cuisines: [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
    ],
    avgRating: 4
},
{
    id: "5624",
    name: "Subway",
    cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
    locality: "FC Road",
    areaName: "Deccan Gymkhana",
    costForTwo: "₹350 for two",
    cuisines: [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
    ],
    avgRating: 4.2
}
];

const CartComponent = (props) => {
    const { resData } = props;
    return (
        <div>
            <div className="cart-sec">
                <div className="card">
                    <img className="card-img-top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.cloudinaryImageId} />
                    <div className="card-body">
                        <div className="rest-title">{resData.name}</div>
                        <div className="rest-cuisines"> - {resData.cuisines.join(", ")}</div>
                        <div className="rest-costForTwo">- {resData.costForTwo}</div>
                        <div className="rest-locality">- {resData.locality}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Body = () => {
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
const AppLayout = () => {
    return (
        <div>
            <HeaderComponent />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);