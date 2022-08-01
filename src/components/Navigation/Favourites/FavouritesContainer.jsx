import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import icon from "@images/bookmark.svg";

import styles from "./Favourites.module.css";

const FavouritesContainer = ({ counter }) => {
    return (
        <>
            <div className={styles.favourites}>
                <Link to="/favourites">
                    <span className={styles.favourites_counter}>{counter}</span>
                    <img src={icon} alt="favourites icon" className={styles.favourites_bookmark} />
                </Link>
            </div>
        </>
    );
};

FavouritesContainer.propTypes = {
    counter: PropTypes.number,
};

export default FavouritesContainer;
