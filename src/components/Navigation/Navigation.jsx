import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { useImage, IMAGE_LOGO, IMAGE_BRYANT, IMAGE_JORDAN, IMAGE_LEBRON, IMAGE_CURRY } from "@context/BgImageProvider";
import NavigationContainer from "./NavigationContainer";

import { getLocalStorage } from "@utils/localStorage";

import logo from "@images/logo.png";
import bryant from "@images/bryant.png";
import curry from "@images/curry.png";
import jordan from "@images/jordan.png";
import lebron from "@images/lebron.png";

const Navigation = ({ isLogin }) => {
    const [icon, setIcon] = useState(logo);

    const storeDataUserLogin = getLocalStorage("user").email;
    const isImage = useImage();

    useEffect(() => {
        switch (isImage.image) {
            case IMAGE_LOGO:
                setIcon(logo);
                break;
            case IMAGE_BRYANT:
                setIcon(bryant);
                break;
            case IMAGE_JORDAN:
                setIcon(jordan);
                break;
            case IMAGE_LEBRON:
                setIcon(lebron);
                break;
            case IMAGE_CURRY:
                setIcon(curry);
                break;
            default:
                break;
        }
    }, [isImage]);

    return (
        <>
            <NavigationContainer icon={icon} isLogin={isLogin} storeDataUserLogin={storeDataUserLogin} />
        </>
    );
};

Navigation.propTypes = {
    isLogin: PropTypes.bool,
};

export default Navigation;
