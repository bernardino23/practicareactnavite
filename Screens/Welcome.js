import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Welcome = () => {
    
    return (
        <View style={styles.container}>
            <Text>Welcome to React Native</Text>
          
        </View>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CAD3EA',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  