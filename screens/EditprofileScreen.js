import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput, Text } from 'react-native';

const EditprofileScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../fakepic/2.jpg')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Change Photo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Full Name" />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Phone Number" />
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default EditprofileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    profileContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    editProfileButton: {
      backgroundColor: '#8B4513',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 20,
      marginBottom: 10,
    },
    editProfileText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'center',
    },
    formContainer: {
      width: '100%',
    },
    input: {
      backgroundColor: '#F0F0F0',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginBottom: 10,
    },
    saveButton: {
      backgroundColor: '#8B4513',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 20,
      marginTop: 20,
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });