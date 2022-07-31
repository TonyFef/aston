// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import icon from "@images/history.svg";

import styles from "./History.module.css";

const History = () => {
    return (
        <>
            <div className={styles.history}>
                <Link to="/history" exact="true" className={styles.history__link}>
                    {/* <span className={styles.favourites_counter}>Hello</span> */}
                    <img src={icon} alt="favourites icon" className={styles.history__icon} />
                </Link>
            </div>
        </>
    );
};

// History.propTypes = {
//     test: PropTypes.string,
// };

export default History;
