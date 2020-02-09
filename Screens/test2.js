
import React from 'react';
import {ButtonGroup} from 'react-native-elements';
import {Text, View,Button, StyleSheet,CheckBox} from 'react-native';
import Intervention_socioaffectif from '../Interventions/Intervention_socioaffectif';
import Intervention_communicatif from '../Interventions/Intervention_communicatif';
import Intervention_biosensorielle from '../Interventions/Intervention_biosensorielle';
import Intervention_comportementale from '../Interventions/Intervention_comportementale';
import Plan from '../Screens/Plan';



export default class test2 extends React.Component{

constructor(props){
    super(props);
    this.state ={
    selectedIndex : '',
    button0 : false,
    button1 : false,
    button2 : false,
    button3 : false,
    button4 : false,
  


      
       
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
    if(selectedIndex==4){
        this.setState({
            button4 : true,
        })
    }



   




    
}


  




render(){
const buttons=['Soccioaffectifs','Communicatives','Biosensorielles','Comportementales']
const {selectedIndex}=this.state

if(this.state.button0){
    return <Intervention_socioaffectif/>;

} 

if(this.state.button1){
    
   return <Intervention_communicatif/>;
   
}

if(this.state.button2){
return <Intervention_biosensorielle/>;

}

if(this.state.button3){
return <Intervention_comportementale/>;

}
if(this.state.button4){
    return <Intervention_communicatif/>;
    
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


