import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/AuthStyles';
import { auth } from '../AppConfig/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = ({ navigation }) => {
    const [isSignIn, setIsSignin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate('Main');
            }
        });

        return () => unsubscribe();
    }, [navigation]);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                Alert.alert('Success', `Logged in as: ${user.email}`);
            })
            .catch((error) => Alert.alert('Error', error.message));
    };

    const handleSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.signInText}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    padding: 10,
                    flexDirection:'row'
                }}>
                    <Text>Don’t have an account?</Text>
                        <TouchableOpacity onPress={handleSignUp}>
                            <Text style={{color:'red',marginLeft:3}}>Sign Up</Text>
                        </TouchableOpacity>
                    
                    <TouchableOpacity onPress={handleSignUp} color="red" />
                </View>
            </View>
        </View>
    );
};

export default SignIn;
