import PropTypes from "prop-types";

import img from "@images/player.jpg";
import star from "@images/favourite.svg";
import starFilled from "@images/favourite-filled.svg";

import styles from "./PersonLogo.module.css";

const PersonLogoContainer = ({ dispatchFavourites, personIsLiked }) => {
    return (
        <>
            <div className={styles.player__logo}>
                <img className={styles.player__logo__img} src={img} alt="player image" />
            </div>
            <img onClick={dispatchFavourites} src={personIsLiked ? starFilled : star} alt="like" className={styles.player__favourite} />
        </>
    );
};

PersonLogoContainer.propTypes = {
    dispatchFavourites: PropTypes.func,
    personIsLiked: PropTypes.bool,
};

export default PersonLogoContainer;
