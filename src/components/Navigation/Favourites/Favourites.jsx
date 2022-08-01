import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import FavouritesContainer from "./FavouritesContainer";

const Favourites = () => {
    const [counter, setCounter] = useState();
    const storeData = useSelector((state) => state.toolkit);

    useEffect(() => {
        const length = Object.keys(storeData).length;
        setCounter(length);
    });

    return <FavouritesContainer counter={counter} />;
};

export default Favourites;
