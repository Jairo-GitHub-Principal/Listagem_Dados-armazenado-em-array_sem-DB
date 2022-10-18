import React,{Component} from "react";
import {View,Text,TouchableOpacity} from 'react-native';

import {controleDeEstoque} from '../stilos/estilos';

import Item from "../Models/Item";


class ItemComponente extends Component{
    
    
    
    render(){
        return(

        
                
                    <View style={{margin:10}}>
                    
                        <Text style={controleDeEstoque.testoTituloImprimir}>Nome: {this.props.nome}</Text>
                        <Text style={controleDeEstoque.testoTituloImprimir}>Preço: {this.props.preco}</Text>
                        <Text style={controleDeEstoque.testoTituloImprimir}>Quantidade: {this.props.quantidade}</Text>
                        <Text style={controleDeEstoque.testoTituloImprimir}>ID: {this.props.id}</Text>

                        

                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',marginLeft:15,marginRight:15}}>
                            <TouchableOpacity 
                            onPressIn={() => this.props.update(this.props.item) }
                            style={controleDeEstoque.botao}>
                                <Text style={controleDeEstoque.textBotoes}> Vendido</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            onPressIn={() => this.props.delete(this.props.id) }
                            style={controleDeEstoque.botao}>
                                <Text style={controleDeEstoque.textBotoes}> Remover</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
               
              
                
                

              
           

        )
    }
}


export default ItemComponente;
