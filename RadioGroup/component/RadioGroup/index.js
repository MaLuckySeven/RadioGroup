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
import styles from './style';

export default class RadioGroup extends Component {
  constructor(props){
    super(props);
    this.state={
      active: props.active - 1, 
    };
  }
  handleClick = (index) =>{
    const {onClick}=this.props;
    this.setState({
      active:index,
    })
    onClick(index);
    }
  
  render() {
    const {radiolist}=this.props;
    const {active}=this.state;
    return (
     
      <View style={styles.container}>
        <View style={{padding:6,marginLeft:20,}}>
          <Text style={{fontSize:20,color:'#aaa',}}>Radio</Text>
        </View>
        <View style={styles.radiogroup}>
        {
          this.props.radiolist.map((item,index) => (
              <TouchableOpacity  
                key={index} 
                onPress={() => this.handleClick(index)} 
                style={[styles.radiolist, styles.line, index===radiolist.length-1 && styles.second]} 
              >
                <Text style={{fontSize:16,}}>{item}</Text>
                <Text style={{color:'green',fontSize:15,}}>
                {
                  active===index? 'X' : ''
                }
                </Text>
              </TouchableOpacity>
          ))
        }
        </View>
      </View>
     
    );
  }
}



