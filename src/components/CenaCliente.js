import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import ClienteComponent from './ClienteComponent';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

const CenaCliente= () => {
  return (
    <View>
        <StatusBar hidden={true} />
        <BarraNavegacao></BarraNavegacao>
        <View style={styles.cabecalho}>
          <Image source={detalheCliente}></Image>
          <Text style={styles.txtTitulo}> Pessoas e Foda-se</Text>
        </View>
        <View>
          <ClienteComponent img={cliente1} txt='Pastel de Carne é muito Bom!'></ClienteComponent>
          <ClienteComponent img={cliente2} txt='Pastel de Queijo é muito melhor!'></ClienteComponent>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    cabecalho : {
      flexDirection: 'row',
      marginTop: 20
    },
    txtTitulo :{
      fontSize: 30,
      color: '#b9c941',
      marginLeft: 10,
      marginTop: 25
    }
});



export default CenaCliente;