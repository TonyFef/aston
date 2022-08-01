import React, { useContext, useState } from "react";

const BgImageContext = React.createContext();

export const IMAGE_LOGO = "logo";
export const IMAGE_BRYANT = "bryant";
export const IMAGE_JORDAN = "jordan";
export const IMAGE_LEBRON = "lebron";
export const IMAGE_CURRY = "curry";

export const BgImageProvider = ({ children, ...props }) => {
    const [image, setImage] = useState(null);

    const change = (name) => {
        setImage(name);
    };

    return (
        <BgImageContext.Provider
            value={{
                image,
                change,
            }}
            {...props}
        >
            {children}
        </BgImageContext.Provider>
    );
};

export default BgImageProvider;
export const useImage = () => useContext(BgImageContext);
