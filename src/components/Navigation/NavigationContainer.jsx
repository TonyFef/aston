import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import Favourites from "./Favourites/Favourites";
import History from "./History/History";
import LogOut from "./LogOut/LogOut";
import Players from "./Players/Players";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";

import styles from "./Navigation.module.css";

const NavigationContainer = ({ icon, isLogin }) => {
    return (
        <>
            <ul className={styles.navigation}>
                <div className={styles.navigation__left}>
                    <li className={styles.navigation__logo}>
                        <NavLink to="/">
                            <img src={icon} alt="logo" />
                        </NavLink>
                    </li>
                </div>
                <div className={styles.navigation__right}>
                    {isLogin ? (
                        <>
                            <Players />
                            <History />
                            <Favourites />
                            <LogOut />
                        </>
                    ) : (
                        <>
                            <LogIn />
                            <SignUp />
                        </>
                    )}
                </div>
            </ul>
        </>
    );
};

NavigationContainer.propTypes = {
    test: PropTypes.string,
};

export default NavigationContainer;
