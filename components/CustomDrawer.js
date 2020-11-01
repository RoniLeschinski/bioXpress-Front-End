import React, {Component, useState, useEffect, useContext} from 'react';
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
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import CHome from '../screens/CHome';
import {AuthContext} from '../src/Context/auth_context';


export function CustomDrawer({navigation}){

  const {token, setToken, username, setUsername, lastName, setLastName, id, setId, idLocal, setIdLocal, type, setType} = useContext(AuthContext);

  function RegOHome(){
    if (type=="vendedor"){
      return "Home Vendedor"
    }
    else{
      return "VReg"
    }
  }

  

    return(
      <SafeAreaView style={{flex:1, backgroundColor:"#ECECEC"}}>
            <View style={styles.container1}>
              <Image source={require('../assets/images/usuario.png')} style={styles.image}/>
              <Text style= {styles.text}>{username + " " + lastName}</Text>
            </View>
            <View style={styles.container2}>
              <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => navigation.navigate('Home Comprador')}>
                <Image style={styles.image2} source={require('../assets/images/home.png')}/>
                <Text style={styles.text2}>Inicio</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => navigation.navigate('Favoritos')}>
                <Image style={styles.image2} source={require('../assets/images/corazon.png')}/>
                <Text style={styles.text2}>Favoritos</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => navigation.navigate('Mis Compras')}>
                <Image style={styles.image2} source={require('../assets/images/check.png')}/>
                <Text style={styles.text2}>Mis compras</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => navigation.navigate('Configuración')}>
                <Image style={styles.image2} source={require('../assets/images/config.png')}/>
                <Text style={styles.text2}>Configuración</Text>
              </TouchableOpacity>
            </View>
            <View style={{height:"28%"}}>
            <TouchableOpacity activeOpacity={0.7} style={styles.button2} onPress={() => navigation.navigate(RegOHome())}>
                <Image style={styles.image3} source={require('../assets/images/quieroVender.png')}/>
                <Text style={styles.text3}>Quiero vender</Text>
            </TouchableOpacity>
            </View>
            <View style={{width: "100%", height:"30%",}}>
              <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={()=> navigation.navigate('Intro')}>
                  <Image style={styles.image2} source={require('../assets/images/logout.png')}/>
                  <Text style={styles.text4}>Cerrar sesión</Text>
              </TouchableOpacity>
            </View> 
        </SafeAreaView>
             
    )
}
const styles = StyleSheet.create({
    container1:{
      flexDirection: "row",
      alignItems:"center",
      justifyContent:"center",
      width: "100%",
      height:"20%",
      backgroundColor:"#38CB6C",
      marginBottom:"5%"
    },
    container2:{
      width:"100%",
      height:"40%",
    },
    image:{
      width: 80,
      height:80,
      borderRadius:100,
    },
    image2:{
      width:25,
      height:25,
    },
    image3:{
      width:25,
      height:25,
      marginLeft:"10%"
    },
    button:{
      width:"100%", 
      height:"21%", 
      flexDirection:"row", 
      alignItems:"center", 
      marginLeft:"10%", 
    },
    button2:{
      flexDirection:"row",
      alignItems:"center", 
      width:"100%", 
      height:"32%", 
      backgroundColor:"#0D93FF"
    },
    text:{
      color:"#fff",
      fontSize:20,
      fontWeight:"bold",
      marginLeft:"8%",
      width:"45%"
    },
    text2:{
      fontSize: 18,
      fontWeight:"bold",
      color:"#4B4B4B",
      marginLeft:"5%"
    },
    text3:{
      fontSize: 18,
      fontWeight:"bold",
      color:"#fff",
      marginLeft:"5%"
    },
    text4:{
      fontSize: 18,
      fontWeight:"800",
      color:"#FF6B6B",
      marginLeft:"5%"
    },
  });