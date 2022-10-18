import React,{Component,} from "react";

import { StyleSheet,color,backgroundColor,Dimensions } from "react-native";


var widthImputText = Dimensions.get('window').width;
var heigthInput = Dimensions.get('window').height;





const controleDeEstoque = StyleSheet.create({
    corpo:{alignItems:'center',justifyContent:'center'},
    entradaDetext:{fontSize:15,color:'red',width:'90%',backgroundColor:'#D6D6D6', borderRadius:30,margin:10,borderWidth:1,borderColor:'green'},
    botao:{backgroundColor:'#76B303',width:'50%',height:30,borderRadius:30,alignItems:'center',justifyContent:'center',margin:10},
    botaoVendRemov:{backgroundColor:'#76B303',width:'50%',height:30,borderRadius:30,alignItems:'center',justifyContent:'center',margin:10,flexDirection:'row'},
    textBotoes:{color:'white',fontSize:20},
    testoTitulo:{fontSize:20,color:'grey',fontWeight:'bold', textAlign:'center'},
    testoTituloImprimir:{fontSize:15,color:'grey',fontWeight:'bold'},


    tableHeadAlinhamento:{flexDirection:'row'}
    



})


export {controleDeEstoque}