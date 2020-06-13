import React from 'react';
import { View,Text,Animated,StyleSheet,Image,ActivityIndicator} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Logo from '../img/bu.png';

const swithToAuth = () =>{
    Actions.replace('auth');
};
    
class LoadingScene extends React.Component{
state = {
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
    loadingSpinner: false
};

componentDidMount(){
    const {LogoAnime, LogoText} = this.state;
    Animated.parallel([
        Animated.spring(LogoAnime, {
            toValue: 1,
            tension:10,
            friction:2,
            duration: 1000,
            useNativeDriver: false
            
        }).start(),

        Animated.timing(LogoText, {
            toValue:1,
            duration:1000,
            useNativeDriver: false
        }),
    ]).start(() => {
        this.setState({
            loadingSpinner: true
        });
        setTimeout(swithToAuth,1200);
    });
};
    render(){
        return(
            <View style={styles.container}>
                <Animated.View 
                style={{
                    opacity: this.state.LogoAnime,
                    top: this.state.LogoAnime.interpolate({
                        inputRange: [0,1],
                        outputRange: [80, 0],
                    }),
                    }}>
                <Image source={Logo}  style={styles.logo}/>
                </Animated.View>
                <Animated.View style={{opacity:this.state.LogoText}}>
                    <Text style={styles.logoText}> eBus </Text>
                    <ActivityIndicator size="large" color="#00ff00" />
                </Animated.View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#B3E5FC',
        justifyContent:'center',
        alignItems:'center'
    },
    logoText:{
        color:'#222',
        fontSize:30,
        marginTop:29.1,
        fontWeight:"200"
    },
    logo:{
        width:200,
        height:100
    }
});

export default LoadingScene;