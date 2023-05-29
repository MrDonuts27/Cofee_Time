import { Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
    return (
        <View
            style={{
                marginVertical: 15,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <TextInput
                style={{
                    width: "100%",
                    backgroundColor: '#F5E7C5',
                    fontSize: 16,
                    padding: 10,
                    paddingLeft: 15,
                    borderRadius: 25,
                    shadowColor: 'black',
                    shadowOffset: { 
                        width: 1, 
                        height: 3 
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3,
                    elevation: 5
                }}
                placeholder="Search Here..."/>
            <Ionicons
                style={{
                    position: 'absolute',
                    right:15
                }}
                size={20}
                name="search"/>
        </View>
    );
}
