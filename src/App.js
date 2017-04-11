import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC2pLFO8c3xih-NWuefI7t_WbgvG8Th5Do',
            authDomain: 'auth-2f1db.firebaseapp.com',
            databaseURL: 'https://auth-2f1db.firebaseio.com',
            projectId: 'auth-2f1db',
            storageBucket: 'auth-2f1db.appspot.com',
            messagingSenderId: '89579574128'
        });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>);
            case false:
                return <LoginForm />;
            default:
                return <CardSection><Spinner size='large' /></CardSection>;

        }
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
