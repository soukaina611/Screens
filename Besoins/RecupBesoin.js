import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';



export default class RecupBesoin extends React.Component{
    constructor() {
      super();
    }
     
    
  
  
   
   
    
    
    render() {
        
      return (

        <View>
                   <Button title ="voir Besoin choisie" onPress={this.props.parentReference}buttonStyle={{backgroundColor :'orange',height: 100,alignItems : 'stretch'}} style ={{ height : 100, width : 100}}></Button>
                   
                    
                  
                </View>
        

     
       
        
         
            
      

       
      );
          
      
    
    }
    }
    
