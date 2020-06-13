import React from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
class AuthScene extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.top}></View>
                <View style={styles.middle}>
                    <View style={styles.formArea}>
                    <Text style={styles.textContainer}>Login Here</Text>
                    <TextInput
                        placeholder = "email@gmail.com"
                        label="Email"
                        style = {styles.input}
                        />
                    <TextInput
                        placeholder = "Password"
                        label="password"
                        style = {styles.input}
                        secureTextEntry
                        />
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Bottom}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
        backgroundColor:'#344955'
    },
    top:{
        position:'relative',
        backgroundColor:'#f9Af33',
        paddingRight:12.7,
        paddingLeft:12.7,
        height:250
    },
    middle:{
        width:'100%',
        height:'100%',
        flex:1,
        position:'absolute',
        zIndex:2,
        backgroundColor:'transparent',
        paddingLeft:26.3,
        paddingRight:26.3
    },
    textContainer:{
        color:'#344955',
        fontSize:24,
        position:'relative',
        alignSelf:'center'
    },
    formArea:{
        backgroundColor: '#fff',
        width: '100%',
        height:300,
        alignSelf:'center',
        justifyContent: 'center',
        top: '20%'
    },
    input:{
        borderColor: '#f9Af33',
        borderRadius:6,
        height:50,
        marginLeft:10,
        marginRight:10,
        marginTop:8,
        paddingHorizontal:16,
        fontSize:18,
    	borderWidth: 2
    },
    submitButton:{
        position:'absolute',
        top: '75%',
        marginTop:8,
        backgroundColor:'#f9Af33',
        width:'94%',
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
      },
      submitButtonText:{
        color:'#fff',
        fontSize:24
      }
});
export default AuthScene;