import PropTypes from "prop-types";

import styles from "./PersonInfo.module.css";

const PersonInfo = ({ personInfo }) => {
    return (
        <div className={styles.person__info}>
            <ul className={styles.person__list}>
                {personInfo.map(({ title, data }) => {
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
    );
};

PersonInfo.propTypes = {
    personInfo: PropTypes.array,
};

export default PersonInfo;
