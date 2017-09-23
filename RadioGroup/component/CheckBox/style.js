import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        padding:10,
    },
    eachcheck:{
        padding:15,
        borderBottomWidth:1,
        borderColor:'#eee',
    },
    checklist:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    blank:{
        width:20,
        height:20,
        borderWidth:1,
        borderColor:'#aaa',
        borderRadius:20,
    },
    fill:{
        width:20,
        height:20,
        backgroundColor:'green',
        borderRadius:20,
    },
})