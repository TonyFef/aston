import PropTypes from "prop-types";

import styles from "../../PersonPage/PersonInfo/PersonInfo.module.css";

const TeamInfo = ({ teamInfo }) => {
    return (
        <>
            <div className={styles.person__info}>
                <ul className={styles.person__list}>
                    {teamInfo.map(({ title, data }) => {
                        return (
                            data && (
                                <li className={styles.person__list__item} key={title}>
                                    <span className={styles.person__list__item__title}>{`${title}:`}</span>
                                    &nbsp;&nbsp;&nbsp;{data}
                                </li>
                            )
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

TeamInfo.propTypes = {
    teamInfo: PropTypes.array,
};

export default TeamInfo;
