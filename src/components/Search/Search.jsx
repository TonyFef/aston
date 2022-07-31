import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

import { withFetchError } from "@hoc/withFetchError";
import { getAllTeams } from "@utils/network";
import { urlTeams, options } from "@env/api";
import SearchPageList from "../SearchPageList/SearchPageList";
import  UIInput  from "../UI/UIInput/UIInput";

import styles from "./Search.module.css";

const Search = ({ setFetchError }) => {
    const [inputValue, setInputValue] = useState("");
    const [foundedTeams, setFoundedTeams] = useState([]);

    const getResponse = async (param) => {
        // console.log(param);
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

    return (
        <>
            <UIInput
                type="text"
                value={inputValue}
                // onChange={handleInputChange}
                handleInputChange={handleInputChange}
                placeholder="Enter team's name"
                classes={styles.search__input}
            />
            <SearchPageList teams={foundedTeams} /> 
        </>
    );
};

Search.propTypes = {
    setFetchError: PropTypes.func,
};

export default withFetchError(Search);
