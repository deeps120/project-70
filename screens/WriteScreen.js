import React from 'react';
import { StyleSheet, Text,
         View,TextInput,TouchableOpacity,
        KeyboardAvoidingView,ToastAndroid, Alert} from 'react-native';
import * as firebase from 'firebase';
import db from '../config';

class WriteScreen extends React.Component{
    constructor(){
        super();
        this.state={
            message : ''
        }
    }
    submit=async()=>{
        var submitStory
        db.collection("story").doc.get()
        .then((doc)=>{
            console.log(doc.data())
        })
    }
    render(){
        return(
            <View>
                <Text style={styles.head}>write your own story!</Text>
                <KeyboardAvoidingView behavior='padding' enabled>
                <TextInput
                style={styles.inputBox}
                placeholder='    Title'></TextInput>

                <TextInput
                style={styles.inputBox}
                placeholder='    Author'></TextInput>

                <TextInput
                style={styles.inputBox2}
                placeholder='    write a story'
                multiline
                numberOfLines={10}></TextInput>

                <TouchableOpacity style={styles.submit}
                onPress={Alert.alert('submitted')}>
                <Text style={styles.text}>submit </Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    inputBox:{
        width:300,
        height:50,
        alignSelf:'center',
        marginTop:60
    },
    inputBox2:{
        width:300,
        height:100,
        alignSelf:'center',
        marginTop:50
    },
    head:{
        fontSize:50,
        fontStyle:'oblique',
        fontWeight:'bold',
        alignSelf:'center'
    },
    submit:{
        alignSelf:'center',
        backgroundColor:'white',
        borderWidth:2,
        width:100,
        height:35, 
    },
    text:{
        fontSize:20,
        fontStyle:'italic',
        alignSelf:'center',
        textAlign:'center'
    }
})
export default WriteScreen;
