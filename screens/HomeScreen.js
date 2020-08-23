import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

class HomeScreen extends React.Component{
    goToReadScreen=()=>{
        this.props.navigation.navigate('ReadScreen')
      }
      goToWriteScreen=()=>{
        this.props.navigation.navigate('WriteScreen')
      }
    render(){
        return(
            <View>
                <Text style={styles.head}>WELCOME!</Text>
                <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.goToReadScreen()}}>
                    <Text   style={styles.text}>read</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.goToWriteScreen()}}>
                    <Text  style={styles.text}>write</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}
const styles=StyleSheet.create({
    head:{
        fontSize:50,
        fontStyle:'oblique',
        fontWeight:'bold',
        alignSelf:'center'
    },
    text:{
        fontSize:30,
        fontStyle:'italic',
        fontWeight:'bold',
        alignSelf:'center',
        margin:15,
        textAlign:'center'
    },
    button:{
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderWidth:2,
        width:200,
        height:50,
        margin:5,
        marginTop:50
        
      }
})
export default HomeScreen;