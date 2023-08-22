import { Animated, Dimensions, Pressable, StyleSheet, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { color } from '../../assets/colors';
import { styles } from './styles';
import CloudBack from '../../assets/icons/CloudBack';
import CloudFront from '../../assets/icons/CloudFront';
import Sun from '../../assets/icons/Sun';
import { AppIcon } from '../../assets/icons/AppIcon';
import { Moon } from '../../assets/icons';
import { Star } from '../../assets/icons/Star';

const windowWidth = Dimensions.get("screen").width// Use a largura da tela real aqui
const fairyWidth = 50;

const Toggle = () => {
    const [touch, setTouch] = useState(true);
    const animatedValue = useRef(new Animated.Value(touch ? 0.01 : 0.05)).current; // Inicializa a animação
    const animatedCloud = useRef(new Animated.Value(touch ? 0.09 : 0.05)).current; // Inicializa a animação
    const animatedStar = useRef(new Animated.Value(touch ? 0.09 : 0.05)).current; // Inicializa a anim

    const onPressed = (): void => {
        setTouch(!touch);
        console.log("🚀 ~ file: index.tsx:21 ~ onPressed ~ touch:", touch)

        // Animação para a posição final
        Animated.timing(animatedValue, {
            toValue: touch ? 1 : 0,
            duration: 500, // Duração da animação em milissegundos
            useNativeDriver: false,
        }).start();

        Animated.timing(animatedCloud, {
            toValue: touch ? 1 : 0,
            duration: 500, // Duração da animação em milissegundos
            useNativeDriver: false,
        }).start(() => {
            // Animação de retorno ligeiro
            Animated.timing(animatedCloud, {
                toValue: touch ? 0.9 : 0.1, // Valor intermediário para criar o efeito de "rebote"
                duration: 250, // Duração da animação de retorno
                useNativeDriver: false,
            }).start();
        });
        Animated.timing(animatedStar, {
            toValue: touch ? 1 : 0,
            duration: 500, // Duração da animação em milissegundos
            useNativeDriver: false,
        }).start(() => {
            // Animação de retorno ligeiro
            Animated.timing(animatedStar, {
                toValue: touch ? 0.9 : 0.1, // Valor intermediário para criar o efeito de "rebote"
                duration: 250, // Duração da animação de retorno
                useNativeDriver: false,
            }).start();
        });
    };

    const changeBackground = (): object => {
        if (touch) {
            return {
                backgroundColor: color.sky
            }
        } else {
            return {
                backgroundColor: "black",
                opacity: 0.8
            }
        }
    }


    const ballPosition = animatedValue.interpolate({
        inputRange: [0.57, 1],
        outputRange: [17, touch ? 71 : 58], // Substitua o valor conforme necessário
    });

    const skyPosition = animatedCloud.interpolate({
        inputRange: [0, 4],
        outputRange: [10, 600], // Substitua o valor conforme necessário
    })

    const starPosition = animatedStar.interpolate({
        inputRange: [0, 10],
        outputRange: [0, 600],
    })

    return (
        <Pressable style={{ ...styles.toggle, ...changeBackground() }} onPress={onPressed}>
            <Animated.View style={[{ transform: [{ translateX: ballPosition }] }]}>
                <View style={styles.containerSunSky}>
                    <View style={styles.eclipse1} />
                    <View style={styles.eclipse2} />
                    <View style={styles.eclipse3} />
                    {touch ?
                        <View style={styles.sun}>
                            <Sun width={'65'} height={'65'} />
                        </View>
                        :
                        <View style={styles.moon}>
                            <Moon width={'65'} height={'65'} />
                        </View>}
                </View>
            </Animated.View>
            {touch && <Animated.View style={[styles.sunsetSky, { transform: [{ translateY: skyPosition }] }]}>
                <View style={styles.cloudBack}>
                    <CloudBack color={color.cloudBack} width={'175'} height={'200'} />
                </View>
                <View style={styles.cloudFront}>
                    <CloudFront color={color.cloudFront} width={'175'} height={'200'} />
                </View>
            </Animated.View>}
            {!touch && <Animated.View style={[styles.nocturneSky, { transform: [{ translateY: starPosition }] }]}>
                <View style={styles.star}>
                    <Star styles={{ top: -20, right: 20, shadowColor: color.white, elevation: 5 }} color={color.white} width={'40'} height={'40'} />
                    <Star styles={{ top: -35, right: 15 }} color={color.white} width={'5'} height={'5'} />
                    <Star styles={{ top: -35 }} color={color.white} width={'14'} height={'14'} />
                    <Star styles={{ top: -2 }} color={color.white} width={'25'} height={'25'} />
                    <Star styles={{ top: -35 }} color={color.sun} width={'5'} height={'5'} />
                    <Star styles={{ top: 10, right: 100 }} color={color.white} width={'10'} height={'10'} />
                    <Star styles={{ top: 0 }} color={color.white} width={'35'} height={'35'} />
                    <Star styles={{ top: -25 }} color={color.sky1} width={'11'} height={'11'} />
                    <Star styles={{ top: -20 }} color={color.white} width={'6'} height={'6'} />
                </View>
            </Animated.View>}
        </Pressable>
    );
};

export default Toggle;

