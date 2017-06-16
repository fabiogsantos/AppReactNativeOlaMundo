import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
       <View style={{flex:1, justifyContent:'space-between', flexDirection: 'column'}}>
          <View style={{flex:2, justifyContent:'space-between', flexDirection: 'row', alignItems:'flex-start'}}>
            {/*Vermelhor*/}
            <View style={{padding: 30, width: 30, height: 10, backgroundColor:'#FF0000'}}/>
            {/*// Azul*/}
            <View style={{padding: 30, width: 30, height: 10, backgroundColor:'#0101DF'}}/>
          </View>        
          <View style={{flex:15, justifyContent:'center', alignItems:'center'}}>
            <Text>
              Olá React Native
            </Text>
          </View>
          <View style={{flex:2, justifyContent:'space-between', flexDirection: 'row', alignItems:'flex-end'}}>
            {/*// Amarelo*/}
            <View style={{padding: 30, width: 30, height: 10, backgroundColor:'#FFFF00'}}/>
            {/*// Verde*/}
            <View style={{padding: 30, width: 30, height: 10, backgroundColor:'#00FF00'}}/>
          </View>        
       </View>      
    );
  };
};
