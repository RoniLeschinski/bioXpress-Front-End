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
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import {CustomDrawer} from './components/CustomDrawer';
import CHome from './screens/CHome';
import VHome from './screens/VHome';
import Local from './screens/Local';
import Producto from './screens/Producto';
import Favoritos from './screens/Favoritos';
import MisCompras from './screens/MisCompras';
import Config from './screens/Config';
import MiCompra from './screens/MiCompra';
import Login from './screens/Login';

const Main = createStackNavigator();
const Drawer = createDrawerNavigator();

function createStack() {
  return (
    <Main.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Main.Screen name="Login" component={Login} />
      <Main.Screen name="Home Comprador" component={CHome} />
      <Main.Screen name="Local" component={Local} />
      <Main.Screen name="Producto" component={Producto} />
      <Main.Screen name="MiCompra" component={MiCompra} />
    </Main.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home Comprador" component={createStack} />
        <Drawer.Screen name="Home Vendedor" component={VHome} />
        <Drawer.Screen name="Favoritos" component={Favoritos} />
        <Drawer.Screen name="Mis Compras" component={MisCompras} />
        <Drawer.Screen name="Configuración" component={Config} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ececec',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#23A6D9',
    paddingVertical: 12,
    width: 250,
    borderRadius: 12,
    alignItems: 'center',
  },
});
