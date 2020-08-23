import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import db from '../config';

class ReadScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            allBooks:[],
            search: '',
        }
    }
    componentDidMount= async()=>{
        const query = await db.collection("books").get()
        query.docs.map((doc)=>{
            this.setState({
                allBooks:[...this.state.allBooks,doc.data()]
            })
        })
    }
    searchBook=async(text)=>{
        var enteredText=text.split(' ')
        var text=text.toUpperCase()
        if(enteredText[0].toUpperCase()==='B'){
            const transaction = await db.collection('story').where('title','==',text).get()
            transaction.docs.map((doc)=>{
                this.setState({
                    allBooks:[...this.state.allBooks,doc.data()],
                    
                })
            })
        }
       else if(enteredText[0].toUpperCase()==='A'){
            const transaction = await db.collection('story').where('Author','==',text).get()
            transaction.docs.map((doc)=>{
                this.setState({
                    allBooks:[...this.state.allBooks,doc.data()],
                   
                })
            })
        }   
    }
    render(){
        return(
            <View>
                  <TextInput
                style={styles.bar}
                placeholder='enter book'
                onChangeText={(text)=>{this.setState({search:text})}}
                />
            <TouchableOpacity
            style={styles.searchButton}
            onPress={()=>{this.searchBook(this.state.search)}}
            >
                <Text>search</Text>
                </TouchableOpacity>
            <FlatList 
            data={this.state.allBooks}
            renderItem={({item})=>(
                <View style={{borderBottomWidth:2}}>
                    <Text>{'book :'+item.title}</Text>
                    <Text>{'date'+item.date.toDate()}</Text>
                </View>
            )}
            keyExtractor={(item,index)=>index.toString()}
            onEndReachedThreshold={0.7}
            ></FlatList>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    bar:{
        width:300,
        height:50,
        alignSelf:'center',
        marginTop:60
    },
    
})
export default ReadScreen;
