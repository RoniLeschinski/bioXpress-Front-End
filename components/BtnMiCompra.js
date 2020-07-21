import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

export default function BtnMiCompra(props){
    if (props.isChome == true){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.boton} activeOpacity={0.7} onPress={props.press}>
                    <Image source={require('../assets/images/carritoVerde.png')} style={{width:45, height:45, right:"100%"}}/>
                    <Text style={{fontWeight:"600", fontSize:20, color:"#4B4B4B"}}>3 productos - </Text>
                    <Text style={{fontWeight:"bold", fontSize:20, color:"#4B4B4B"}}>$560</Text>
                    <Image source={require('../assets/images/flechaArriba.png')} style={{width:35, height:35, left:"100%"}}/>
                </TouchableOpacity>
            </View>
        )
    }
    else if (props.isChome == false){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.boton2} activeOpacity={0.7} onPress={props.press}>
                    <Image source={require('../assets/images/carritoVerde.png')} style={{width:45, height:45, right:"100%"}}/>
                    <Text style={{fontWeight:"600", fontSize:20, color:"#4B4B4B"}}>3 productos - </Text>
                    <Text style={{fontWeight:"bold", fontSize:20, color:"#4B4B4B"}}>$560</Text>
                    <Image source={require('../assets/images/flechaAbajo.png')} style={{width:35, height:35, left:"100%"}}/>
                </TouchableOpacity>
            </View>
        )
        
    }
}
    

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ececec",
        width:"100%",
        height:70,
    },
    boton:{
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        width:"100%",
        height:70,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    boton2:{
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        width:"100%",
        height:70,
        borderBottomWidth:0.4,
        borderBottomColor:"#4B4B4B"
    },
});