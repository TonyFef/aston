import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

import { withFetchError } from "@hoc/withFetchError";
import { getAllTeams } from "@utils/network";
import { urlTeams, options } from "@env/api";

import SearchContainer from "./SearchContainer";

const Search = ({ setFetchError }) => {
    const [inputValue, setInputValue] = useState("");
    const [foundedTeams, setFoundedTeams] = useState([]);
    const [inputIsActive, setInputIsActive] = useState(false);

    const getResponse = async (param) => {
        const res = await getAllTeams(urlTeams, options);
        let teamsList;

        if (res) {
            teamsList = res.data.filter(({ full_name }) => {
                return full_name.indexOf(param) !== -1;
            });

            setFoundedTeams(teamsList);
            setFetchError(false);
        } else {
            setFetchError(true);
        }
    };

    useEffect(() => {
        getResponse("");
    }, []);

    const debouncedGetResponse = useCallback(
        debounce((value) => getResponse(value), 300),
        []
    );

    const handleInputChange = (value) => {
        setInputValue(value);
        debouncedGetResponse(value);
    };

    const handleActiveChange = () => {
        setInputIsActive(true);
    };

    return (
        <>
            <SearchContainer
                inputValue={inputValue}
                handleInputChange={handleInputChange}
                handleActiveChange={handleActiveChange}
                foundedTeams={foundedTeams}
                inputIsActive={inputIsActive}
            />
        </>
    );
};

Search.propTypes = {
    setFetchError: PropTypes.func,
};

export default withFetchError(Search);
