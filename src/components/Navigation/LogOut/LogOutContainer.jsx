import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import icon from "@images/logout.svg";

import styles from "./LogOut.module.css";

const LogOutContainer = ({ onlogoutHandler }) => {
    return (
        <>
            <div className={styles.logout}>
                <Link to="/">
                    <img src={icon} alt="Logout icon" className={styles.logout__icon} onClick={onlogoutHandler} />
                </Link>
            </div>
        </>
    );
};

LogOutContainer.propTypes = {
    onlogoutHandler: PropTypes.func,
};

export default LogOutContainer;
