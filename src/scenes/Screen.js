import React, { Component } from 'react';
import { View, Text, StyleSheet, Image ,TouchableOpacity,Modal} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Login from './login';

export default class Screen extends React.Component{
state={
    addVisible: false
};

toggleLoginModal(){
    this.setState({addVisible: !this.state.addVisible});
}

    render(){
        return(
            <View style={StyleSheet.container}>
                <Modal 
                    animationType="slide"
                    visible={this.state.addVisible}
                    onRequestClose={()=>this.toggleLoginModal()}>

                    <Login />        
                </Modal>
                <Image 
                    style={{width: 200,height:100,justifyContent:'center',alignSelf:'center',marginTop:70}}
                    source={require('../img/G3.png')}
                    resizeMode="contain"
                />
                <Text style={{fontSize:30,fontWeight:'bold',justifyContent:'center',alignSelf:'center'}}>Welcome Back</Text>
                <Text style={{fontSize:15,justifyContent:'center',alignSelf:'center',color:'grey',paddingHorizontal:30}}>Install and use react-navigation 2.18.2, react-navigation-tabs 1.0.0.</Text>
                
                <View style={{flexDirection:'row',margin:20,paddingVertical:20}}>
                    <TouchableOpacity 
                    style={{...styles.button,backgroundColor: '#2E71DC',}}
                    onPress={() => this.toggleLoginModal()}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Login</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button,backgroundColor: 'green',}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Registration</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:15,justifyContent:'center',alignSelf:'center',color:'grey'}}>or Via Social Media</Text>
                <View style={styles.icon}>
                    <TouchableOpacity style={styles.image}>
                        <Image 
                        style={{width: 48,height:48}}
                        source={require('../img/facebook.png')}
                        resizeMode="contain"
                    />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.image}>
                        <Image 
                        style={{width: 48,height:48}}
                        source={require('../img/google.png')}
                        resizeMode="contain"
                    />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.image}>
                        <Image 
                        style={{width: 48,height:48}}
                        source={require('../img/twitter.png')}
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
        height: 35,
        marginHorizontal: 3,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width:150
      },
      icon:{
        flexDirection:'row',
        margin:20,
        justifyContent:'center',
        alignSelf:'center',
        marginLeft:20
        
      },
      image:{
        paddingHorizontal:10,
      }
});