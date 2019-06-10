import * as React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface PropTypes {
    navigation: NavigationScreenProp<any, any>;
}

export class SecondScreen extends React.Component<PropTypes> {
    render() {
        return (
            <View style={styles.container}>
                <Text>SecondScreen</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="To Main Screen"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});