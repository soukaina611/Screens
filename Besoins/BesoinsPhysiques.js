import React from 'react';
import {View,Text,CheckBox, Button } from 'react-native';
//import {CheckBox} from 'react-native-elements';
import Page from '../Screens/Page';
import RetourBesoins from '../Retour/RetourBesoins';


class BesoinsPhysiques extends React.Component{


constructor(props){
    super(props);
    this.state={
        data1 : '',
        data2 : '',
        Douleur :'',
        Elimination : '',
        Faim : '',
        Fatigue : '',
        Froid : '',
        Inconfort : '',
        Soif : '',
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
  


Recuperation1(){
      
    let collection={};
    collection2.Nom = this.RécupérationLastandFirstName.data1,
    collection2.Prénom=  this.RécupérationLastandFirstName.data2,
    [
      
  
      collection.Douleur=this.state.Douleur,
  
  
  
      collection.Elimination=this.state.Elimination,
    

  
      collection.Faim =this.state.Faim,
          

  
      collection.Fatigue =this.state.Fatigue,
              
   
      collection.Froid =this.state.Froid,

  
          collection.Inconfort =this.state.Inconfort,

    
        collection.Soif =this.state.Soif,


    ]
    
        /*console.warn(collection);*/


       // Envoyer à l'api //
        var url ='https://2dfd628f.ngrok.io/addbesoin';
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

    if(besoin=='Douleur'){
        this.setState({
            Douleur : "Douleur",
        })
    }
    if(besoin=='Elimination'){
        this.setState({
            Elimination: "Elimination",
        })
    }
    if(besoin=='Faim'){
        this.setState({
            Faim: "Faim",
        })
    }
    if(besoin=='Fatigue'){
            this.setState({
                Fatigue: "Fatigue",
            })
        }
     if(besoin=='Froid'){
                this.setState({
                    Froid : "Froid",
                })
            }
     if(besoin=='Inconfort'){
                    this.setState({
                        Inconfort: "Inconfort",
                    })
                }
    if(besoin=='Soif'){
                    this.setState({
                        Soif: "Soif",
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

            <Text style={{marginTop: 5}}> Douleur.</Text>
            
              <CheckBox
                onValueChange={(click)=>this.checkedOk(click,'Douleur')}
               
              />

                <Text style={{marginTop: 5}}> Elimination.</Text>
             
             
              <CheckBox
              onValueChange={(click)=>this.checkedOk(click,'Elimination')}
              />
             
             <Text style={{marginTop: 5}}> Faim.</Text>
              <CheckBox
              onValueChange={(click)=>this.checkedOk(click,'Faim')}
              />
              
            
              <Text style={{marginTop: 5}}> Fatigue.</Text>
            
              <CheckBox
                onValueChange={(click)=>this.checkedOk(click,'Fatigue')}
              />
            
            <Text style={{marginTop: 5}}>Froid.</Text>
        
           
              <CheckBox
              onValueChange={(click)=>this.checkedOk(click,'Froid')}
              />
              
              <Text style={{marginTop: 5}}>Inconfort.</Text>
        
              <CheckBox
              onValueChange={(click)=>this.checkedOk(click,'Inconfort')}
              />
              
              <Text style={{marginTop: 5}}>Soif.</Text>
              <CheckBox
              onValueChange={(click)=>this.checkedOk(click,'Soif')}
              />
              


              <Button title ="Passer à l'étape suivante" onPress={()=>this.ButtonRetour()}></Button>
              <Button title ="Valider" onPress={()=>this.Recuperation1()}></Button>

         
        </View> 
        </View>
      
    


        )


        }


}export default BesoinsPhysiques;