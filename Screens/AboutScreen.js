import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text>About Screen1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CAD3EA',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  
