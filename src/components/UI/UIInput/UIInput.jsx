import PropTypes from "prop-types";
import cn from "classnames";

import icon from "@images/clear.svg";

import styles from "./UIInput.module.css";

const UIInput = ({ value, handleInputChange, placeholder, classes, handleActiveChange }) => {
    return (
        <>
            <div className={cn(styles.wrapper__input, classes)}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={placeholder}
                    className={styles.input}
                    onBlur={handleActiveChange}
                />
                <img
                    onClick={() => value && handleInputChange("")}
                    src={icon}
                    className={cn(styles.clear, !value && styles.clear__disabled)}
                    alt="Clear"
                />
            </div>
        </>
    );
};

UIInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleActiveChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
};

export default UIInput;
