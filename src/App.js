import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
    apiKey: 'AIzaSyC2pLFO8c3xih-NWuefI7t_WbgvG8Th5Do',
    authDomain: 'auth-2f1db.firebaseapp.com',
    databaseURL: 'https://auth-2f1db.firebaseio.com',
    projectId: 'auth-2f1db',
    storageBucket: 'auth-2f1db.appspot.com',
    messagingSenderId: '89579574128'
});
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
