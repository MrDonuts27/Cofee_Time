import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { GlobalStyles } from '../styles/GlobalStyles';

export default function HomeScreen() {
    return (
        <SafeAreaView style={GlobalStyles.SafeAreaViewstyle}>
            <Text style={GlobalStyles.H1}>News</Text>
            <View style={styles.box}>   
                <Image source={require('../fakepic/2.jpg')}
                    resizeMode="contain"
                    style={styles.imgSize}
                />
                <View style={styles.TextBox}>
                <Text style={styles.Boxh1}>เลือกเมล็ดให้เหมาะกับอุปกรณ์ที่ใช้ในการชงกาแฟ</Text>
                <Text style={styles.Boxh2}>เนื่องจากกาแฟมีระดับการคั่วที่แตกต่าง อุปกรณ์ชงกาแฟก็มีหลากหลาย </Text>
                <Text style={styles.Boxh1}>เลือกเมล็ดให้เหมาะกับอุปกรณ์ที่ใช้ในการชงกาแฟ</Text>
                <Text style={styles.Boxh2}>เนื่องจากกาแฟมีระดับการคั่วที่แตกต่าง อุปกรณ์ชงกาแฟก็มีหลากหลาย </Text>
                <Text style={styles.Boxh1}>เลือกเมล็ดให้เหมาะกับอุปกรณ์ที่ใช้ในการชงกาแฟ</Text>
                <Text style={styles.Boxh2}>เนื่องจากกาแฟมีระดับการคั่วที่แตกต่าง อุปกรณ์ชงกาแฟก็มีหลากหลาย </Text>
                </View>



            </View>
            <Text style={GlobalStyles.H1}>Other</Text>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#E4D09D',
        width: '100%',
        height: '25%',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent:'flex-start',
        padding: 15,
    },
    TextBox: {
        flex:2,
        marginLeft:10
    },
    imgSize:{
        height: '90%',
        borderRadius:15,
        flex:1
    },
    Boxh1: {
        fontSize: 20,
        
    },
    Boxh2: {
        fontSize: 14
    },
});
