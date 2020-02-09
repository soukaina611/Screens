

import React from 'react';
import {StyleSheet, Button,View, Text, ActivityIndicator} from 'react-native';

import Page from './Page';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class App extends React.Component{

    static navigationOptions = {

        tabBarLabel : 'Observation',
        drawerIcon : (tintColor) => {
            return(
                <MaterialIcons
                name ='visibility'
                size={24}
                style={{color:tintColor }}>

                </MaterialIcons>
            );
        }
    }


    constructor(props){
       super(props);
        this.state={
         isloading: true,
         dataSource : null,
         //dataName : null,
         DatalastName : null,
       
      }
  
  
    }


    componentDidMount(){
  
       return fetch('http://f8d2219e.ngrok.io/getPatient')

      .then((response) => response.json()).then((responseJson) =>
      {
        this.setState({
            isloading:false,
         dataSource :responseJson[0].observation,
         dataName:responseJson[0].Nom,
         DatalastName : responseJson[0].Prenom,
     

        })
        console.log('bonjour' +responseJson.length)
    })
    .catch((error)=>{
        console.log(error)
    });
}


    call(){

        this.setState({
        isloading : true,
     

    
    });

}

    
    
        /*
        let test = this.state.dataSource
    console.warn(test)*/
        

            


  
    render() {
      

        if(this.state.isloading==false){

            let lolo = this.state.DatalastName

            let Nom = this.state.dataName

            
    
        let observation = this.state.dataSource.map((val,key)=>{
                return <View style = {styles.header}>
                <Text style={styles.textn} > Nom : {Nom}</Text>
                <Text style={styles.textn}> Prénom :{lolo}</Text>

                
                
                
















                
                <View key={key} style ={styles.item}>

                    <Button onPress={()=>{this.call()}}  title ={val.date + val.Nom_utilisateur}></Button> 

    
                   
    
         
                
                


                </View>

                </View>

            });
            return observation


        }
       if (this.state.loading==false){
            return(
                <View style = {styles.container}>
                <ActivityIndicator/>
                
                </View>
            )
        }
    
        else {
         /*return  <Page/>*/
            //fetch data/
            return fetch('http://f8d2219e.ngrok.io/getPatient')

        .then((response) => response.json()).then((responseJson) =>
        {
            this.setState({
                dataSource : responseJson[0].observation,

            });
        let data = this.state.dataSource.map((val,key)=>{
            return  <View key={key} style ={styles.item}>
                            
                                <Text>{val.Type_de_gémissement}</Text>
                                <Text>{val.Intensité}</Text>
                                <Text>{val.Durée}</Text>
                                <Text>{val.Autres_comportements}</Text>
                                <Text>{val.Nombre_de_soignants}</Text>
        
                                <Text>{val.Nombre_de_résidents}</Text>
                                <Text>{val.Activité_de_la_personne_âgée}</Text>
                                <Text>{val.Lieu_de_la_personne_âgée}</Text>
                                <Text>{val.Intensité_du_bruit_ambiant}</Text>
                                <Text>{val.Intensité_de_la_lumière_ambiante}</Text>
                                <Text>{val.Présence_de_bruit_télévision}</Text>


            </View>

            
        });return data
    


         })

       

        

    
   


        }


    

        
           
    
}

                   /* <Text> heloooooooooooooooo!</Text>*/

         
            
      
}
        




  


   const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor :'#fff',
        alignItems : 'center',
        justifyContent : 'center'
    },

    header : {

        flex: 1,
        marginTop : 10,
        marginLeft : 15,
        

    },
    item : {
        justifyContent:'center',
        alignItems:'center'
},
    

    textn : {
        fontSize : 20,
        marginTop : 20,
        marginLeft: 20
    },
   
   });



























































































































































































































































































































































