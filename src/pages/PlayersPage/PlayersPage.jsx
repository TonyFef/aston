import { useEffect, useState } from "react";

import { getApiResourse } from "../../utils/network";
import { url, options } from "../../env/api";
import PlayersList from "../../components/PlayersPage/PlayersList/PlayersList";
import { withFetchError } from "../../hoc/withFetchError";

// import styles from "./PlayersPage.module.css";

const PlayersPage = ({ setFetchError }) => {
    const [players, setPlayers] = useState(null);

    const getResourse = async (url, options) => {
        const res = await getApiResourse(url, options);

        if (res) {
            const playersList = res.data;
            setPlayers(playersList);
            setFetchError(false);
        } else {
            setFetchError(true);
        }
    };

    useEffect(() => {
        getResourse(url, options);
    }, []);

    return (
        <>
            <h1>Nav</h1>
            {players && <PlayersList players={players} />}
        </>
    );
};

export default withFetchError(PlayersPage);
