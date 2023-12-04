import {LOGO_URL} from "../utils/constants"

const HeaderComponent = () => {
    return (
        <div>
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL}></img>
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

export default HeaderComponent;