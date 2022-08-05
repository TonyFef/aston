import { useSelector } from "react-redux";

import SwitchTeam from "../PlayersPage/PlayersList/SwitchTeam";
import Spinner from "../Spinner/Spinner";
import nothingFound from "@images/nothing.gif";
import { useSearchTeamsQuery } from "@store/playersApi";

import styles from "./HistoryPageList.module.css";

const HistoryPageList = () => {
    const storeData = useSelector((state) => state.history);
    const { data, error, isLoading } = useSearchTeamsQuery();
    const matchesArr = [];

    if (storeData && !isLoading) {
        for (let key in storeData.teams) {
            data.forEach((item) => {
                item.id === +key && matchesArr.push(item);
            });
        }
    }

    return (
        <>
            <div className={styles.history__wrapper}>
                {isLoading && <Spinner />}
                {!isLoading && !error ? (
                    <>
                        <div className={styles.history__teams}>
                            {matchesArr.length > 0 ? (
                                <>
                                    <h2 className={styles.searched__header}>Teams you've watched for</h2>
                                    <ul className={styles.searched__container}>
                                        {matchesArr.map(({ name, nickName, id }) => (
                                            <li className={styles.searched__team} key={id}>
                                                {SwitchTeam(nickName)}
                                                <p style={{ color: "white", fontSize: "24px", marginBottom: 0 }}>{name}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <>
                                    <img src={nothingFound} alt="You haven't done any actions yet" />
                                </>
                            )}
                        </div>
                        <div className={styles.history__players}></div>
                    </>
                ) : null}
            </div>
        </>
    );
};

// HistoryPage.propTypes = {
//     test: PropTypes.string,
// };

export default HistoryPageList;
