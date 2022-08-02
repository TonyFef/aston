import { useImage, IMAGE_LOGO, IMAGE_BRYANT, IMAGE_JORDAN, IMAGE_LEBRON, IMAGE_CURRY } from "@context/BgImageProvider";

import logo from "@images/logo.png";
import bryant from "@images/bryant.png";
import curry from "@images/curry.png";
import jordan from "@images/jordan.png";
import lebron from "@images/lebron.png";

import { useEffect, useState } from "react";
import NavigationContainer from "./NavigationContainer";

const Navigation = ({ isLogin }) => {
    const [icon, setIcon] = useState(logo);

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
            <NavigationContainer icon={icon} isLogin={isLogin} />
        </>
    );
};

export default Navigation;
