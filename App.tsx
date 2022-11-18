/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        margin: 10,
        width: 200,
        height: 200,
    },
});

const App = () => {
    return (
        <View>
            <Image
                style={styles.logo}
                source={require('./no-bitches.jpg')}
            />
        </View>
    );
};

export default App;
