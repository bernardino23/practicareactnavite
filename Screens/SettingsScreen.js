
import React from 'react';
import { StyleSheet, Button, View,ToastAndroid } from 'react-native';
import Constants from "expo-constants";


const showToast = () => {
        ToastAndroid.show("Usando el Toast para android", ToastAndroid.SHORT);
      };
    
          function SettingsScreen(){
            return (
                            <View style={styles.container}>
                                <Button 
                                style={styles.mensaje}
                                 color="#5c166e"
                                title="SOY UN BOTÓN"
                                onPress={() => showToast()}
                                />
                            </View>
                        );

            }


      const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#CAD3EA',
              alignItems: 'center',
              justifyContent: 'center',
            },
            mensaje:{
                flex: 1,
            justifyContent: "center",
            paddingTop: Constants.statusBarHeight,
            backgroundColor: "#888888",
            padding: 8
            },    
        });


        export default SettingsScreen;