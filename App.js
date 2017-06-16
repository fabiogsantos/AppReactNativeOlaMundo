import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './img/tyrion.jpg';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'stretch', padding: 20}}>
        <View style={{flex:3,  flexDirection:'column', justifyContent:'flex-start', alignItems:'center',  padding: 10}}>
          <Image
            style={styles.imageCicle}
            source={logo}
          />        
        </View>  
        <View style={{flex:5, flexDirection:'column', flexWrap: 'wrap', justifyContent:'flex-start'}}>
          <Text style={styles.textTitle}>Tyrion Lannister</Text>
          <Text style={styles.textContent}>Tyrion Lannister é um personagem ficcional da série de livros As Crônicas de Gelo e Fogo, escritas pelo autor norte-americano George R. R. Martin, e também de sua adaptação televisiva o seriado Game of Thrones.</Text>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageCicle: {
    width:100,
    height:80
    //borderader: 10
  },
  textTitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20
  },
  textContent: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 10
  }
})