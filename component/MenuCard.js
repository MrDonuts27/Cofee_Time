import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MenuCard(props) {
    return (
        <View style={styles.Cardcontainer}>
            <TouchableOpacity>
                <View style={{ alignContent: 'center' }}>
                    <Image resizeMode="contain" style={styles.imgfream} source={require('../fakepic/1.jpg')} />
                </View>
                <View style={styles.Cardcontent}>{props.children}</View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    Cardcontainer: {
        marginHorizontal: 5,
        backgroundColor: '#F5E7C5',
        borderRadius: 15,
        elevation: 10,
        marginBottom: 25,
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
            width: 3
        },
        flexDirection: 'column',
        padding: 10,
        width: 160,

    },
    imgfream: {
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        width: 140,
        height: 140

    },
    Cardcontent: {
        padding: 5,
    }
});