import React from 'react';
import { StyleSheet, Text, View,Image,TouchableHighlight} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Presiona la imagen</Text>
           
           <TouchableHighlight onPress={()=>navigation.navigate('Welcome')}>
           <Image
            style={styles.tinyLogo}
            source={{ uri: 'https://fortyseven47.com/storage/2019/09/react-JC.png'}}
             />
        </TouchableHighlight>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CAD3EA',
      alignItems: 'center',
      justifyContent:'center'
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
    });
      