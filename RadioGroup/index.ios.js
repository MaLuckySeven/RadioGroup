/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity 
} from 'react-native';
import RadioGroup from './component/RadioGroup';
import CheckBox from './component/CheckBox';


export default class Myapp extends Component{
  constructor(){
    super();
    this.state={
      radiolist:[
        'Option1',
        'Option2',
        'Option3',
        'Option4',
        'Option5',
        'Option6',
       ],
       checkbox:[
         {
           value:'Option1',
           checked:true,
         },
         {
          value:'Option2',
          checked:true,
        }
         
         
       ],
    };
  }
  handleClick=(index) =>{
    console.log(index);
  }

  handlePress=(item)=>{
    const {checkbox}=this.state;
    checkbox.forEach((item1,index)=>{
      if(item1.value===item.value){
        item1.checked = !item1.checked;
     }
  })
  this.setState({
    checkbox,
  })   
}
  render(){
    return(
      <View>
        <RadioGroup active={3} radiolist={this.state.radiolist} onClick={this.handleClick}/>
        <CheckBox checkbox={this.state.checkbox}  onClick={this.handlePress}/>
      </View>
    )
  }
}

AppRegistry.registerComponent('RadioGroup', () => Myapp);
