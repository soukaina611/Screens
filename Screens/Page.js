
import React from 'react';
import {Text, View, StyleSheet,CheckBox} from 'react-native';
import {Button} from 'react-native-elements';
import Plan from './Plan';

import BesoinsAffectifs from '../Besoins/BesoinsAffectifs';
import BesoinsPhysiques from '../Besoins/BesoinsPhysiques';
import Stimulation from '../Besoins/Stimulation';
import Insatisafction from '../Besoins/Insatisfaction';
import Expérience_Difficile from '../Besoins/Expérience_Difficile';

import Réajustement from '../Réajustement/Réajustement';

export default class Page extends React.Component{
    constructor(props){
        super(props);
         this.state={
          ButtonRetour : false,
          ButtonBesoin1 :false,
          ButtonBesoin2 :false,
          ButtonBesoin3 :false,
          ButtonBesoin4 :false,
          ButtonBesoin5:false,
       
         




        
       }
    }
   



    Retour(){
        this.setState({
            ButtonRetour : true,
        })       

    }


    openBesoin1(){
        this.setState({
            ButtonBesoin1 : true,
        }) 
        
    }
    openBesoin2(){
        this.setState({
            ButtonBesoin2 : true,
        }) 
        
    }
    openBesoin3(){
        this.setState({
            ButtonBesoin3 : true,
        }) 
        
    }
    openBesoin4(){
        this.setState({
            ButtonBesoin4 : true,
        }) 
        
    }
    openBesoin5(){
        this.setState({
            ButtonBesoin5 : true,
        }) 
        
    }
   

    
     render() {
         if(this.state.ButtonBesoin1){
             return <BesoinsAffectifs/>
         }
         if(this.state.ButtonBesoin2){
            return <BesoinsPhysiques/>
        }
        if(this.state.ButtonBesoin3){
            return <Stimulation/>
        }
        if(this.state.ButtonBesoin4){
            return <Insatisafction/>
        }
        if(this.state.ButtonBesoin5){
            return <Expérience_Difficile/>
        }
       

         else if(this.state.ButtonRetour){
             return <Plan/>
         }

        return (
          
            <View style={
                {
                    flex:1,
                    flexDirection:'column',
                    justifyContent: 'center',
    
                }
    
            }>

         <Button title ="Besoins affectifs" onPress={()=>this.openBesoin1()} buttonStyle={{backgroundColor :'lightpink',height: 100,alignItems : 'stretch'}} style ={{ height : 100, width : 100}}></Button>
         <Button title ="Besoins physiques/Inconfort"onPress={()=>this.openBesoin2()}buttonStyle={{backgroundColor :'lightsalmon',height: 100,alignItems : 'stretch'}} style ={{ height : 100, width : 100}}></Button>
         <Button title ="Stimulation" onPress={()=>this.openBesoin3()}buttonStyle={{backgroundColor :'tomato',height: 100,alignItems : 'stretch'}} style ={{ height : 100, width : 100}}></Button>
         <Button title ="Insatisfaction" onPress={()=>this.openBesoin4()}buttonStyle={{backgroundColor :'indianred',height: 100,alignItems : 'stretch'}} style ={{ height : 100, width : 100}}></Button>
         <Button title ="Expérience difficile"onPress={()=>this.openBesoin5()}buttonStyle={{backgroundColor :'sienna',height: 100,alignItems : 'stretch'}} style ={{ height : 100, width : 100}}></Button>
        
        
        <Button title ="Retour" onPress={()=>this.Retour()}></Button>

                  </View>
        )}

    }
    
     
/*
                    return <View style ={styles.soso}>
        
                                <Text>Observartion :</Text>
                                <Text>{val.Type_de_gémissement}</Text>
                                <Text>{val.Intensité}</Text>
                                <Text>{val.Durée}</Text>
                                <Text>{val.Autres_comportements}</Text>
                                <Text>{val.Nombre_de_soignants}</Text>
        
                                <Text>{val.Nombre_de_résidents}</Text>
                                <Text>{val.Activité_de_la_personne_âgée}</Text>
                                <Text>{val.Lieu_de_la_personne_âgée}</Text>
                                <Text>{val.Intensité_du_bruit_ambiant}</Text>
                                <Text>{val.Intensité_de_la_lumière_ambiannte}</Text>
                                <Text>{val.Présence_de_bruit_télévision}</Text>
                    </View>
                  
            
               
        }

     }




const styles = StyleSheet.create({
    soso :{
                         flex:1,
                    justifyContent:'center',
                    alignItems:'center'
    },
})
*/