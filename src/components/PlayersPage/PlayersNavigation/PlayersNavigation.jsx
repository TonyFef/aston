import PropTypes from "prop-types";
import { Link } from "react-router-dom";
 
import UIButton from "@ui/UIButton";

import styles from "./PlayersNavigation.module.css";

const PlayersNavigation = ({ prevPage, nextPage }) => {
    return (
        <>
            <div className={styles.container}>
                <Link to={`/players/?page=${prevPage}`} className={styles.buttons}>
                    <UIButton text="Previous" disabled={!prevPage} />
                </Link>
                <Link to={`/players/?page=${nextPage}`} className={styles.buttons}>
                    <UIButton text="Next" disabled={!nextPage} />
                </Link>
            </div>
        </>
    );
};

PlayersNavigation.propTypes = {
    prevPage: PropTypes.number,
    nextPage: PropTypes.number,
};

export default PlayersNavigation;
