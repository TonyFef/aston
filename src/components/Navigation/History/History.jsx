
import { Link } from "react-router-dom";

import icon from "@images/history.svg";

import styles from "./History.module.css";

const History = () => {
    return (
        <>
            <div className={styles.history}>
                <Link to="/history" exact="true" className={styles.history__link}>
                    <img src={icon} alt="favourites icon" className={styles.history__icon} />
                </Link>
            </div>
        </>
    );
};

export default History;
