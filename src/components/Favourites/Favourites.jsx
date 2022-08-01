import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import icon from "@images/bookmark.svg";

import styles from "./Favourites.module.css";

const Favourites = () => {
    const [counter, setCounter] = useState();
    const storeData = useSelector((state) => state.toolkit);

    useEffect(() => {
        const length = Object.keys(storeData).length;
        setCounter(length);
}); 

    return (
        <div className={styles.favourites}>
            <Link to="/favourites">
                <span className={styles.favourites_counter}>{counter}</span>
                <img src={icon} alt="favourites icon" className={styles.favourites_bookmark} />
            </Link>
        </div>
    );
};

export default Favourites;
