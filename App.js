import React, {Component, useState} from 'react';
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
import Reg from './screens/Reg';
import RegNext from './screens/RegNext';
import VReg from './screens/VReg';
import VRegNext from './screens/VRegNext';
import Intro from './screens/Intro';
import NewPub from './screens/NewPub';
import NewPubNext from './screens/NewPubNext';
import {AuthContext} from './src/Context/auth_context';
import {ProductContext} from './src/Context/product_context';

const Main = createStackNavigator();
const Drawer = createDrawerNavigator();

function createStack() {
  const initialArray = [];
  const [token, setToken] = useState();
  const [cantTot, setCantTot] = useState(0);
  const [precioTot, setPrecioTot] = useState(0);
  const [cart, setCart] = useState(initialArray)

  return (
    <AuthContext.Provider value={{token, setToken}}>
      <ProductContext.Provider value ={{cantTot, setCantTot, precioTot, setPrecioTot, cart, setCart}}>
        <Main.Navigator
          initialRouteName="Intro"
          screenOptions={{headerShown: false}}>
          <Main.Screen name="Intro" component={Intro} />
          <Main.Screen name="Login" component={Login} />
          <Main.Screen name="RegNext" component={RegNext} />
          <Main.Screen name="Reg" component={Reg} />
          <Main.Screen name="VReg" component={VReg} />
          <Main.Screen name="VRegNext" component={VRegNext} />
          <Main.Screen name="Home Comprador" component={CHome} />
          <Main.Screen name="Producto" component={Producto} />
          <Main.Screen name="Local" component={Local} />
          <Main.Screen name="MiCompra" component={MiCompra} />
          <Main.Screen name="NewPub" component={NewPub} />
          <Main.Screen name="NewPubNext" component={NewPubNext} />
        </Main.Navigator>
      </ProductContext.Provider>
    </AuthContext.Provider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthContext.Provider>
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Home Comprador" component={createStack} />
          <Drawer.Screen name="Home Vendedor" component={VHome} />
          <Drawer.Screen name="Favoritos" component={Favoritos} />
          <Drawer.Screen name="Mis Compras" component={MisCompras} />
          <Drawer.Screen name="Configuración" component={Config} />
        </Drawer.Navigator>
      </AuthContext.Provider>
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
