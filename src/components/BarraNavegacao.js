import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const BarraNavegacao = () => {
  return (
    <View style={styles.barraTitulo}>
      <Text style={styles.txtTitulo}>Pastelaria do Pará</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  barraTitulo:{
    backgroundColor: '#CCC',
    padding: 10,
    height: 60
  },
  txtTitulo:{
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: 'black'
  }
});

export default BarraNavegacao