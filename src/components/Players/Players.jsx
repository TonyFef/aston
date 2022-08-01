// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import icon from "@images/players.svg";

import styles from "./Players.module.css";

const Players = () => {
    return (
        <>
            <div className={styles.players}>
                <Link to="/players">
                    <img src={icon} alt="favourites icon" className={styles.players__icon} />
                </Link>
            </div>
        </>
    );
};

// Players.propTypes = {
//     test: PropTypes.string,
// };

export default Players;
