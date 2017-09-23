import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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