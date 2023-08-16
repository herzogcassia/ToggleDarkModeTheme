import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import { color } from '../../assets/colors';

const Toggle = () => {
    const [touch, setTouch] = useState(false);

    const onPressed = (): void => {
        setTouch(!touch);
        if (touch === touch) {
            console.log("é isso");
        }
    };

    return (
        <View style={styles.toggle}>
            <TouchableWithoutFeedback onPress={onPressed}>
                <View style={touch ? styles.moon : styles.sun} />
            </TouchableWithoutFeedback>
            <View style={!touch ? styles.cloud1 : null} />
        </View>
    );
};

export default Toggle;

const styles = StyleSheet.create({
    toggle: {
        position: 'relative',
        width: 120,
        height: 50,
        padding: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.skyBorder,
        // borderColor: color.moonBorder,


        elevation: 5,
        backgroundColor: color.sky4,
        shadowColor: color.skyBorder,
    },
    moon: {
        position: 'absolute',
        zIndex: 2,

        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        elevation: 5,
        shadowColor: color.moonBorder,
        borderColor: color.moonBorder,
        transform: [{ rotate: '45deg' }],
        backgroundColor: color.moon,
    },
    sun: {
        position: 'absolute',
        zIndex: 2,
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: color.sun,
        borderColor: color.sunBorder,
        transform: [{ rotate: '45deg' }],
    },
    cloud1: {
        width: 50,
        height: 30,
        zIndex: 1,
        borderColor: color.cloudBorder,
        elevation: 5,
        backgroundColor: color.white, // cor das nuvens
        // borderRadius: 15,
        left: -20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,

        marginHorizontal: 10,
    },
    cloud2: {
        width: 50,
        height: 30,
        zIndex: 1,
        borderColor: color.cloudBorder,
        elevation: 5,
        backgroundColor: color.white, // cor das nuvens
        // borderRadius: 15,
        left: -20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginHorizontal: 10,
    },
});
