import styles from "./PlayersPage.module.css";
import { getApiResourse } from "../../utils/network";
import { useEffect } from "react";

import { url, options } from "../../env/api";

const PlayersPage = () => {
    const getResourse = async (url, options) => {
        const res = await getApiResourse(url, options);

        const playersList = res.data.map((item) => {
            console.log(item);
        });

    };

    useEffect(() => {
        getResourse(url, options);
    }, []);

    return <>Players page</>;
};

export default PlayersPage;
