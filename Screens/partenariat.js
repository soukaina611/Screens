import React from 'react';
import Page from './Page';
import { Button } from 'react-native-elements';
import {View, Text, Linking, ImageBackground, StyleSheet} from 'react-native'
import RéaliserR from '../Rencontres/RéaliserR';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';








export default class partenariat extends React.Component{
    constructor(props){
        super(props);
         this.state={
        ouvrirPage : false,
       }
   
   
     }
    
    static navigationOptions = {
        tabBarLabel : 'Partenariat',
        drawerIcon : (tintColor) => {
            return(
                <MaterialIcons
                name ='group'
                size={24}
                style={{color:tintColor }}>

                </MaterialIcons>
            );
        }
    }


    ouvrirPage(){
        this.props.navigation.navigate('Page');
        

    }
    ouvrirRencontre(){
        this.setState({
            ouvrirPage : true,
        })
    }
    render() {

       if(this.state.ouvrirPage){
           return <RéaliserR/>
       }
        
        
        return <View>
            <Text style ={styles.text}>Contacter la famille</Text>
          
            <Button buttonStyle={{backgroundColor :'mediumorchid',height: 100,alignItems : 'stretch'}} style ={{ height : 100, width : 100,  flex : 1,
         flexDirection :'column',justifyContent : 'space-around'}} onPress={()=> Linking.openURL('mailto:sk.sekkat@gmail.com')}
            title ="Openning Gmail"/>
          
            

            <Button buttonStyle={{backgroundColor :'mediumpurple' ,alignItems : 'stretch',height: 100}} style ={{height : 100 ,width : 100,flex : 1,
       flexDirection :'column',justifyContent : 'space-around'}}  onPress={()=>this.ouvrirRencontre()}title = "Rencontres"/>



            </View>
    




    }
}
const styles = StyleSheet.create({
    view : {
       
        
     
    },
    text : {
        
        justifyContent : 'center',
        alignContent : 'center',
        fontSize : 30,
        color : 'white',
        marginTop : 10,
        
    
        backgroundColor : 'violet'
    }
  

});