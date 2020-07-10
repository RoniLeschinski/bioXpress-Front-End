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
import CHome from './screens/CHome';
import VHome from './screens/VHome';
import Local from './screens/Local';
import Producto from './screens/Producto';

const Main = createStackNavigator();

function CustomHeader() {
  return (
    <Image
      source={require('./assets/images/logo.png')}
      style={{width: 40, height: 40, alignSelf: 'center'}}
    />
  );
}
function BackImage() {
  return (
    <Image
      source={require('./assets/images/back.png')}
      style={{width: 30, height: 30, alignSelf: 'center'}}
    />
  );
}
function Search() {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Image
        source={require('./assets/images/lupa.png')}
        style={{width: 30, height: 30}}
      />
    </TouchableOpacity>
  );
}
function OpenMenuButton() {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Image
        source={require('./assets/images/openMenu.png')}
        style={{width: 30, height: 30, alignSelf: 'center'}}
      />
    </TouchableOpacity>
  );
}

const CHomeOptions = {
  headerStyle: {
    backgroundColor: '#38CB6C',
  },
  headerTintColor: '#fff',
  title: '',
  headerLeftContainerStyle: {marginLeft: 30},
  headerLeft: props => <OpenMenuButton {...props} />,
  headerTitle: props => <CustomHeader {...props} />,
  headerRightContainerStyle: {marginRight: 30},
  headerRight: props => <Search {...props} />,
};

const VHomeOptions = {
  headerStyle: {
    backgroundColor: '#38CB6C',
  },
  headerTintColor: '#fff',
  title: '',
  headerLeftContainerStyle: {marginLeft: 30},
  headerLeft: props => <OpenMenuButton {...props} />,
  headerTitle: props => <CustomHeader {...props} />,
  headerRightContainerStyle: {marginRight: 30},
  headerRight: props => <Search {...props} />,
};

const ScreenOptions = {
  headerStyle: {
    backgroundColor: '#38CB6C',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTintColor: '#fff',
  title: '',
  headerLeftContainerStyle: {marginLeft: 15},
  headerBackImage: props => <BackImage {...props} />,
  headerTitle: props => <CustomHeader {...props} />,
  headerRightContainerStyle: {marginRight: 30},
  headerRight: props => <Search {...props} />,
};

export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen name="VHome" component={VHome} options={VHomeOptions} />
        <Main.Screen name="CHome" component={CHome} options={CHomeOptions} />
        <Main.Screen name="Local" component={Local} options={ScreenOptions} />
        <Main.Screen
          name="Producto"
          component={Producto}
          options={ScreenOptions}
        />
      </Main.Navigator>
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
