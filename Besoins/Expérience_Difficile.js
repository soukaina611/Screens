import React from 'react';
import {View,Text,CheckBox, Button } from 'react-native';
//import {CheckBox} from 'react-native-elements';
import Page from '../Screens/Page';
import RetourBesoins from '../Retour/RetourBesoins';


class Expérience_Difficile extends React.Component{

constructor(props){
    super(props);
    this.state={
      data1 : '',
      data2 : '',
        Expérience_difficile1 : '',
        Expérience_difficile2: '',
        Expérience_difficile3: '',
        Expérience_difficile4: '',
        Expérience_difficile5: '',
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
      
  
      collection.Expérience_Difficile1=this.state.Expérience_difficile1,
  

 
 
      collection.Expérience_Difficile2 =this.state.Expérience_difficile2,
    

      collection.Expérience_Difficile3 =this.state.Expérience_difficile3,

  
      collection.Expérience_Difficile4 =this.state.Expérience_difficile4,
            
 
      collection.Expérience_Difficile5=this.state.Expérience_difficile5,
    ]
        
             /*console.warn(collection);*/







  
             var url ='https://2dfd628f.ngrok.io/addExperience';
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
             */
             }
  }
  




ButtonRetour(){
        this.setState({
            ButtonRetour : true,
        })       

    }


checkedOk(click,besoin){

    if(besoin=='Détresse'){
        this.setState({
            Expérience_Difficile1 : "Détresse"
        })
    }
    if(besoin=='Perte de contrôle'){
        this.setState({
            Expérience_Difficile2: "Perte de contrôle"
        })
    }
    if(besoin=='Souvenir de soldat'){
        this.setState({
            Expérience_Difficile3: "Souvenir de soldat"
        })
    }
    if(besoin=='Veux mourrir'){
        this.setState({
            Expérience_Difficile4: "Veux mourrir"
        })
    }
    if(besoin=='Veux retourner à la maison'){
        this.setState({
            Expérience_difficile5 : "Veux retourner à la maison"
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


            <Text style={{marginTop: 5}}> Détresse.</Text>
            
              <CheckBox
            
                onValueChange={(click)=>this.checkedOk(click,'Détresse')}
               
              />
             <Text style={{marginTop: 5}}> Perte de contrôle.</Text>
              <CheckBox
              
                onValueChange={(click)=>this.checkedOk(click,'Perte de contrôle')}
              />
             
             <Text style={{marginTop: 5}}>Souvenir de soldat.</Text>
            
              <CheckBox
               
                onValueChange={(click)=>this.checkedOk(click,'Souvenir de soldat')}
              />
                <Text style={{marginTop: 5}}>Veux mourrir.</Text>
              <CheckBox
                
                onValueChange={(click)=>this.checkedOk(click,'Veux mourrir')}
              />
            
            <Text style={{marginTop: 5}}>Veux retourner à la maison.</Text>
              <CheckBox
             
                onValueChange={(click)=>this.checkedOk(click,'Veux retourner à la maison')}
              />
              
    

              <Button title ="Passer à l'étape suivante" onPress={()=>this.ButtonRetour()}></Button>
              <Button title="Valider " onPress={()=>this.Recuperation()}></Button>
              
         
        </View> 
        </View>
      
    


        )


        }



}export default Expérience_Difficile;