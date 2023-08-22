import React from "react";
import { Circle, G, Svg } from "react-native-svg";
import { IIcons } from "./interfaces";

export const Moon = ({
    height, width
}: IIcons) => {
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 83 82"
        >
            <G filter="url(#filter0_ddii_104_56)">
                <Circle cx="38.758" cy="37.731" r="36.235" fill="#C4C9D2"></Circle>
            </G>
            <G filter="url(#filter1_i_104_56)">
                <Circle cx="34.833" cy="17.5" r="5.133" fill="#9DA5B5"></Circle>
            </G>
            <G filter="url(#filter2_i_104_56)">
                <Circle cx="25.472" cy="46.186" r="12.682" fill="#9DA5B5"></Circle>
            </G>
            <G filter="url(#filter3_i_104_56)">
                <Circle cx="56.875" cy="43.77" r="7.851" fill="#9DA5B5"></Circle>
            </G>
        </Svg>
    );
}
