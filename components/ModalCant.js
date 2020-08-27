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

export default function ModalCant(props) {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={{flex: 1, backgroundColor: 'rgba(56, 203, 108, 0.75)'}}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Seleccionar cantidad</Text>
          <TouchableOpacity
            style={styles.modalButton}
            activeOpacity={0.7}
            onPress={props.press1}>
            <Text style={styles.modalButtonText}>1 unidad</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            activeOpacity={0.7}
            onPress={props.press2}>
            <Text style={styles.modalButtonText}>2 unidades</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            activeOpacity={0.7}
            onPress={props.press3}>
            <Text style={styles.modalButtonText}>3 unidades</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            activeOpacity={0.7}
            onPress={props.press4}>
            <Text style={styles.modalButtonText}>4 unidades</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            activeOpacity={0.7}
            onPress={props.press5}>
            <Text style={styles.modalButtonText}>5 unidades</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton6}
            activeOpacity={0.7}
            onPress={props.press6}>
            <Text style={styles.modalButtonText}>6 unidades</Text>
          </TouchableOpacity>
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
    borderRadius: 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: '20%',
    borderWidth: 0.25,
  },
  modalButton: {
    width: '100%',
    height: 60,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopColor: '#4B4B4B',
    borderBottomColor: '#4B4B4B',
    borderTopWidth: 0.25,
    borderBottomWidth: 0.25,
  },
  modalButton6: {
    width: '100%',
    height: 60,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopColor: '#4B4B4B',
    borderBottomColor: '#4B4B4B',
    borderTopWidth: 0.25,
  },
});
