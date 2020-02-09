import React from 'react';
import {Text,View,TextInput, ScrollView, Button, StyleSheet} from 'react-native';
import Select from 'react-native-select-plus';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

  class collection extends React.Component{

    static navigationOptions = {

        tabBarLabel : 'collection',
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
    this.state = {
      Nom :'',
      Prénom :'',
      Date : '',
      Heure :'',
      Nom_du_personnel : '',
      type_de_comportement:"",
      Intensité : '',
      Durée : '',
      Commentaires1 : '',
      Commentaires2 : '',
      Commentaires3 : '',
      Autres_comportements: '',
      Agressivité_physique : '',
      Autres : '',
      Nombre_de_soigants : '',
      Nombre_de_résidents : '',
      Activité_personne_âgée :'',
      Lieu_personne_âgée :'',
      Intensité_bruit_ambiant :'',
      Intensité_lumière_ambiant : '',
      Présence_bruit_télévision : ''

      }
    
  
  
    this.items = [
       { key: 0, section: true, label: "Type de comportements" },
        { key: 1, label: "Cris" },
        { key: 2, label: "Gémissement" },
        { key: 3, label: "Appel à l'aide" },
        { key: 4, label: "Répétition" },
        
    ];
   
    this.items1=[
      {key: 0, section: true, label: "Intensité" },
        { key: 1, label: "1" },
        { key: 2, label: "2" },
        { key: 3, label: "3" },
        { key: 4, label: "4" },
        { key: 5, label: "5" },

    ];
    this.items2=[
      {key: 0, section: true, label: "Marche ou bouge sans raison" },
        { key: 1, label: "s'echapper" },
        { key: 2, label: "mouvements répétitifs" },
      


    ];
    this.items3=[
        {key: 0, section: true, label: "Agressivité physique" },
        { key: 1, label: "frapper" },
        { key: 2, label: "pousser" },
        {key  :3 , label :"cracher"},
    ];
    this.act = [
      { key: 0, label: "Sommeil" },
      { key: 1,  label: "Habillement" },
      { key: 2, label: "Soins d'hygiène" },
      { key: 3, label: "Alimentation" },
      { key: 4, label: "Musique" },
      { key: 5, label: "Visite" },
      { key: 6, label: "Télévision" },
      { key: 7, label: "Marche" },
  
  ];
  
  this.lieu = [
      { key: 0, label: "Corridor" },
      { key: 1, label: "Salle de bain" },
      { key: 2, label: "Salle de séjour" },
      { key: 3, label: "Ascenseur" },
      { key: 4, label: "Au lit" },
      { key: 5, label: "Au fauteuil" },
  
  ];
  
  
  this.intB = [
      { key: 0, label: "1" },
      { key: 1, label: "2" },
      { key: 2, label: "3" },
      { key: 3, label: "4" },
      { key: 4, label: "5" },
  ];
  
  this.intL = [
      { key: 0, label: "1" },
      { key: 1, label: "2" },
      { key: 2, label: "3" },
      { key: 3, label: "4" },
      { key: 4, label: "5" },
  ];
  
  
  this.Btél = [
      { key: 0, label: "oui" },
      { key: 1, label: "non" },
  ];


     
    }
    submit(){
      let collection ={};
     
        [
        collection.Nom = this.state.Nom,
        collection.Prénom=this.state.Prénom,
      collection.Date=this.state.Date,
      collection.Heure =this.state.Heure,
      collection.Nom_du_personnel=this.state.Nom_du_personnel,
      collection.type_de_comportement =this.state.type_de_comportement,
      collection.Intensité=this.state.Intensité,
      collection.Durée = this.state.Durée,
      collection.Commentaires1=this.state.Commentaires1,
      collection.Autres_comportements=this.state.Autres_comportements,
      collection.Agressivité_physique=this.state.Agressivité_physique,
      collection.Autres=this.state.Autres,

      collection.Nombre_de_soigants=this.state.Nombre_de_soigants,
      collection.Commentaires2=this.state.Commentaires2,
      collection.Nombre_de_résidents=this.state.Nombre_de_résidents,
      collection.Commentaires3=this.state.Commentaires3,
      collection.Activité_personne_âgée = this.state.Activité_personne_âgée,
      collection.Lieu_personne_âgée= this.state.Lieu_personne_âgée,
      collection.Intensité_bruit_ambiant=this.state.Intensité_bruit_ambiant,
      collection.Intensité_lumière_ambiant=this.state.Intensité_lumière_ambiant,
      collection.Présence_bruit_télévision=this.state.Présence_bruit_télévision
      ]
    
    
     /* console.warn(collection);*/
      ////////////////////////////////////////////////////////////////////////
      /*Fetch api*/
      var url ='https://2dfd628f.ngrok.io/addPatient';
      fetch(url,{
        method :'POST',
        body :JSON.stringify(collection),
        headers : new Headers({
          'Content-Type':'application/json'
        })

      }).then(res=> res.json())
      {/*
      .catch(error=>console.warn('ERROR :', error))
      .then(response =>console.warn('SUCESS :', response));*/}

      }
  
    onSelectedItemsChange(text, field) {
     

     if(field=='type_de_comportement'){
      
       
        this.setState({
          type_de_comportement: this.items[text].label,
        })
        
      }
       if(field=='Intensité'){
          this.setState({
            Intensité : this.items1[text].label,
          })
         
        }
        if(field=='Durée'){
          this.setState({
            Durée : text,
          })
         
        }
        if(field=='Commentaires1'){
          this.setState({
            Commentaires1 : text,
          })
         
        }
      
          if(field=='Autres_comportements'){
            this.setState({
              Autres_comportements: this.items2[text].label,
            })

          }
            if(field=='Agressivité_physique'){
              this.setState({
                Agressivité_physique : this.items3[text].label,
              })

            }
            if(field=='Autres'){
              this.setState({
                Autres : text,
              })
            }

              if(field== 'Nombre_de_soigants'){
                this.setState({
                  Nombre_de_soigants : text,
                })
              }
              if(field=='Commentaires2'){
                this.setState({
                  Commentaires2 : text,
                })
               
              }
                if(field== 'Nombre_de_résidents'){
                  this.setState({
                    Nombre_de_résidents :text,
                  })
                 }
                 if(field=='Commentaires3'){
                  this.setState({
                    Commentaires3 : text,
                  })
                 
                }

                  if(field=='Activité_personne_âgée'){
                    this.setState({
                      Activité_personne_âgée  : this.act[text].label,
                    })

                  }
                    if(field=='Lieu_personne_âgée'){
                      this.setState({
                        Lieu_personne_âgée : this.lieu[text].label,
                      })

                    }
                      if(field=='Intensité_bruit_ambiant'){
                        this.setState({
                          Intensité_bruit_ambiant : this.intB[text].label,
                        })
                      }
                        if(field=='Intensité_lumière_ambiant'){
                          this.setState({
                            Intensité_lumière_ambiant: this.intL[text].label,
                          })

                        }
                          if(field=='Présence_bruit_télévision'){
                            this.setState({
                              Présence_bruit_télévision: this.Btél[text].label,
                            })

                          }
                          if(field == 'Nom'){
                            this.setState({
                              Nom :text,
                            })
                          }
                          if(field=='Prénom'){
                            this.setState({
                              Prénom : text,
                            })
                          }
                          if(field=='Date'){
                            this.setState({
                              Date : text,
                            })
                          }
                          if(field=='Heure'){
                            this.setState({
                              Heure : text,
                            })
                          }
                          if(field=='Nom_du_personnel'){
                            this.setState({
                              Nom_du_personnel : text,
                            })
                          }

  
      }
    
  
    render() {
     // let {value} = this.state;
     

      return (
        
        <View style={{ flex: 1 , marginTop : 20, marginLeft :15}}>
          
          <ScrollView>
            <Text style ={styles.text}>Feuille d'observation </Text>
            <TextInput
            style ={styles.text} 
            placeholder ="Nom :" 
            onChangeText={(text)=> this.onSelectedItemsChange(text,'Nom')}/>
             <TextInput
             style ={styles.text}
            placeholder ="Prénom :" 
            onChangeText={(text)=> this.onSelectedItemsChange(text,'Prénom')}/>
            <TextInput
            style ={styles.text}
            placeholder="Date :"
            onChangeText={(text)=> this.onSelectedItemsChange(text,'Date')}
            />
            <TextInput
            style ={styles.text}
            placeholder="Heure :"
            onChangeText={(text)=> this.onSelectedItemsChange(text,'Heure')}
            />
            <TextInput
            style ={styles.text}
            placeholder="Nom du personnel :"
            onChangeText={(text)=> this.onSelectedItemsChange(text,'Nom_du_personnel')}
            />
            
          <Text style ={{ backgroundColor: '#33C1FF'}}>Comportements vocaux</Text>
          <Select
            data={this.items}
            width={250}
            placeholder="Choississez le type "
            onSelect={(text)=>this.onSelectedItemsChange(text,'type_de_comportement')}
            //data={data}
            search={true}
          />
          <Select
            data={this.items1}
            width={250}
            placeholder="Choississez l'intensité"
            onSelect={(text)=>this.onSelectedItemsChange(text,'Intensité')}
          /* data={data}*/
            search={true}
          />
        
      
        
       
        <TextInput
         style={{height: 30, width : 70 ,borderColor: 'grey', borderWidth: 1}}
         placeholder="Durée"
         onChangeText={(text)=>this.onSelectedItemsChange(text,'Durée')}/>
      
       
        <TextInput style={{height : 80 ,borderColor: 'grey', borderWidth: 1}}
        placeholder="Commentaires1"
        onChangeText={(text)=>this.onSelectedItemsChange(text,'Commentaires1')}/>


        <Text style ={{ backgroundColor: '#33C1FF'}}>Autres comportements</Text>
        <Select 
        data= {this.items2}
        width={250}
        placeholder="Choississez mouvements ... "
        onSelect={(text)=>this.onSelectedItemsChange(text,'Autres_comportements')}
        search={true}
        />
        <Select 
        data= {this.items3}
        width={250}
        placeholder="Quelle agressivité physique ?"
        onSelect={(text)=>this.onSelectedItemsChange(text,'Agressivité_physique')}
        search={true}
        />
      
        <TextInput style={{height : 80 ,borderColor: 'grey', borderWidth: 1}}
        placeholder="Autres"
        onChangeText={(text)=>this.onSelectedItemsChange(text,'Autres')}/>
        

    

        <Text style ={{ backgroundColor: '#33C1FF'}}> Soigants dans l'environnement </Text>

        
        <TextInput style={{height : 30 ,borderColor: 'grey', borderWidth: 1}}
        placeholder="Nombre de soigantns"
        onChangeText={(text)=>this.onSelectedItemsChange(text,'Nombre_de_soigants')}/>
        

        
        <TextInput style={{height : 80 ,borderColor: 'grey', borderWidth: 1}}
        placeholder="Commentaires2"
        onChangeText={(text)=>this.onSelectedItemsChange(text,'Commentaires2')}/>
      

        <Text style ={{ backgroundColor: '#33C1FF'}}>Résidents dans l'environnement </Text>
        
         <TextInput style={{height : 30 ,borderColor: 'grey', borderWidth: 1}}
         placeholder="Nombre de résidents"
          onChangeText={(text)=>this.onSelectedItemsChange(text,'Nombre_de_résidents')}/>

       
        <TextInput style={{height : 80 ,borderColor: 'grey', borderWidth: 1}}
        placeholder="Commentaires3"
        onChangeText={(text)=>this.onSelectedItemsChange(text,'Commentaires3')}/>

        <Text style ={{ backgroundColor: '#33C1FF'}}> Activité de la personne agée</Text>

            <Select
              data={this.act}
              width={250}
              placeholder="choisissez l'activité ..."
              onSelect={(text)=>this.onSelectedItemsChange(text,'Activité_personne_âgée')}
              search={true}
            />


            <Text style ={{ backgroundColor: '#33C1FF'}}> Lieu de la personne agée</Text>

            <Select
            data={this.lieu}
            width={250}
            placeholder="choisissez le lieu  ..."
            onSelect={(text)=>this.onSelectedItemsChange(text,'Lieu_personne_âgée')}
            search={true}
            />
            
            <Text style ={{ backgroundColor: '#33C1FF'}}>Caractériqtiques de l'environnement</Text>

            <Text>Intensité du bruit..</Text>
            <Select
            data={this.intB}
            width={250}
            placeholder="choisissez l'intensité  ..."
            onSelect={(text)=>this.onSelectedItemsChange(text,'Intensité_bruit_ambiant')}
            search={true}
            />
            
            <Text style ={{ backgroundColor: '#33C1FF'}}>Intensité de la lumiére..</Text>
            <Select
            data={this.intL}
            width={250}
            placeholder="choisissez intensité ..."
            onSelect={(text)=>this.onSelectedItemsChange(text,'Intensité_lumière_ambiant')}
            search={true}
            />

            <Text style ={{ backgroundColor: '#33C1FF'}}>Présence de bruits de télévision..</Text>
            <Select
            data={this.Btél}
            width={250}
            placeholder="non"
            onSelect={(text)=>this.onSelectedItemsChange(text,'Présence_bruit_télévision')}
            search={true}
            />   
            

            <Button style={backgroundColor='blue'} onPress={()=>this.submit()} title ="valider"></Button>   
        
        
        </ScrollView>
        </View>
  
      );
    }
  }export default collection;


  const styles = StyleSheet.create({
    text : {
      fontSize : 25,
      justifyContent:'center',
      alignItems:'center'
    }
    
  })

   


        

      
        
       
        
      
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        