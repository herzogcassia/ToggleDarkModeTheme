import React from "react";
import { Svg, Path, Circle, G } from "react-native-svg";
import { IIcons } from "./interfaces";

function Sun({
    width,
    height
}: IIcons) {
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 83 81"
        >
            <G filter="url(#filter0_ddii_104_30)">
                <Circle cx="39.086" cy="37.086" r="36.235" fill="#FED62E"></Circle>
            </G>

        </Svg>
    );
}

export default Sun;