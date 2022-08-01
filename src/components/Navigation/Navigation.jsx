import { NavLink } from "react-router-dom";

import logo from "@images/logo.png";
import Favourites from "./Favourites/Favourites";
import History from "./History/History";
import LogOut from "./LogOut/LogOut";
import Players from "./Players/Players";
import LogIn from "./LogIn/LogIn";

import styles from "./Navigation.module.css";
import SignUp from "./SignUp/SignUp";

const Navigation = ({ isLogin }) => {
    return (
        <>
            <ul className={styles.navigation}>
                <div className={styles.navigation__left}>
                    <li className={styles.navigation__logo}>
                        <NavLink to="/">
                            <img src={logo} alt="logo" />
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

export default Navigation;
