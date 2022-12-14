import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getApiResourse } from "@utils/network";
import { urlBase, urlPerPage, options } from "@env/api";
import PlayersList from "@components/PlayersPage/PlayersList/PlayersList";
import PlayersNavigation from "@components/PlayersPage/PlayersNavigation/PlayersNavigation";
import { withFetchError } from "@hoc/withFetchError";
import { useQueryParams } from "@hooks/useQueryParams";

import { ErrorBoundary } from "../../components/ErrorBoundary/ErrorBoundary";

const PlayersPage = ({ setFetchError }) => {
    const [players, setPlayers] = useState(null);
    const [prevPage, setPrevPage] = useState(0);
    const [nextPage, setNextPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get("page");

    const getResourse = async (urlBase, urlPerPage, options) => {
        const res = await getApiResourse(urlBase, queryPage, urlPerPage, options);

        if (res) {
            const playersList = res.data;
            setPlayers(playersList);

            setPrevPage(res.meta.current_page - 1);
            setNextPage(res.meta.next_page);

            setFetchError(false);
        } else {
            setFetchError(true);
        }
    };

    useEffect(() => {
        getResourse(urlBase, urlPerPage, options);
    }, [queryPage]);

    return (
        <>
                <PlayersNavigation prevPage={prevPage} nextPage={nextPage} />
                {players && <PlayersList players={players} />}
            
        </>
    );
};

PlayersPage.propTypes = {
    setFetchError: PropTypes.func,
};

export default withFetchError(PlayersPage);
