import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getSpecificTeam } from "@utils/network";
import { setHistoryTeam } from "@store/slices/historySlice";
import { options, urlTeams } from "@env/api";
import { withFetchError } from "@hoc/withFetchError";
import TeamInfo from "@components/TeamPage/TeamInfo/TeamInfo";
import TeamLogo from "../../components/TeamPage/TeamLogo/TeamLogo";

import styles from "../PersonPage/PersonPage.module.css";

const TeamPage = ({ setFetchError }) => {
    const [teamInfo, setTeamInfo] = useState(null);
    const [teamNickname, setTeamNickname] = useState(null);

    const dispatch = useDispatch();

    const urlArray = window.location.href.split("/");
    const id = urlArray[urlArray.length - 1];

    console.log(id);

    dispatch(setHistoryTeam(id));

    useEffect(() => {
        (async () => {
            const res = await getSpecificTeam(`${urlTeams}/${id}/`, options);

            if (res) {
                setTeamInfo(() => [
                    { title: "Name", data: `${res.full_name}` },
                    { title: "Abbreviation", data: `${res.abbreviation}` },
                    { title: "City", data: res.city },
                    { title: "Conference", data: res.conference },
                    { title: "Division", data: res.division },
                ]);
                setTeamNickname(res.name);

                setFetchError(false);
            } else {
                setFetchError(true);
            }
        })();
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.person__container}>
                    <TeamLogo team={teamNickname} />
                    {teamInfo && <TeamInfo teamInfo={teamInfo} />}
                </div>
            </div>
        </>
    );
};

TeamPage.propTypes = {
    setFetchError: PropTypes.func,
};

export default withFetchError(TeamPage);
