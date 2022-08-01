import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import SwitchTeam from "../../PlayersPage/PlayersList/SwitchTeam";
import noResults from "../../../images/noresults.gif";

import styles from "./SearchPageList.module.css";

const SearchPageList = ({ teams }) => {
    return (
        <>
            {teams.length ? (
                <ul className={styles.searched__container}>
                    {teams.map(({ id, full_name }) => {
                        const teamNicknameArray = full_name.split(" ");
                        const teamNickname = teamNicknameArray[teamNicknameArray.length - 1];

                        return (
                            <li className={styles.searched__team} key={id}>
                                <Link to={`/teams/${id}`}>
                                    {SwitchTeam(teamNickname)}
                                    <p className={styles.searched__team__name}>{full_name}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <img className={styles.person__comment} src={noResults} alt="No results" />
            )}
        </>
    );
};

SearchPageList.propTypes = {
    teams: PropTypes.array,
};

export default SearchPageList;
