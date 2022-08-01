import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { getSpecificPlayer } from "@utils/network";
import { options, API_PERSON } from "@env/api";
import { withFetchError } from "@hoc/withFetchError";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonLogo from "@components/PersonPage/PersonLogo";

import styles from "./PersonPage.module.css";

const PersonPage = ({ setFetchError }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personId, setPersonId] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personTeam, setPersonTeam] = useState(null);
    const [personIsLiked, setPersonIsLiked] = useState(false);

    const storeData = useSelector((state) => state.toolkit);

    const urlArray = window.location.href.split("/");
    const id = urlArray[urlArray.length - 1];

    useEffect(() => {
        (async () => {
            const res = await getSpecificPlayer(`${API_PERSON}/${id}/`, options);

            if (res) {
                setPersonInfo(() => [
                    { title: "Name", data: `${res.first_name} ${res.last_name}` },
                    { title: "Height", data: `${res.height_feet} ${res.height_inches}` },
                    { title: "Position", data: res.position },
                    { title: "Team", data: res.team.full_name },
                    { title: "City", data: res.team.city },
                    { title: "Conference", data: res.team.conference },
                    { title: "Division", data: res.team.division },
                    { title: "Abbreviation", data: res.team.abbreviation },
                    { title: "teamName", data: res.team.name },
                ]);

                setPersonId(id);
                setPersonName(`${res.first_name} ${res.last_name}`);
                setPersonTeam(res.team.name);

                storeData[id] ? setPersonIsLiked(true) : setPersonIsLiked(false);

                setFetchError(false);
            } else {
                setFetchError(true);
            }
        })();
    }, []);

    return (
        <div className={styles.wrapper}>

            <div className={styles.person__container}>
                <PersonLogo id={personId} name={personName} setPersonIsLiked={setPersonIsLiked} personIsLiked={personIsLiked} team={personTeam} />
                {personInfo && <PersonInfo personInfo={personInfo} />}
            </div>
        </div>
    );
};

PersonPage.propTypes = {
    setFetchError: PropTypes.func,
};

export default withFetchError(PersonPage);
