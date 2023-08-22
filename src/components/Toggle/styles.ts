import { StyleSheet } from "react-native";
import { color } from "../../assets/colors";

export const styles = StyleSheet.create({
    toggle: {
        overflow: "hidden",
        position: 'relative',
        width: 200,
        zIndex: 1,
        flexDirection: 'row',
        height: 80,
        borderRadius: 50,
        borderWidth: 5,
        // borderColor: color.skyBorder,
        borderColor: 'rgba(0, 0, 0, 0.01)',
        alignItems: "center",
        justifyContent: "center",
        elevation: 10,
    },
    containerSunSky: {
        alignItems: "center",
        justifyContent: "center",

    },
    sun: {
        position: 'absolute',
        flexDirection: "row",
        elevation: 5,
        top: -30,
        // marginHorizontal: 5
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
        top: -40
    },
    moon: {
        position: 'absolute',
        top: -30,
        flexDirection: "row",
        elevation: 5,
        marginHorizontal: 5,
    },
    sunsetSky: {
        position: 'absolute',
        zIndex: -1,
        alignItems: "center",
        justifyContent: "center",
        left: 180,
        top: 10,
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
        width: 175,
        height: 135,
        borderRadius: 100,
        backgroundColor: color.white,
        opacity: 0.3
    },
    eclipse2: {
        position: 'absolute',
        width: 135,
        height: 115,
        borderRadius: 100,
        backgroundColor: color.white,
        opacity: 0.1
    },
    eclipse3: {
        position: 'absolute',
        width: 90,
        height: 90,
        borderRadius: 100,
        backgroundColor: color.white,
        opacity: 0.1
    },



});










