import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView,StatusBar } from "react-native";
import MenuCard from '../component/MenuCard';
import SearchBar from '../component/SearchBar';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function MenuScreen(){
    return (
        <SafeAreaView style={GlobalStyles.SafeAreaViewstyle}>
            <SearchBar/>
            <ScrollView contentContainerStyle={styles.view} 
            showsVerticalScrollIndicator={false}>
                <MenuCard>
                    <Text style={{ fontSize: 16 }}>Cappuchino</Text>
                </MenuCard>
                <MenuCard>
                    <Text style={{ fontSize: 16 }}>Cappuchino</Text>
                </MenuCard>
                <MenuCard>
                    <Text style={{ fontSize: 16 }}>Cappuchino</Text>
                </MenuCard>
                <MenuCard>
                    <Text style={{ fontSize: 16 }}>Cappuchino</Text>
                </MenuCard>
                <MenuCard>
                    <Text style={{ fontSize: 16 }}>Cappuchino</Text>
                </MenuCard>
                <MenuCard>
                    <Text style={{ fontSize: 16 }}>Cappuchino</Text>
                </MenuCard>
            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    view : {
        paddingTop: 5,
        paddingBottom: 80,
        flexWrap : 'wrap',
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
});