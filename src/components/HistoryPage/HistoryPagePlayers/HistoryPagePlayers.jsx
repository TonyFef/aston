import { useSelector } from "react-redux";

import SwitchTeam from "../../PlayersPage/PlayersList/SwitchTeam";
import nothingFound from "@images/nothing.gif";

import styles from "./HistoryPagePlayers.module.css";

const HistoryPagePlayers = () => {
    const storeData = useSelector((state) => state.history);
    const storeDataPlayers = storeData.players;

    let storeDataPlayersArray;

    storeDataPlayersArray = storeDataPlayers ? Object.values(storeDataPlayers) : [];

    return (
        <>
            <div className={styles.history__players}>
                <h2 className={styles.searched__header}>Players you've watched for</h2>
                {storeDataPlayers && storeDataPlayersArray.length > 0 ? (
                    <>
                        <ul className={styles.searched__container}>
                            {storeDataPlayersArray.map(({ name, id, teamName }) => {
                                return (
                                    <li className={styles.searched__player} key={id}>
                                        {SwitchTeam(teamName)}
                                        <p style={{ color: "white", fontSize: "24px", marginBottom: 0 }}>{name}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                ) : (
                    <img src={nothingFound} alt="You haven't done any actions yet" />
                )}
            </div>
        </>
    );
};

export default HistoryPagePlayers;
