import React, {Component, useState, useEffect} from 'react';
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
  ActivityIndicator,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import 'react-native-gesture-handler';
import {useNavigation, useLinkProps} from '@react-navigation/native';
import ImgPantComp from '../components/ImgPantComp';
import ItemCard from '../components/ItemCard';
import Recommended from '../components/Recommended';
import Header from '../components/Header';
import BtnMiCompra from '../components/BtnMiCompra';
import {ProductsService} from '../services/products_service';
import ModalCategoria from '../components/ModalCategoria';
import ImagePicker from 'react-native-image-picker';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -200;

export default function NewPub({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  const [titulo, setTitulo] = useState('');
  const [idCategoria, setIdCategoria] = useState();
  const [descripcion, setDescripcion] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isPhoto, setIsPhoto] = useState(false);

  const [categoria, setCategoria] = useState();

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setPhoto(response);
        console.log(response)
      }
    });
  setIsPhoto(true)
};

  function setCategoriaAndClose(idCat, cat) {
    setIdCategoria(idCat);
    setCategoria(cat);
    setModalVisible(false);
  }


  return (
    <TouchableWithoutFeedback 
      onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={{flex: 1}}>
      <ModalCategoria
        visible={modalVisible}
        press1={() => setCategoriaAndClose(1, 'Frutas y vegetales')}
        press2={() => setCategoriaAndClose(3, 'Almacén')}
        press3={() => setCategoriaAndClose(4, 'Lácteos')}
        press4={() => setCategoriaAndClose(5, 'Carnes')}
        press5={() => setCategoriaAndClose(2, 'Vegano')}
      />
      <Header screen={'VHome'} press={() => navigation.openDrawer()} />
      <KeyboardAvoidingView
        contentContainerStyle={{
          height: '100%',
          width: '100%',
          //justifyContent: "center",
          alignItems: 'flex-start',
          backgroundColor: '#ececec',
        }}
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <Text style={styles.text}>Crear publicación</Text>
        <View style={styles.container}>
          <View style={styles.container2}>
            <ScrollView
              style={styles.scroll}
              contentContainerStyle={{
                paddingBottom: 250,
              }}>
              <View style={styles.container4}>
                <Text style={styles.text2}>Paso 1</Text>
              </View>
              <View style={styles.container3}>
                <View style={styles.container3}>
                  <Text style={styles.title2}>
                    Título
                    <Text
                      style={{
                        fontSize: 21,
                        fontWeight: '600',
                        color: '#38CB6C',
                      }}>
                      *
                    </Text>
                  </Text>
                  <TextInput
                    style={styles.input}
                    selectionColor="#9de0b5"
                    keyboardType="default"
                    autoCapitalize="words"
                    blurOnSubmit={false}
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={titulo => setTitulo(titulo)}
                  />
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 20,
                  width: '100%',
                }}>
                <Text style={styles.text3}>
                  NOTA: Tu título debe ser simple y tendrá que indicar el tipo
                  de producto y su marca{' '}
                </Text>
              </View>
              <View style={styles.container3}>
                <View style={styles.container3}>
                  <Text style={styles.title2}>
                    Imagen
                    <Text
                      style={{
                        fontSize: 21,
                        fontWeight: '600',
                        color: '#38CB6C',
                      }}>
                      *
                    </Text>
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      style={styles.button}
                      activeOpacity={0.7}
                      onPress={() => handleChoosePhoto()}>
                      <Text style={styles.buttonText}>Subir imagen</Text>
                    </TouchableOpacity>
                    {!photo ? (<View style={{width: 100, height: 100, borderRadius:5, backgroundColor:"grey"}} />):null}
                    {photo && (
                      <Image
                        source={{uri: photo.uri}}
                        style={{width: 100, height: 100, borderRadius:5}}
                      />
                    )}
                  </View>
                  <Text style={styles.text4}>
                    NOTA: Se recomienda que la imagen tenga un fondo blanco y
                    una calidad de 800x800
                  </Text>
                </View>
              </View>
              <View style={styles.container3}>
                <View style={styles.container3}>
                  <Text style={styles.title}>
                    Categoría
                    <Text
                      style={{
                        fontSize: 21,
                        fontWeight: '600',
                        color: '#38CB6C',
                      }}>
                      *
                    </Text>
                  </Text>
                  <TouchableOpacity
                    style={styles.button2}
                    activeOpacity={0.7}
                    onPress={() => setModalVisible(true)}>
                    <View style={{marginLeft: 20, width: '80%'}}>
                      <Text style={styles.textCategoria}>{categoria}</Text>
                    </View>
                    <Image
                      source={require('../assets/images/flechaAbajo.png')}
                      style={{width: 30, height: 30, marginRight: 10}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.container3}>
                <View style={styles.container3}>
                  <Text style={styles.title}>Descripción</Text>
                  <TextInput
                    placeholder="Máximo 200 caracteres"
                    placeholderTextColor="grey"
                    selectionColor="#ff4d4d"
                    keyboardType="default"
                    maxLength={200}
                    multiline={true}
                    style={styles.input2}
                    selectionColor="#9de0b5"
                    keyboardType="default"
                    blurOnSubmit={false}
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={descripcion => setDescripcion(descripcion)}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          paddingBottom: 20,
          paddingTop: 20,
          borderTopColor: '#d9d9d9',
          borderTopWidth: 1,
        }}>
        <TouchableOpacity
          style={styles.button3}
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate('NewPubNext', {
              titulo: titulo,
              idCategoria: idCategoria,
              descripcion: descripcion,
              imagen: photo,
            })
          }>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 26}}>
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ececec',
    width: '100%',
  },
  container2: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    overflow: 'hidden',
    borderColor: '#d9d9d9',
    borderWidth: 1,
  },
  container3: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  container4: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4B4B4B',
    marginVertical: 25,
    alignSelf: 'center',
  },
  text2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B4B4B',
    marginTop: 10,
  },
  text3: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B4B4B',
    justifyContent: 'center',
    width: '80%',
    textAlign: 'center',
  },
  text4: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B4B4B',
    justifyContent: 'center',
    width: '90%',
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
  },
  textCategoria: {
    width: '85%',
    fontWeight: '600',
    fontSize: 20,
    color: '#4B4B4B',
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderColor: '#d9d9d9',
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 15,
    fontSize: 18,
  },
  input2: {
    width: '100%',
    height: 120,
    backgroundColor: 'white',
    borderColor: '#d9d9d9',
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 15,
    fontSize: 18,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    textAlignVertical: 'top',
    marginBottom: 50,
  },
  title: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'left',
    width: '100%',
    marginVertical: 10,
  },
  title2: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'left',
    width: '100%',
  },
  scroll: {width: '100%'},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: 70,
    backgroundColor: '#0D93FF',
    borderRadius: 20,
    marginRight: 20,
  },
  button2: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    marginBottom: 15,
    flexDirection: 'row',
  },
  button3: {
    alignSelf: 'center',
    backgroundColor: '#0D93FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '90%',
    height: 85,
  },
});
