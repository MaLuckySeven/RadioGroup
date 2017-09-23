import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity 
  } from 'react-native';
  import styles from './style';

export default class CheckBox extends Component{
   
    hanndlePress=(item)=>{
        const {onClick}=this.props;
        onClick(item);
    }
    render(){
        const {checkbox}=this.props;
        return(
            <View style={styles.container}>
               
                    {
                       this.props.checkbox.map((item,index)=>(
                           <View style={styles.eachcheck} key={index}>
                            <TouchableOpacity 
                                onPress={()=>this.hanndlePress(item)}
                                style={styles.checklist}>
                                <View style={{padding:3}}>
                                    <View style={[item.checked? styles.blank:styles.fill]}></View>   
                                </View>
                                <View style={{marginRight:220}}><Text style={{fontSize:18}}>{item.value}</Text></View>
                            </TouchableOpacity>
                           </View>
                       )) 
                    }
                
            </View>
        )
    }
}
