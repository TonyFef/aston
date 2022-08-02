import PropTypes from "prop-types";

import SwitchTeam from "@components/PlayersPage/PlayersList/SwitchTeam";

import styles from "../../PersonPage/PersonLogo/PersonLogo.module.css";

const TeamLogo = ({ team }) => {
    return (
        <>
            <div className={styles.player__logo}>{SwitchTeam(team)}</div>
        </>
    );
};

TeamLogo.propTypes = {
    team: PropTypes.string,
};

export default TeamLogo;
