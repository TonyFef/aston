import PropTypes from "prop-types";

import SearchPageList from "../SearchPageList/SearchPageList";
import UIInput from "@ui/UIInput/UIInput";

import styles from "./Search.module.css";

const SearchContainer = ({ inputValue, handleInputChange, foundedTeams, handleActiveChange, inputIsActive }) => {
    return (
        <>
            <UIInput
                type="text"
                value={inputValue}
                handleInputChange={handleInputChange}
                handleActiveChange={handleActiveChange}
                placeholder="Enter team's name"
                classes={styles.search__input}
            />
            <SearchPageList teams={foundedTeams} inputIsActive={inputIsActive} />
        </>
    );
};

SearchContainer.propTypes = {
    inputValue: PropTypes.string,
    handleInputChange: PropTypes.func,
    foundedTeams: PropTypes.array,
};

export default SearchContainer;
