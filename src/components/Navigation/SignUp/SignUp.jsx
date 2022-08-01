import { Link } from "react-router-dom";

import styles from "./SignUp.module.css";

const SignUp = () => {
    return (
        <>
            <div className={styles.signup}>
                <Link to="/signup" exact="true" className={styles.signup__link}>
                    <span className={styles.signup__text}>Sign up</span>
                </Link>
            </div>
        </>
    );
};

export default SignUp;
