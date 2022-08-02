import PropTypes from "prop-types";
import cn from "classnames";

import { useImage, IMAGE_LOGO, IMAGE_BRYANT, IMAGE_JORDAN, IMAGE_LEBRON, IMAGE_CURRY } from "@context/BgImageProvider";

import styles from "./ChooseBg.module.css";

const ChooseBg = () => {
    const isImage = useImage();

    return (
        <>
            <div className={styles.context__wrapper}>
                <div className={styles.context__text}>
                    <p>Little bonus for you - feel free to change logo however you want)</p>
                </div>
                <div className={styles.context__buttons}>
                    <button className={cn(styles.context__button, styles.context__button__logo)} onClick={() => isImage.change(IMAGE_LOGO)}>
                        Logo
                    </button>
                    <button className={cn(styles.context__button, styles.context__button__jordan)} onClick={() => isImage.change(IMAGE_JORDAN)}>
                        Jordan
                    </button>
                    <button className={cn(styles.context__button, styles.context__button__bryant)} onClick={() => isImage.change(IMAGE_BRYANT)}>
                        Bryant
                    </button>
                    <button className={cn(styles.context__button, styles.context__button__lebron)} onClick={() => isImage.change(IMAGE_LEBRON)}>
                        Lebron
                    </button>
                    <button className={cn(styles.context__button, styles.context__button__curry)} onClick={() => isImage.change(IMAGE_CURRY)}>
                        Curry
                    </button>
                </div>
            </div>
        </>
    );
};

ChooseBg.propTypes = {
    test: PropTypes.string,
};

export default ChooseBg;
