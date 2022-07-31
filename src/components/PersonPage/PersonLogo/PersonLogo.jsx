import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { setPlayerToFavourite, removePlayerFromFavourite } from "@store/toolkitReducer";
import img from "@images/player.jpg";
import star from "@images/favourite.svg";
import starFilled from "@images/favourite-filled.svg";

import styles from "./PersonLogo.module.css";

const PersonLogo = ({ id, name, setPersonIsLiked, personIsLiked, team }) => {

    const dispatch = useDispatch();

    const dispatchFavourites = () => {
        if (personIsLiked) {
            dispatch(removePlayerFromFavourite(id));
            setPersonIsLiked(false);
        } else {
            dispatch(
                setPlayerToFavourite({
                    [id]: { name, team },
                })
            );
            setPersonIsLiked(true);
        }
    };

    return (
        <>
            <div className={styles.player__logo}>
                <img className={styles.player__logo__img} src={img} alt="player image" />
            </div>
            <img onClick={dispatchFavourites} src={personIsLiked ? starFilled : star} alt="like" className={styles.player__favourite} />
        </>
    );
};

PersonLogo.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    setPersonIsLiked: PropTypes.func,
    personIsLiked: PropTypes.bool,
};

export default PersonLogo;
