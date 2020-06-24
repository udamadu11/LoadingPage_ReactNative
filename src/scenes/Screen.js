import React, { Component } from 'react';
import { View, Text, StyleSheet, Image ,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
export default class Screen extends React.Component{
   render(){
        return(
            <View style={StyleSheet.container}>
                <ImageBackground source={require('../img/screen.png')} style={styles.backgroundImage} >
                
                <Image 
                    style={{width: 200,height:100,justifyContent:'center',alignSelf:'center'}}
                    source={require('../img/G3.png')}
                    resizeMode="contain"
                />
                <Text style={{fontSize:30,fontWeight:'bold',justifyContent:'center',alignSelf:'center'}}>Login</Text>
                
                <View style={{flexDirection:'column',marginTop:0}}>
                <TextInput
                    style={{height: 40,borderColor:'#a503fc',borderWidth:2,marginTop:10,width:300}}
                    placeholder="Email"
                />
                <TextInput
                    style={{height: 40,borderColor:'#a503fc',borderWidth:2,marginTop:10,padding:10,width:300}}
                    placeholder="Password"
                />
                    <TouchableOpacity style={{...styles.button,backgroundColor: '#a503fc',marginTop:10,marginBottom:10,justifyContent:'center',alignSelf:'center',width:250}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Login</Text>
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
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:15,justifyContent:'center',alignSelf:'center',color:'grey'}}>Already onBoard ? </Text>
                    <TouchableOpacity>
                        <Text style={{fontSize:20,color:'purple'}}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                
            </ImageBackground>
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
      },
      backgroundImage: {
        resizeMode: 'contain', // or 'stretch'
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems:'center'
      }
});