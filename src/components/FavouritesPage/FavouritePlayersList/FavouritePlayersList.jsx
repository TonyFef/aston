import PropTypes from "prop-types";

import SwitchTeam from "@components/PlayersPage/PlayersList/SwitchTeam";

import styles from "@pages/FavouritesPage/FavouritesPage.module.css";

const FavouritePlayersList = ({players}) => {
    return (
        <>
            <ul className={styles.players__container}>
                {players.map(({ id, name, team }) => {
                    const teamNickname = team;

                    return (
                        <li className={styles.player} key={id}>
                            {SwitchTeam(teamNickname)}
                            <p>{name}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

FavouritePlayersList.propTypes = {
    players: PropTypes.array,
};

export default FavouritePlayersList;
