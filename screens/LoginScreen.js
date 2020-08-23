import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
        }
    }
    
    login=async(email,password)=>{
        if(email && password){
            try{
                const response=await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
                    this.props.navigation.navigate('HomeScreen')
                }
            }
            catch(error){
                switch (error.code) {
                  case 'auth/user-not-found':
                    Alert.alert("user dosen't exists")
                    console.log("doesn't exist")
                    break
                  case 'auth/invalid-email':
                    Alert.alert('enter correct password/email')
                    console.log('invaild')
                    break
                }
              }
            }
            else{
                Alert.alert(' please enter email and password');
            }
          }
        
    render(){
        return(
            <KeyboardAvoidingView>
            <View>
                 <Text style={{textAlign:'center',fontSize:30}}>StoryHub</Text>
                 <TextInput
            style={styles.loginBox}
            placeholder='abc@example.com'
            keyboardType='email-address'
            onChangeText={(text)=>{
                this.setState({
                    emailId:text
                })
            }}
            >

            </TextInput>
            <TextInput
            style={styles.loginBox}
            placeholder='enter password'
            secureTextEntry={true}
            onChangeText={(text)=>{
                this.setState({
                    password:text
                })
            }}
            >

            </TextInput>
            <TouchableOpacity
            style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:22
           , alignSelf:'center' }}
            onPress={()=>{
                this.login(this.state.emailId,this.state.password)
            }}
            >
            <Text style={{textAlign:'center'}}>login</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        
        )
    }
}
const styles=StyleSheet.create({
    loginBox:{
        width:300,
        heiht:40,
        borderWidth:2,
        fontSize:20,
        margin:10,
        paddingLeft:10,
        alignSelf:'center'
    }
})
