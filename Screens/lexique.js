import React from 'react';
import {View, Text, Button, StyleSheet,ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class lexique extends React.Component{
    
    static navigationOptions = {

        tabBarLabel : 'Lexique',
        drawerIcon : (tintColor) => {
            return(
                <MaterialIcons
                name ='book'
                size={24}
                style={{color:tintColor }}>

                </MaterialIcons>
            );
        }
    }
    render() {
        
        return <View style={
            {
                flex:1,
                marginTop : 20,
                
            }

        }>
            <ScrollView>
            <Text style ={styles.text}>
                LEXIQUE
            
            </Text>
            
            
            <Text style = {styles.text1}> Cris : </Text>
            <Text  style ={styles.text3}>
             Ce sont des comportements sociaux vocaux entendus par les autres qui leurs semblent inappropriés, ils prennent diverses formes, par exemple, la 
             répetition des mots.
             </Text>
             <Text style = {styles.text1}> Prôche aidante : </Text>
             <Text  style ={styles.text3}>

              Une personne qui a une relation émotionnelle et sociale avec 
             la personne âgée, par exemple, un membre de sa famille ou une amie.</Text>

             <Text style = {styles.text1}> Démarche d'intervention: </Text>
            <Text  style ={styles.text3}>
             Aussi appelée intervention Décibels: une facon de faire,composée de principes de bases et d'une suites d'étapes qui visent à augmenter
             le bien être de la personne âgée, des proches et des soignantes.</Text>

             
             <Text style = {styles.text1}> Sens des comportements vocaux: </Text>
             <Text  style ={styles.text3}>
             Ce que ces comportements veulent dire ou ce qu'ils expriment.
             par exemple, un comportement vocaux peuvent exprimer un besoin ou une douleur.</Text>
             <Text style = {styles.text1}> Soignantes: </Text>
             <Text  style ={styles.text3}>
              Une infermière, une infermière auxilière, préposée, ou bénificiaire ou 
             une autre professionnelle de la santé(par exemple, une récréologue, une travailleuse 
             sociale ou un médecin)qui est impliquée dans les soins de la personne âgée.</Text>
             <Text style = {styles.text1}>Troubles neurocognitifs  : </Text>
             <Text  style ={styles.text3}>
              Changements physiques dans le cerveau qui causent, entre autres,des troubles de la mémoire,
             de la concentration, de la résolution de probléme et du language.
             ceci peut causer différents types de comportements chez les personnes âgées, dont les
             comportements vocaux. Des exemples d'un trouble neurocognitif sont la maladie d'Alzheimer,
             vasculaire, mixte, frontotemporale ou à corps de Lewy.
             </Text>
    
            </ScrollView>
        
            </View>
        




    }
}
const styles = StyleSheet.create({
  text : {
    marginTop :15,
    marginLeft :10 ,
    color : 'white',
    fontSize :25  , backgroundColor:'violet'
  },

  text1 : {
      marginTop : 15,
      marginLeft : 15,
      fontSize : 20 , color : 'mediumorchid',
      fontWeight: 'bold',
textDecorationLine: "underline",
textDecorationStyle: "solid",
textDecorationColor: "#ba55d3"
  },
  text3 : {
      fontSize :20,
      marginTop : 10,
      marginLeft :5,


  }
});
