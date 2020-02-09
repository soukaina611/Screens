import React from 'react';
import {View,Text,CheckBox, Button } from 'react-native';
//import {CheckBox} from 'react-native-elements';
import Page from '../Screens/Page';
import RetourBesoins from '../Retour/RetourBesoins';


class Insatisafction extends React.Component{

constructor(props){
    super(props);
    this.state={
      data1 :'',
      data2 :'',
        Insatisfaction1 : '',
        Insatisfaction2 : '',
        Insatisfaction3 :'',
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
      
 
      collection.Insatisfaction1= this.state.Insatisfaction1,
  
  
 
 
      collection.Insatisfaction2 =this.state.Insatisfaction2,
      

 
      collection.Insatisfaction3 =this.state.Insatisfaction3,
          

            
  
    ]
   /* console.warn(collection);*/
    // Envoyer à l'api //
    var url ='https://2dfd628f.ngrok.io/addInsatisfaction';
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

    if(besoin=='Besoin Information'){
        this.setState({
            Insatisfaction1 : "Besoin d'information"
        })
    }
    if(besoin=='Contrarié'){
        this.setState({
            Insatisfaction2: "Contrarié"
        })
    }
    if(besoin=='Soins hygiènes'){
        this.setState({
            Insatisfaction3: "Soins hygiènes"
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
            
            <Text style={{marginTop: 5}}> Perte audition.</Text>
              <CheckBox
               
                onValueChange={(click)=>this.checkedOk(click,'Besoin Information')}
               
              />

                <Text style={{marginTop: 5}}> Contrarié.</Text>
    
              <CheckBox
              
                onValueChange={(click)=>this.checkedOk(click,'Contrarié')}
              />
              
           
              <Text style={{marginTop: 5}}>N'aime pas la façon de faire les soins hygiènes. </Text>
              <CheckBox
               
                onValueChange={(click)=>this.checkedOk(click,'Soins hygiènes')}
              />
          



              <Button title ="Passer à l'étape suivante" onPress={()=>this.ButtonRetour()}></Button>
              <Button title ="Valider" onPress={()=>this.Recuperation()}></Button>
              

         
        </View> 
        </View>
      
    


        )


        }



}export default Insatisafction;