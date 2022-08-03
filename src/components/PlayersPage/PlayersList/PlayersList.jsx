import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "../../ErrorBoundary/ErrorBoundary";

import styles from "./PlayersList.module.css";
import SwitchTeam from "./SwitchTeam";

const PlayersList = ({ players }) => {
    // players = {};
    return (
        <ul className={styles.players__container}>
            {players.map(({ id, first_name, last_name, team }) => {
                const teamNicknameArray = team.full_name.split(" ");
                const teamNickname = teamNicknameArray[teamNicknameArray.length - 1];

                return (
                    <li className={styles.player} key={id}>
                        <Link to={`/players/${id}`}>
                            {SwitchTeam(teamNickname)}
                            <p>{`${first_name} ${last_name}`}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
        // </ErrorBoundary>
    );
};

PlayersList.propTypes = {
    // players: PropTypes.array,
};

export default PlayersList;
