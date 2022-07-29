import { NavLink } from "react-router-dom";

import logo from "../../images/logo.png";

import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <>
            <ul className={styles.navigation}>
                <div className={styles.navigation__left}>
                    <li className={styles.navigation__logo}>
                        <NavLink to="/players" >
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </li>
                </div>
                <div className={styles.navigation__right}>
                    <li className={styles.navigation__right__favs}>
                        <NavLink to="/favourites" exact="true">
                            Favourites
                        </NavLink>
                    </li>
                    <li  className={styles.navigation__right__history}>
                        <NavLink to="/history" exact="true">
                            History
                        </NavLink>
                    </li>
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
