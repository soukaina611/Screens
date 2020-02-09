import React from 'react';
import {View,Text,CheckBox, Button,ScrollView } from 'react-native';
//import {CheckBox} from 'react-native-elements';
import Page from '../Screens/Page';
import Plan from'../Screens/Plan';
import RetourBesoins from '../Retour/RetourBesoins';
import Réajustement from '../Réajustement/Réajustement';







class BesoinsAffectifs extends React.Component{

  global ={};

constructor(props){
    super(props);
    this.state={



        Nom :'',
        Prénom :'',
        data1 : '',
        data2: '',
        Routine : '',
        Attention : '',
        Anxiété : '',
        Insécurité : '',
        Peur : '',
        Ennuie : '',
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

ButtonRetour(){
        this.setState({
            ButtonRetour : true,
        })       

    }




checkedOk(click, besoin){

    if(besoin=='Routine'){
        this.setState({
            Routine : "Routine",
        }) 
        
    }
     if(besoin=='Anxiété'){
        this.setState({
            Anxiété: "Anxiété",
        })
        
       
    }
    if(besoin=='Insécurité'){
        this.setState({
            Insécurité: "Insécurité",
        }) 
        
    }
     if(besoin=='Peur'){
            this.setState({
                Peur : "Peur",
            })
         

        }
     if(besoin=='Ennuie'){
                this.setState({
                    Ennuie : "Ennuie"
                })
                
            }
     if(besoin=='Attention'){
                    this.setState({
                        Attention : "Attention/Affection/Inconfort",
                    })
                   
                
                }
            
}



        Recuperation(){
         
      
      let collection2 = {};
      collection2.Nom = this.RécupérationLastandFirstName.data1,
    collection2.Prénom=  this.RécupérationLastandFirstName.data2,

                 [
              
    
    collection2.Anxiété=this.state.Anxiété,
      
    collection2.Attention=this.state.Attention,
   
    collection2.Routine=this.state.Routine,

    collection2.Insécurité=this.state.Insécurité,
    
     collection2.Peur=this.state.Peur,

    collection2.Ennuie=this.state.Ennuie,
    
                          ]
      
    
           /* BesoinsAffectifs.push(this.state.Anxiété);*/
            /*Patients.besoin2="Attention/Affection/Réconfort"
            BesoinsAffectifs.push("Attention");*/

    
        /*Patients.besoin3="Besoin d'une routine"
        BesoinsAffectifs.push("Routine");
     
    
        BesoinsAffectifs.push("Insécurité");
    
        /*Patients.besoin5 ="Peur"
        BesoinsAffectifs.push("Peur");

    
        /*Patients.besoin6="Ennuie"
        BesoinsAffectifs.push("Ennuie");*/
    
///1er réponse : ///
     /*console.warn(collection2);*/


   /* var arr=Object.keys(BesoinsAffectifs);
    var arrObj=arr.map(function(key){
        return {[key]:BesoinsAffectifs[key]};
        
    });
   
/// 2 eme réponse : ///
     console.warn(arrObj);*/
     
    
          
                

// Envoyer à l'api //
  var url ='https://2dfd628f.ngrok.io/addbesoin';
fetch(url,{
  method :'POST',
 /* body :console.warn(JSON.stringify({besoin:(arrObj)})),*/
  body :JSON.stringify(collection2),
  headers : new Headers({
    'Content-Type':'application/json'
  })

}).then(res=> res.json())

{/*
.catch(error=>console.warn('ERROR :', error))
.then(response =>console.warn('SUCESS :', response));
*/
}
  global =collection2;


 }
takerecup(){
  console.warn(global);
 

}


    render(){
      
      
            

        if (this.state.ButtonRetour){
            return <RetourBesoins/>;
        }

        return(

          <ScrollView>
          


            <View style={{ flexDirection: 'row'}}>
            <View style={{ flexDirection: 'column'}}>

            <Text style={{marginTop: 5}}> Anxiété.</Text>
            
              <CheckBox
               /* value ={this.state.Anxiété}*/
                onValueChange={(click)=>this.checkedOk(click,'Anxiété')}
                
               
              />

        
<             Text style={{marginTop: 5}}> Attention/Affection/Réconfort.</Text>
             
              <CheckBox
              
                onValueChange={(click)=>this.checkedOk(click,'Attention')}
              />
              
              <Text style={{marginTop: 5}}> Besoin d'une routine.</Text>
              <CheckBox
                
                onValueChange={(click)=>this.checkedOk(click,'Routine')}
              />
            
            
            <Text style={{marginTop: 5}}> Insécurité.</Text>
            
              <CheckBox
             
                onValueChange={(click)=>this.checkedOk(click,'Insécurité')}
              />
              
           
              <Text style={{marginTop: 5}}>Peur.</Text>
           
              <CheckBox
               
                onValueChange={(click)=>this.checkedOk(click,'Peur')}
              />
              
          
              <Text style={{marginTop: 5}}>S'ennuie.</Text>
              <CheckBox
               
                onValueChange={(click)=>this.checkedOk(click,'Ennuie')}
              />
             


              <Button title ="Passer à l'étape suivante" onPress={()=>this.ButtonRetour()}></Button>

              <Button title ="Valider" onPress={()=>this.Recuperation()}></Button>
             

            

             
      
       
              

         
        </View> 
        </View>

        </ScrollView>
      
    


        )


        }



}export default BesoinsAffectifs;