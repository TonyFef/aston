import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import SwitchTeam from "@components/PlayersPage/PlayersList/SwitchTeam";

import styles from "./FavouritesPage.module.css";

const FavouritesPage = () => {
    const [players, setPlayers] = useState([]);
    const storeData = useSelector((state) => state.toolkit);

    useEffect(() => {
        const arr = Object.entries(storeData);

        if (arr.length) {
            const res = arr.map((item) => {
                return {
                    id: item[0],
                    ...item[1],
                };
            });

            setPlayers(res);
        }
    }, []);

    return (
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
    );
};

export default FavouritesPage;
