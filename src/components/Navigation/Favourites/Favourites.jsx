import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import FavouritesContainer from "./FavouritesContainer";

const Favourites = () => {
    const [counter, setCounter] = useState(null);
    const storeData = useSelector((state) => state.favourites);

    useEffect(() => {
        const length = Object.keys(storeData).length;
        setCounter(length);
    });

    return <FavouritesContainer counter={counter} />;
};

export default Favourites;
