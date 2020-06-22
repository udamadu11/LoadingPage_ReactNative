import React, { Component } from 'react';
import { View, Text, StyleSheet, Image ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Screen extends React.Component{
    render(){
        return(
            <View style={StyleSheet.container}>
                <Image 
                    style={{width: 200,height:100,justifyContent:'center',alignSelf:'center',marginTop:70}}
                    source={require('../img/G3.png')}
                    resizeMode="contain"
                />
                <Text style={{fontSize:30,fontWeight:'bold',justifyContent:'center',alignSelf:'center'}}>Wel Come Back</Text>
                <Text style={{fontSize:15,justifyContent:'center',alignSelf:'center',color:'grey'}}>For each platform (iOS/Android/Windows) you plan to use, follow one of the options for the corresponding platform.</Text>
                
                <View style={{flexDirection:'row',margin:20,paddingVertical:20}}>
                    <TouchableOpacity style={{...styles.button,backgroundColor: '#2E71DC',}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button,backgroundColor: 'grey',}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Registration</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:15,justifyContent:'center',alignSelf:'center',color:'grey'}}>or Via Social Media</Text>
                <View style={{flexDirection:'row',margin:20,paddingVertical:20}}>
                    <TouchableOpacity>
                    <Image 
                    style={{width: 20,height:20,borderRadius:50,justifyContent:'center',alignSelf:'center'}}
                    source={require('../img/G3.png')}
                    resizeMode="contain"
                />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      button: {
        backgroundColor: 'white',
        height: 40,
        marginHorizontal: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width:150
      }
});