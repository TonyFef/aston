import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { setPlayerToFavourite, removePlayerFromFavourite } from "@store/toolkitReducer";
import PersonLogoContainer from "./PersonLogoContainer";

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
            <PersonLogoContainer dispatchFavourites={dispatchFavourites} personIsLiked={personIsLiked} />
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
