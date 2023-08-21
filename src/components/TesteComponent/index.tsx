import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



interface IComponentTest {
    // text: string,
    // label: string,
    // array: Array<string>
    data: { label: string; value: string }[];
}


export const TesteComponent = ({ data }: IComponentTest): JSX.Element => {
    return (
        <View style={styles.container}>
            {data.map((item, index) => (
                <View key={index} style={styles.row}>
                    <Text style={styles.label}>{item.label}:</Text>
                    <Text style={styles.text}>{item.value}</Text>
                </View>
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 16,
        width: 350,
        height: 150,
        borderWidth: 1,
        marginVertical: 10,
    },
    row: {
        width: "60%",
        // height: "20%",
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    label: {
        fontWeight: 'bold',
        marginRight: 5,
        fontSize: 14,
        color: "black",
        width: "80%",
    },
    text: {
        color: "black",
        marginTop: 10,
        fontSize: 14,
        width: "80%",
    },
    // container: {
    //     justifyContent: "space-between",
    //     flexDirection: "row",
    //     width: "100%",
    //     height: 150,
    //     borderWidth: 1,
    //     padding: 16
    // },
    // text: {
    //     color: "black",
    //     marginTop: 10,
    //     fontSize: 16
    // },
    // row: {
    //     flexDirection: 'row',
    //     marginBottom: 5,
    // },
    // label: {
    //     color: "black",
    //     marginTop: 10,
    //     fontWeight: "500",
    //     fontSize: 20
    // }
})
