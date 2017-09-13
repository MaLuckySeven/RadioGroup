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

class RadioGroup extends Component {
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

const styles = StyleSheet.create({
  container: {
    display:'flex',
    paddingVertical:100,
    backgroundColor: '#F5FCFF',
  },
  radiogroup:{
    display:'flex',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderStyle:'solid',
    borderColor:'#eee',
    backgroundColor:'#fff',
    justifyContent:'center',
  },
  radiolist:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:15,
  },
  line:{
    borderBottomWidth:1,
    borderStyle:'solid',
    borderColor:'#eee',
    marginLeft:15,
  },
  second:{
    borderBottomWidth:0,
  },
});

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
    };
  }
  handleClick=(index) =>{
    console.log(index);
  }
  render(){
    return(

      <RadioGroup active={3} radiolist={this.state.radiolist} onClick={this.handleClick}/>
    )
  }
}

AppRegistry.registerComponent('RadioGroup', () => Myapp);
