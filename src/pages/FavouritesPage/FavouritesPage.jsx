import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import FavouritePlayersList from "../../components/FavouritesPage/FavouritePlayersList/FavouritePlayersList";

const FavouritesPage = () => {
    const [players, setPlayers] = useState([]);
    const storeData = useSelector((state) => state.favourites);

    // console.log(storeData);


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

    return <FavouritePlayersList players={players} />;
};

export default FavouritesPage;
