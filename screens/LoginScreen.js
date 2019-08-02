import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, View, Text, Image, Keyboard, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
class LoginScreen extends Component {
    constructor(prope) {
        super(prope)
        this.state = {
            userName: '',
            passWord: ''
        }
    }

    onLogin = ()=> {
        alert(this.state.userName)
        this.props.navigation.navigate('Main')
    }

    onSignUp = ()=> {
        this.props.navigation.navigate('Regis')
    }

    render(){
        return(
            <View style={{flex: 1.5}}>
                <View style={styles.headerBox}>

                    {/* HeaderBox */}
                    <View style={{flex:1, justifyContent: "center"}}>
                        <Text style={{textAlign: "center", color: "#fff", fontSize: 35}}>OH-MYMONEY</Text>
                        <Text style={{textAlign: "center", color: "#fff", fontSize: 25}}>Login</Text>
                    </View>

                    {/* UserIcon */}
                    <View style={{alignItems: "center", zIndex: 20}}>
                        <Image style={{
                            width:60,
                            height:60, 
                            borderRadius: (60/2),
                            position: "absolute",
                            marginTop : -30,
                            }} source={require('../assets/images/user.jpg')}></Image>                        
                    </View>

                    {/* InpubBox */}
                    <View style={styles.InputBox}>
                        <TextInput
                            style={styles.InputStyle}
                            placeholder="Enter you email"
                            returnKeyType = "next"
                            onChangeText={(userName) => this.setState({userName})}
                            value={this.state.userName}
                            onSubmitEditing = {()=> this.passWordInput.focus()}
                        />
                        <TextInput
                            style={styles.InputStyle}
                            placeholder="Enter password"
                            returnKeyType="join"
                            secureTextEntry
                            onChangeText={(passWord) => this.setState({passWord})}
                            value={this.state.passWord}
                            ref={(input)=>this.passWordInput = input}
                        />

                        <View style={{flex: 1, flexDirection: "row"}}>
                            <TouchableOpacity style={styles.BottonLogin} onPress={this.onLogin}>
                                <Text style={{textAlign:"center"}}>LOGIN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.BottonSignUp} onPress={this.onSignUp}>
                                <Text style={{textAlign:"center"}}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                {/* Advertise */}
                <View style={{flex:0.5, backgroundColor: "#f3f8f9"}}>
                    <View style={{flex: 1,marginTop: 20, marginRight: 20, marginLeft: 20, backgroundColor: "#fff"}}>
                        <Text style={{fontSize: 65, color: "#888888", textAlign: "center"}}>โฆษณา</Text>
                    </View>
                    <View style={{flex: 1, padding: 10}}>
                        <Text style={{fontSize: 24, color: "#888888", textAlign: "center"}}>Income&Expense</Text>
                        <Text style={{fontSize: 13, color: "#888888", textAlign: "center"}}>เรื่องเงินปล่อยให้เราจัดการ</Text>
                    </View>
                </View>
            </View>
        )
    }
}
LoginScreen.navigationOptions = {
    header: null,
}

export default LoginScreen;

const styles = StyleSheet.create({
    headerBox: {
        flex: 1,
        backgroundColor: "#788B91",
        marginTop: Platform.OS === 'ios' ? 50: 56,
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    InputBox: {
        zIndex: 19,
        flex:1,
        paddingTop:50,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:"#E8F2F5",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      InputStyle: {
        paddingLeft:10 ,
        backgroundColor:"white",
        borderRadius: 10,
        fontSize:18,
        height:50,
        justifyContent:"center",
        marginBottom: 20
      },
      BottonLogin: {
        borderRadius: 10,
        height: 50,
        alignContent: "center",
        justifyContent: "center",
        flex: 1, 
        backgroundColor: "#cfd8dc",
        marginRight: 5,
      },
      BottonSignUp: {
        borderRadius: 10,
        height: 50,
        alignContent: "center",
        justifyContent: "center",
        flex: 1, 
        backgroundColor: "#7b8d92",
        marginLeft: 5,
      }
})