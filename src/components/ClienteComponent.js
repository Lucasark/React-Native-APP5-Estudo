import React , { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';
import { tsConstructorType } from '@babel/types';

export default class ClienteComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            img: '',
            txt: ''
        }
    }
    render(){
        return(
            <View style={styles.detalheCliente}>
                <Image source={this.props.img}></Image>
                <Text style={styles.txt}> {this.props.txt} </Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    detalheCliente : {
        padding: 20,
        marginTop: 10
    },
    txt : {
        fontSize: 18,
        marginLeft: 20
    }
});