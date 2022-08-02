import PropTypes from "prop-types";

import styles from "./Verification.module.css";

const VerificationContainer = ({
    action,
    completed,
    isSignupHandler,
    isLoginHandler,
    emailIsActive,
    emailError,
    email,
    emailHandler,
    blurHandler,
    password,
    passwordIsActive,
    passwordError,
    passwordHandler,
    success,
    clicked,
    setClicked,
}) => {
    return (
        <>
            <div className={styles.form__wrapper}>
                <form className={styles.form}>
                    <h1 className={styles.form__header}>
                        {action === "signup" ? "Please, type your email and create a password" : "Please, enter your account info"}
                    </h1>
                    {emailIsActive && emailError && <div className={styles.form__error__text}>{emailError}</div>}
                    <div className={styles.form__inputs}>
                        <input
                            type="text"
                            name="email"
                            value={completed ? " " : email}
                            onChange={emailHandler}
                            onBlur={blurHandler}
                            className={styles.input}
                            placeholder="Email"
                        />
                        {passwordIsActive && passwordError && <div className={styles.form__error__text}>{passwordError}</div>}
                        <input
                            type="text"
                            placeholder="Password"
                            name="password"
                            value={completed ? " " : password}
                            onChange={passwordHandler}
                            onBlur={blurHandler}
                            className={styles.input}
                        />
                    </div>

                    <button
                        className={styles.form__button}
                        disabled={!success}
                        onClick={(e) => {
                            e.preventDefault();
                            action === "signup" ? isSignupHandler()  : isLoginHandler();
                        }}
                    >
                        {action === "signup" ? "Sign up" : "Log in"}
                    </button>
                </form>
            </div>
        </>
    );
};

VerificationContainer.propTypes = {
    action: PropTypes.string,
    isLoginHandler: PropTypes.func,
    emailIsActive: PropTypes.bool,
    emailError: PropTypes.string,
    email: PropTypes.string,
    emailHandler: PropTypes.func,
    blurHandler: PropTypes.func,
    password: PropTypes.string,
    passwordIsActive: PropTypes.bool,
    passwordError: PropTypes.string,
    passwordHandler: PropTypes.func,
    success: PropTypes.bool,
};

export default VerificationContainer;
