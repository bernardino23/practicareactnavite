import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const AnotherScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Emails Screen</Text>
           
        </View>
    )
}

export default AnotherScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CAD3EA',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  
