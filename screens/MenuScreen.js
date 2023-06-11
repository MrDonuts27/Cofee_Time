import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import MenuCard from '../component/MenuCard';
import SearchBar from '../component/SearchBar';
import { GlobalStyles } from '../styles/GlobalStyles';
import { DB } from '../AppConfig/firebase';

export default function MenuScreen() {

    const getMenu = async (DB) => {
        const menuCol = collection(DB, 'cities');
        const menuSnapshot = await getDocs(menuCol);
        const menuList = menuSnapshot.docs.map(doc => doc.data());
    };

    return (
        <SafeAreaView style={GlobalStyles.SafeAreaViewstyle}>
            <SearchBar />
            <ScrollView contentContainerStyle={styles.view}
                showsVerticalScrollIndicator={false}>
                {menuList.map((item) => (
                    <MenuCard props={item} />
                ))}
                <MenuCard>
                    <Text style={{ fontSize: 16 }}>Cappuchino</Text>
                </MenuCard>
            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    view: {
        paddingTop: 5,
        paddingBottom: 80,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});