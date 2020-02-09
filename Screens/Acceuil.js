import React from 'react';
import {View,Text,StyleSheet,ImageBackground} from 'react-native';
import {Button} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class Acceuil extends React.Component{
    constructor() {
      super();
    }
    static navigationOptions = {

        tabBarLabel : 'collection',
        drawerIcon : (tintColor) => {
            return(
                <MaterialIcons
                name ='menu'
                size={24}
                style={{color:tintColor }}>

                </MaterialIcons>
            );
        }
    }


 render(){

    return <ImageBackground  source ={require('../Images/imagej.jpg')}
    style={styles.container1}>

        <View style ={styles.view}>

    
          <Text style ={{fontSize : 35 , color : 'royalblue'}}>Bienvenue!</Text>

          </View>

           </ImageBackground>
    
 }

}

const styles = StyleSheet.create({
  
    container1:{
      flex:1,
      width : '100%',
      height:'100%',
    },
    view : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }
});