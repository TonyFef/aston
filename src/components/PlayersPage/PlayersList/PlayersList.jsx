import PropTypes from "prop-types";

import styles from "./PlayersList.module.css";

const PlayersList = ({ players }) => {
    return (
        <>
            <ul className={styles.players__container}>
                {players.map(({ id, first_name, last_name, height_feet, height_inches, weight_pounds, position, team }) => (
                    <li className={styles.player} key={id}>
                        {/* <img src={item.thumbnail} alt={item.name} /> */}
                        <ul className={styles.player__info}>
                            <li className={styles.player__info__name}>
                                {first_name} {last_name}
                            </li>
                            <li className={styles.player__info__height}>
                                Height: {height_feet}.{height_inches}
                            </li>
                            <li className={styles.player__info__weight}>Weight: {weight_pounds}</li>
                            <li className={styles.player__info__position}>Position: "{position}"</li>
                        </ul>
                        <ul className={styles.player__team}>
                            <li className={styles.player__team__name}>{team.full_name}</li>
                            <li className={styles.player__team__city}>City: {team.city}</li>
                            <li className={styles.player__team__conference}>Conference: {team.conference}</li>
                            <li className={styles.player__team__division}>Division: {team.division}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
};

PlayersList.propTypes = {
    players: PropTypes.array,
};

export default PlayersList;
