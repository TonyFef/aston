import { NavLink } from "react-router-dom";

import logo from "../../images/logo.png";
import Favourites from "../Favourites/Favourites";
import History from "../History/History";

import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <>
            <ul className={styles.navigation}>
                <div className={styles.navigation__left}>
                    <li className={styles.navigation__logo}>
                        <NavLink to="/players">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </li>
                </div>
                <div className={styles.navigation__right}>
                    <History />
                    <Favourites />
                </div>

                {/* <li>
                    <NavLink to="/login" exact="true">
                        Login
                    </NavLink>
                </li> */}
            </ul>
        </>
    );
};

export default Navigation;
