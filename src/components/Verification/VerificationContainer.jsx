import PropTypes from "prop-types";

import styles from "./Verification.module.css";

const VerificationContainer = ({
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
}) => {
    return (
        <>
            <div className={styles.form__wrapper}>
                <form className={styles.form}>
                    <h1 className={styles.form__header}>Please, type your email and create a password</h1>
                    {emailIsActive && emailError && <div className={styles.form__error__text}>{emailError}</div>}
                    <div className={styles.form__inputs}>
                        <input
                            type="text"
                            name="email"
                            value={email}
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
                            value={password}
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

                            const urlArray = window.location.href.split("/");
                            const action = urlArray[urlArray.length - 1];

                            action === "signup" ? isSignupHandler() : isLoginHandler();
                        }}
                    >
                        Log in
                    </button>
                </form>
            </div>
        </>
    );
};

VerificationContainer.propTypes = {
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
