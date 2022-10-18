import React,{Component} from "react";
import {View,Text,TouchableOpacity,TextInput, ScrollView} from 'react-native';

import{controleDeEstoque} from '../stilos/estilos'
import Item from "../Models/Item";
import ItemComponente from "./ItemComponente";
import ItemDatabase from "../Database/ItemDatabase";


class CadastrarDadosElistar extends Component{
    constructor(props){
        super(props)
        this.state ={
            nome:'',
            preco:0.0,
            quantidade:0,
            item:[],
            lista:[]            
        }
       
        this.ListarDados();
        //this.cadastrar = this.cadastrar.bind(this);
    }

       Cadastrar = (nome,preco,quantidade) => {
        const itemNovo = new Item(nome,preco,quantidade); // cria uma instancia de item e passa os states por parametro os states
        const banco = new ItemDatabase(); // cria um instancia de itemdatabase para chamar os metodos do CRUD
        banco.Inserir(itemNovo); // chama o metodo Inserir , que recebe por parametro o objeto itemNovo, que ja carrega consigo os states que tem as informações passadas pelo inputText
        this.ListarDados();
        //this.forceUpdate(); // esse code força a a atualização da lista, onde o indice que foi acrescentado com o valor passado por parametro, passa a ser exibido quando o indice for chamado na lista
                            // automaticamente vai atualizar o props, que recebe   
    
        }
        atualizar = (item)=>{
          const banco = new ItemDatabase();                 
          banco.Atualizar(item);   
          this.ListarDados();    
          
        }

        ListarDados = () => {
            const banco = new ItemDatabase(); // criamos uma instancia de ItemDatabase

            /* chama o metodo Listar(). chama o metodo then(o metodo then recebe por parametro uma variavel  "listaComplera" que armazena nela o retorno do metodo listar(), ainda implementando o parametro de then, chamaos uma função => eroow function
                que no seu scopo vai chamar o metodo setstate(que vai pegar o retorno do metodo listar, que foi armazenado na variavel "listaCompleta,e acrescentar no vetor lista") )*/
            banco.Listar().then(listaCompleta =>{this.setState({lista:listaCompleta})});
         }

         remover = (id) =>{
                               
            const banco = new ItemDatabase();
            banco.Remover(id);
            this.ListarDados();
        }



      

    render(){
        return(

            <ScrollView>
                <View style={controleDeEstoque.corpo}>
                    <Text  style={controleDeEstoque.testoTitulo}> Controle de estoque</Text>
                   
                    <TextInput placeholder="produto" onChangeText={(valorDigitado)=>{this.setState({nome:valorDigitado})}} style={controleDeEstoque.entradaDetext}></TextInput>
                    <TextInput placeholder="preço" onChangeText={(valorDigitado)=>{this.setState({preco:valorDigitado})}} style={controleDeEstoque.entradaDetext}></TextInput>
                    <TextInput placeholder="quantidade" onChangeText={(valorDigitado)=>{this.setState({quantidade:valorDigitado})}} style={controleDeEstoque.entradaDetext}></TextInput>
                 
                </View>
               
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity 
                    onPressIn={() => this.Cadastrar(this.state.nome,this.state.preco,this.state.quantidade) }
                    style={controleDeEstoque.botao}>
                        <Text style={controleDeEstoque.textBotoes}> Salvar</Text>
                    </TouchableOpacity>
                </View>

                <View style={controleDeEstoque.testoTituloImprimir}>
                    <Text style={controleDeEstoque.testoTitulo}>Listar Itens</Text>
                       
                       
                       {

                           
                             
                            this.state.lista.map(elementoLista => (
                            <ItemComponente  
                                
                                item = {elementoLista}
                                nome={elementoLista.nome}
                                preco={elementoLista.preco}
                                quantidade={elementoLista.quantidade}
                                id = {elementoLista.id}  
                               
                                update = {this.atualizar}
                                delete = {this.remover}                       
                                
                               
                                >

                                </ItemComponente>))

                            



                          
                       }  

                 </View>

                
            </ScrollView>

        )
    }
}


export default CadastrarDadosElistar;


