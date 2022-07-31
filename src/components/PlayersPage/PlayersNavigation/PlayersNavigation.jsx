import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./PlayersNavigation.module.css";

const PlayersNavigation = ({ prevPage, nextPage }) => {
    return (
        <>
            <Link to={`/players/?page=${prevPage}`} className={styles.link}>
                <button disabled={!prevPage} className={styles.buttons}>
                    Previous
                </button>
            </Link>
            <Link to={`/players/?page=${nextPage}`} className={styles.link}>
                <button disabled={!nextPage} className={styles.buttons}>
                    Next
                </button>
            </Link>
        </>
    );
};

PlayersNavigation.propTypes = {
    prevPage: PropTypes.number,
    nextPage: PropTypes.number,
};

export default PlayersNavigation;
