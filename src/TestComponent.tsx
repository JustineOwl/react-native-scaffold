import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export class TestComponent extends React.Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text>TestComponent</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});