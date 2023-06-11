import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import MapView, { Marker, MapToolbar } from 'react-native-maps';
import SearchBar from '../component/SearchBar';
import { GlobalStyles } from '../styles/GlobalStyles';

const MapScreen = () => {
  const markers = [
    {
      latitude: 14.884245,
      longitude: 102.026255,
      title: 'Class cafe ประตู 1',
    },
    {
      latitude: 14.884385,
      longitude: 102.026772,
      title: 'Coffee and cream',
    },
    // Add more markers as needed
  ];

  const initialRegion = {
    latitude: 14.882018,   // Latitude of Suranaree University Of Technology
    longitude: 102.021140, // Longitude of Suranaree University Of Technology
    latitudeDelta: 0.0922,  // Delta values determine the zoom level of the map
    longitudeDelta: 0.0421,
  };

  return (
    <View style={GlobalStyles.SafeAreaViewstyle}>
      <View>
        <SearchBar />
      </View>
      <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              title={marker.title}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12, // Adjust the marginTop to avoid the navigation bar
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
