import HistoryPageTeams from "@components/HistoryPage/HistoryPageTeams";
import HistoryPagePlayers from "@components/HistoryPage/HistoryPagePlayers/HistoryPagePlayers";

import styles from "./HistoryPage.module.css";

const HistoryPage = () => {
    return (
        <>
            <div className={styles.history__wrapper}>
                <HistoryPageTeams />
                <HistoryPagePlayers />
            </div>
        </>
    );
};

export default HistoryPage;
