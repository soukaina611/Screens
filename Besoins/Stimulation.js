import React from 'react';
import {View,Text,CheckBox, Button } from 'react-native';
//import {CheckBox} from 'react-native-elements';
import Page from '../Screens/Page';
import RetourBesoins from '../Retour/RetourBesoins';


class Stimulation extends React.Component{

constructor(props){
    super(props);
    this.state={
        data1 : '',
        data2 : '',
        Stimulation1 : '',
        Stimulation2 : '',
        Stimulation3:'',
        Stimulation4 : '',
        ButtonRetour : false,
   
        
    }

}
RécupérationLastandFirstName(){
    return fetch('https://2dfd628f.ngrok.io/getPatient')
  
    .then((response) => response.json()).then((responseJson) =>
    { 
      this.setState({
        data1 : responseJson.Nom,
        data2 : responseJson.Prénom,
        
      })
  
        
      })
  
  
    .catch((error)=>{
        console.log(error)
    });
  
    
  }

Recuperation(){
      
    let collection ={};
    collection.Nom = this.RécupérationLastandFirstName.data1,
    collection.Prénom=  this.RécupérationLastandFirstName.data2,
      
  [
      collection.Stimulation1=this.state.Stimulation1,


      collection.Stimulation2 =this.state.Stimulation2,
      


      collection.Stimulation3 =this.state.Stimulation3,
          


      collection.Stimulation4 =this.state.Stimulation4,
  ]
   
         /*console.warn(collection);*/
          // Envoyer à l'api //
    var url ='https://2dfd628f.ngrok.io/addStimulation';
    fetch(url,{
      method :'POST',
     /* body :console.warn(JSON.stringify({besoin:(arrObj)})),*/
      body :JSON.stringify(collection),
      headers : new Headers({
        'Content-Type':'application/json'
      })
    
    }).then(res=> res.json())
    
    {/*
    .catch(error=>console.warn('ERROR :', error))
    .then(response =>console.warn('SUCESS :', response));
    */}
  
  }



ButtonRetour(){
        this.setState({
            ButtonRetour : true,
        })       

    }


checkedOk(click,besoin){

    if(besoin=='Perte audition'){
        this.setState({
            Stimulation1 : "Perte d'audition"
        })
    }
    if(besoin=='Perte de vision'){
        this.setState({
            Stimulation2: "Perte de vision"
        })
    }
    if(besoin=='Sous-stimulé'){
        this.setState({
            Stimulation3: "Sous-stimulé"
        })
    }
    if(besoin=='Trop de stimuli, trop de monde autour'){
            this.setState({
                Stimulation4: "Trop de stimuli, trop de monde autour"
            })
        }
    
}

    render(){

        if (this.state.ButtonRetour){
            return <RetourBesoins/>
        }
        return (

            <View style={{ flexDirection: 'row'}}>
            <View style={{ flexDirection: 'column'}}>

            <Text style={{marginTop: 5}}> Perte d'audition.</Text>
            
              <CheckBox
                onValueChange={(click)=>this.checkedOk(click,'Perte audition')}
               
              />

<               Text style={{marginTop: 5}}> Perte de vision.</Text>
            
             
              <CheckBox
              
                onValueChange={(click)=>this.checkedOk(click,'Perte de vision')}
              />
             
             <Text style={{marginTop: 5}}> Sous-stimuli.</Text>
              <CheckBox
               
                onValueChange={(click)=>this.checkedOk(click,'Sous-stimulé')}
              />
             
            
             <Text style={{marginTop: 5}}> Trop de stimuli, trop de monde autour.</Text>
            
              <CheckBox
                
                onValueChange={(click)=>this.checkedOk(click,'Trop de stimuli, trop de monde autour')}
              />
        


              <Button title ="Passer à l'étape suivante" onPress={()=>this.ButtonRetour()}></Button>
              <Button title ="Valider" onPress={()=>this.Recuperation()}></Button>

         
        </View> 
        </View>
      
    


        )


        }



}export default Stimulation;