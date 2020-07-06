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

export default function Seller(){
    return(
        <TouchableOpacity style={styles.boton}>
            <View style={styles.container}>
                <Image style = {styles.image}
                source={require('../assets/images/logohoracio.png')}/>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text1}>La huerta de Horacio</Text>
                <Text style={styles.text2}>Vendedor Oficial</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton:{
        padding: 20,
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    container:{
        width: 80,
        height: 80,
    },
    container2:{
        marginLeft: 10,
    },
    image:{
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    text1:{
        color: "#4B4B4B",
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 3,
    },
    text2:{
        color: "#A6A6A6",
        fontSize: 14,
        fontWeight: "normal"
    },
});