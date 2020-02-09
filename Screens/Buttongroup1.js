
import React from 'react';
import {ButtonGroup} from 'react-native-elements';
import {Text, View,Button, StyleSheet,CheckBox} from 'react-native';
import Plan from '../Screens/Plan';
import Exploration from '../Stratégies/Exploration';
import Déduction from '../Stratégies/Déduction';
import Reflexion from '../Stratégies/Reflexion';
import Collaboration from '../Stratégies/Collaboration';



export default class Buttongroup1 extends React.Component{

constructor(props){
    super(props);
    this.state ={
    selectedIndex : '',
    button0 : false,
    button1 : false,
    button2 : false,
    button3 : false,
  
  


      
       
    }
   this.updateIndex = this.updateIndex.bind(this);
    
}
updateIndex(selectedIndex) {
    this.setState({selectedIndex})
    if(selectedIndex==0){
        this.setState({
            button0 : true,
        })
    }
    if(selectedIndex==1){
        this.setState({
            button1 : true,
        })
    }
    if(selectedIndex==2){
        this.setState({
            button2 : true,
        })
    }

    if(selectedIndex==3){
        this.setState({
            button3 : true,
        })
    }
   



   




    
}



render(){
const buttons=['Exploration','Déduction','Collaboration','Réflexion']
const {selectedIndex}=this.state

if(this.state.button0){
    return <Exploration/>;

} 

if(this.state.button1){
    
   return <Déduction/>;
   
}

if(this.state.button2){
return <Collaboration/>;

}

if(this.state.button3){
return <Reflexion/>;

}

    
    

 return (
    

   
    <View>
    
    <ButtonGroup 
    onPress = {this.updateIndex}
    selectedIndex={selectedIndex}
    buttons ={buttons}
    containerStyle ={{height : 100}}
    
    />
   
  
    </View>
    
    );

}




}


