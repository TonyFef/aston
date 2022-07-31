import PropTypes from "prop-types";

import "../index.css";
import styles from "./UIButton.module.css";

const UIButton = ({ text, disabled }) => {
    return (
        <>
            <button className={styles.button} disabled={disabled}>
                {text}
            </button>
        </>
    );
};

UIButton.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
};

export default UIButton;
