import React, { JSXElementConstructor } from "react";
import { IIcons } from "./interfaces";
import { Svg, Path } from "react-native-svg";
import { View } from "react-native";

export const Star = ({ color, width, height, styles }: IIcons) => {
    return (
        <View style={styles}>
            <Svg
                width={width}
                height={height}
                fill="none"
                viewBox="0 0 11 11"
            >
                <Path
                    fill={color ? color : "#fff"}
                    d="M4.37 3.69c-.936.934-2.086 1.434-3.434 1.489 1.348.067 2.483.554 3.434 1.488.937.934 1.405 2.044 1.405 3.343 0-1.3.468-2.409 1.405-3.343.936-.934 2.071-1.434 3.419-1.488-1.348-.055-2.483-.555-3.42-1.49-.936-.933-1.404-2.043-1.404-3.342 0 1.3-.468 2.41-1.405 3.343z"
                ></Path>
            </Svg>
        </View>
    );
}
