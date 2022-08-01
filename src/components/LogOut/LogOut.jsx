import { Link } from "react-router-dom";

import icon from "@images/logout.svg";

import styles from "./LogOut.module.css";

const LogOut = () => {
    return (
        <>
            <div className={styles.logout}>
                <Link to="/favourites">
                    <img src={icon} alt="favourites icon" className={styles.logout__icon} />
                </Link>
            </div>
        </>
    );
};

export default LogOut;
