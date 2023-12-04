import {RESTO_URL} from "../utils/constants"

const CartComponent = (props) => {
    const { resData } = props;
    return (
        <div>
            <div className="cart-sec">
                <div className="card">
                    <img className="card-img-top" src={ RESTO_URL + resData.cloudinaryImageId} />
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

export default CartComponent;