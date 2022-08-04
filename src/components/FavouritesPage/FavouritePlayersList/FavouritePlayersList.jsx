import PropTypes from "prop-types";

import SwitchTeam from "@components/PlayersPage/PlayersList/SwitchTeam";
import image from "@images/nothing.gif";

import styles from "@pages/FavouritesPage/FavouritesPage.module.css";

const FavouritePlayersList = ({ players }) => {
    return (
        <>
            <ul className={styles.players__container}>
                {players.length > 0 ? (
                    players.map(({ id, name, team }) => {
                        const teamNickname = team;

                        return (
                            <li className={styles.player} key={id}>
                                {SwitchTeam(teamNickname)}
                                <p>{name}</p>
                            </li>
                        );
                    })
                ) : (
                    <img src={image} alt="Nothing" />
                )}
            </ul>
        </>
    );
};

FavouritePlayersList.propTypes = {
    players: PropTypes.array,
};

export default FavouritePlayersList;
