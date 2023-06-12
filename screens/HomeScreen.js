import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { GlobalStyles } from '../styles/GlobalStyles';

export default function HomeScreen() {
    return (
        <SafeAreaView style={GlobalStyles.SafeAreaViewstyle}>
            <View style={styles.viewContainer}>
                <Text style={GlobalStyles.H1}>News</Text>
                <View style={styles.box}>
                    <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/coffee-time-76b8f.appspot.com/o/coffeePic%2F2.jpg?alt=media&token=44a5584d-be46-429e-bc77-d9971b410603&_gl=1*tldigs*_ga*MTM4ODg4OTMzMC4xNjg1MzUzNTAw*_ga_CW55HF8NVT*MTY4NjU1NjU2NS4xMC4xLjE2ODY1NTg1NDIuMC4wLjA.' }}
                        resizeMode="contain"
                        style={styles.imgSize}
                    />
                    <View style={styles.TextBox}>
                        <Text style={styles.Boxh1}>เลือกเมล็ดให้เหมาะกับอุปกรณ์ที่ใช้ในการชงกาแฟ</Text>
                        <Text style={styles.Boxh2}>เนื่องจากกาแฟมีระดับการคั่วที่แตกต่าง อุปกรณ์ชงกาแฟก็มีหลากหลาย </Text>
                    </View>

                </View>
                <Text style={GlobalStyles.H1}>Other</Text>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        margin: 10,
    },
    box: {
        backgroundColor: '#E4D09D',
        width: '100%',
        height: undefined,
        borderRadius: 15,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 15,
    },
    TextBox: {
        flex: 2,
        marginHorizontal: 10,
    },
    imgSize: {
        resizeMode: 'cover',
        borderRadius: 10,
        width: '100%',
        height: undefined,
        aspectRatio: 3 / 4,
        flex: 1
    },
    Boxh1: {
        fontSize: 20,

    },
    Boxh2: {
        fontSize: 14
    },
});
