import {RESTO_URL} from "../utils/constants"

const CartComponent = (props) => {
    const { resData } = props;

    return (
        <div>
            <div className="cart-sec">
                <div className="card">
                    <img className="card-img-top" src={ RESTO_URL + resData.data.cloudinaryImageId} />
                    <div className="card-body">
                        <div className="rest-title">{resData.data.name}</div>
                        <div className="rest-cuisines"> - {resData.data.cuisines.join(", ")}</div>
                        <div className="rest-costForTwo">- {resData.data.costForTwo}</div>
                        <div className="rest-locality">- {resData.data.locality}</div>
                        <div className="rest-rating">- {resData.data.avgRating}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartComponent;