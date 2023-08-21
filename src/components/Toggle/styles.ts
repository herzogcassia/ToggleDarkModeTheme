import { StyleSheet } from "react-native";
import { color } from "../../assets/colors";

export const styles = StyleSheet.create({
    toggle: {
        position: 'relative',
        width: 300,
        zIndex: 1,
        flexDirection: 'row',
        height: 80,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: color.skyBorder,
        elevation: 5,
        shadowColor: color.skyBorder,
        alignItems: "center",
        justifyContent: "center",

    },
    containerSunSky: {
        alignItems: "center",
        justifyContent: "center",

    },
    sun: {
        position: 'absolute',
        flexDirection: "row",
        elevation: 5,
        top: -35,
        marginHorizontal: 5
    },
    star: {
        flexDirection: "row",
    },

    nocturneSky: {
        position: 'absolute',
        flexDirection: "row",
        height: 100,
        width: 300,
        backgroundColor: 'transparent',
        alignItems: "center",
        justifyContent: "center",
        top: 10,
    },
    moon: {
        position: 'absolute',
        top: -35,
        flexDirection: "row",
        elevation: 5,
        marginHorizontal: 5,
    },
    sunsetSky: {
        position: 'absolute',
        zIndex: -1,
        alignItems: "center",
        justifyContent: "center",
        left: 320,
        top: 15,
    },
    cloudBack: {
        position: "absolute",
        alignItems: "center",
        right: -10,
    },
    cloudFront: {
        right: -9,
        position: "absolute",
        alignItems: "center"
    },
    eclipse1: {
        position: 'absolute',
        width: 300,
        height: 90,
        borderRadius: 100,
        backgroundColor: color.white,
        opacity: 0.3
    },
    eclipse2: {
        position: 'absolute',
        width: 200,
        height: 90,
        borderRadius: 100,
        backgroundColor: color.white,
        opacity: 0.1
    },
    eclipse3: {
        position: 'absolute',
        width: 100,
        height: 90,
        borderRadius: 100,
        backgroundColor: color.white,
        opacity: 0.1
    },



});










