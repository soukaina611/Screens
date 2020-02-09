import React from 'react';
import {Text,View,TextInput, ScrollView, StyleSheet} from 'react-native';
import Page from './Page';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Test2 from './test2';
import PersonnesResponsables from '../Personnes responsables/Personnes_responsables';
import Intervention_biosensorielle from '../Interventions/Intervention_biosensorielle';
import Testsend1 from '../Besoins/Testsend1';
import Réajustement from '../Réajustement/Réajustement';
import Buttongroup1 from '../Screens/Buttongroup1';



class Démarche extends React.Component{

    constructor(props){
        super(props);
         this.state={
        loadButton1 : false,
          loadButton2 : false,
          loadButton3 : false,
          loadButton4 : false,
            loadButton5 : false,
         
           loadButton7 : false,
       }
   
   
     }
    static navigationOptions = {

        tabBarLabel : 'collection',
        drawerIcon : (tintColor) => {
            return(
                <MaterialIcons
                name ='assignment'
                size={24}
                style={{color:tintColor }}>

                </MaterialIcons>
            );
        }
    }

    callButton1(){
        this.setState({
            loadButton1 : true,
        });

    }

    

    callButton2(){
        this.setState({
            loadButton2 : true,
        });

    }
    callButton3(){
        this.setState({
            loadButton3 : true,
        })
    }

    callButton4(){
        this.setState({
            loadButton4 : true,
        })
    }
    callButton5(){
        this.setState({
            loadButton5 : true,
        })
    }
    callButton7(){
        this.setState({
            loadButton7 : true,
        });

    }
  
    




render(){

    if (this.state.loadButton1){
        return <Buttongroup1/>;
  
    }
    if (this.state.loadButton2){
        return <Page/>;
  
    }

    if(this.state.loadButton3){
        return <Test2/>;
    
    }
    if(this.state.loadButton5){
        return <PersonnesResponsables/>;
    }
    if(this.state.loadButton4){
        return <Test2/>;
    }
    if(this.state.loadButton7){
        return <Réajustement/>;
    }

    
    return (

<View  style = {styles.view}>


<Button   title =" 1 .Stratégie d'identification"  buttonStyle={{backgroundColor :'cornflowerblue',height: 100,alignItems : 'stretch'}} style ={{ height : 100, width : 100}} ></Button>


<Button     title ="2. Sens Possibles" buttonStyle={{backgroundColor :'darkturquoise',height: 100,alignItems : 'stretch'}} style ={{ height : 100, width : 100}} ></Button>
<Button   title ="3. Catégorie d'interventions" buttonStyle={{backgroundColor :'purple',height: 100,alignItems : 'stretch'}}style ={{ height : 100, width : 100}}    ></Button>
<Button title ="4. Interventions spécifiques"buttonStyle={{backgroundColor :'mediumorchid',height: 100,alignItems : 'stretch'}}style ={{ height : 100, width : 100}}   ></Button>
<Button  title ="5. Personnes responsables"  buttonStyle={{backgroundColor :'salmon',height: 100,alignItems : 'stretch'}}style ={{ height : 100, width : 100}}  ></Button>

<Button   title ="6. Réajustement"  buttonStyle={{backgroundColor :'mediumvioletred',height: 100,alignItems : 'stretch'}}style ={{ height : 100, width : 100}}   ></Button>
</View>



 
);


    

}


} export default Démarche;


const styles = StyleSheet.create({
    view : {
        flex : 1,
        flexDirection : 'column',
        justifyContent: 'center',
     
    

      

      
    },
  

   
    
  })
