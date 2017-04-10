import React from 'react';

import { View } from 'react-native';
// import CardSection from './CardSection';

const Card = ({ children }) => {
    return (
        <View style={styles.containerStyle}>
            {children}
        </View>
    );
};
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};
export  {Card};
