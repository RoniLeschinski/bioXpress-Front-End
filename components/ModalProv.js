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
  Modal,
} from 'react-native';
import {useLinkProps} from '@react-navigation/native';

export default function ModalProv(props) {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={{flex: 1, backgroundColor: 'rgba(56, 203, 108, 0.75)'}}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Seleccionar provincia</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
            contentContainerStyle={{
              paddingBottom: 0,
            }}>
            <TouchableOpacity
              style={styles.modalButton}
              activeOpacity={0.7}
              onPress={props.press1}>
              <Text style={styles.modalButtonText}>Buenos Aires</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press2}>
              <Text style={styles.modalButtonText}>
                Ciudad Autónoma de Buenos Aires
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press3}>
              <Text style={styles.modalButtonText}>Catamarca</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press4}>
              <Text style={styles.modalButtonText}>Chaco</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press5}>
              <Text style={styles.modalButtonText}>Chubut</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press6}>
              <Text style={styles.modalButtonText}>Córdoba</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press7}>
              <Text style={styles.modalButtonText}>Corrientes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press8}>
              <Text style={styles.modalButtonText}>Entre Ríos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press9}>
              <Text style={styles.modalButtonText}>Formosa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press10}>
              <Text style={styles.modalButtonText}>Jujuy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press11}>
              <Text style={styles.modalButtonText}>La Pampa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press12}>
              <Text style={styles.modalButtonText}>La Rioja</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press13}>
              <Text style={styles.modalButtonText}>Mendoza</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press14}>
              <Text style={styles.modalButtonText}>Misiones</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press15}>
              <Text style={styles.modalButtonText}>Neuquén</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press16}>
              <Text style={styles.modalButtonText}>Río Palmo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press17}>
              <Text style={styles.modalButtonText}>Salta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press18}>
              <Text style={styles.modalButtonText}>San Juan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press19}>
              <Text style={styles.modalButtonText}>San Luis</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press20}>
              <Text style={styles.modalButtonText}>Santa Cruz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press21}>
              <Text style={styles.modalButtonText}>Santa Fe</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press22}>
              <Text style={styles.modalButtonText}>Santiago del Estero</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press23}>
              <Text style={styles.modalButtonText}>
                Tierra del Fuego, Antártida e Islas del Atlántico Sur
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton5}
              activeOpacity={0.7}
              onPress={props.press24}>
              <Text style={styles.modalButtonText}>Tucumán</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#4B4B4B',
    marginVertical: 20,
  },
  modalButtonText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    height: '60%',
    borderRadius: 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: '30%',
    borderWidth: 0.25,
    overflow: 'hidden',
  },
  modalButton: {
    width: '100%',
    height: 60,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopColor: '#4B4B4B',
    borderBottomColor: '#4B4B4B',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  modalButton5: {
    width: '100%',
    height: 60,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopColor: '#4B4B4B',
    borderBottomColor: '#4B4B4B',
    borderTopWidth: 0.25,
  },
  scroll: {width: '100%', borderTopColor: '#4B4B4B', borderTopWidth: 0.25},
});
