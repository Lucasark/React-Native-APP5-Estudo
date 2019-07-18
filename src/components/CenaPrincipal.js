import React from 'react';

import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menu_cliente = require('../imgs/menu_cliente.png');
const menu_contato = require('../imgs/menu_contato.png');
const menu_empresa = require('../imgs/menu_empresa.png');
const menu_servico = require('../imgs/menu_servico.png');

const CenaPrincipal = ({ navigation }) => {
  return (
    <View>
        <StatusBar hidden={true} />

        <BarraNavegacao> </BarraNavegacao>

        <View style={styles.logoEstilo}>
            <Image source={logo}/>
        </View>
        
        <View style={styles.menuEstilo}>
            <View style={styles.menuGrupo} >
                <TouchableOpacity onPress = {() => navigation.navigate('Cliente')}>
                    <Image source={menu_cliente} style={styles.imgMenu}/>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {console.log('Empresa')}}>
                    <Image source={menu_empresa} style={styles.imgMenu}/>
                </TouchableOpacity>
            </View>
            <View style={styles.menuGrupo}>
                <Image source={menu_contato} style={styles.imgMenu}/>
                <Image source={menu_servico} style={styles.imgMenu}/>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    logoEstilo :{
        marginTop: 30,
        alignItems: 'center'
    },
    menuEstilo :{     
        alignItems: 'center'
    },
    menuGrupo:{
        flexDirection: 'row'
    },
    imgMenu :{
        margin : 15
    }
});

CenaPrincipal.navigationOption = {
    title : 'Menu',
}

export default CenaPrincipal