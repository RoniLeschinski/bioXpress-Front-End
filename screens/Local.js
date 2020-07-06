import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


export default function Local({navigation}){
    return(
    <View>
        <Text>Esta es la pantalla Producto</Text>
        <TouchableOpacity style={styles.boton}
        onPress={() => {
          navigation.navigate("CHome");
        }}>
            <Text>Ir a la Home</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      //justifyContent: "center",
      alignItems: 'flex-start',
      backgroundColor: '#ececec',
    },
    boton:{
        width: 350,
        height: 90,
        backgroundColor: "#38CB6C",
        borderRadius: 20,
        alignItems:"center",
        justifyContent: "center",
    },
});