import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Keyboard, Animated, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { CheckBox} from 'react-native-elements'
import { Platform } from '@unimodules/core';

class RegisterScreen extends Component {
    constructor(prope){
        super(prope)
        this.state = {
            fullName: '',
            email: '',
            phoneNumber: '',
            checkBox: false,
        }
        this.headerBoxHeight = new Animated.Value(200)
        this.headerBoxTextMargin = new Animated.Value(0)
    }

    componentDidMount() {
      this.keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        this._keyboardDidShow.bind(this),
      );
      this.keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        this._keyboardDidHide.bind(this),
      );
    }
    
    componentWillUnmount() {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
    }
    
    _keyboardDidShow(event){
      Animated.parallel([
        Animated.timing(this.headerBoxHeight, {
          duration: 500,
          toValue: 90,
        }),
        Animated.timing(this.headerBoxTextMargin, {
          duration: 500,
          toValue: Platform.OS === 'ios' ? 20 : 25
        }),
      ]).start()
    }
    
    _keyboardDidHide(event){
        Animated.parallel([
          Animated.timing(this.headerBoxHeight, {
            duration: 500,
            toValue: 200,
          }),
        ]).start();
    };

    render(){
      return(
          <View style={{flex: 1}}>
            <View>
               <Animated.View style={{backgroundColor: '#CFD8DC', height: this.headerBoxHeight, paddingTop: this.headerBoxTextMargin, justifyContent: 'center'}}>
                  <Text style={{textAlign:'center', fontSize: 20, color: 'white' }}>Income&expense</Text>
                  <Text style={{textAlign:'center', fontSize: 18, color: 'white', textDecorationLine: 'underline' }}>Registration</Text>
              </Animated.View>
              <View>
                  <TextInput
                    style={styles.InputStyle}
                    placeholder='Full name'
                    returnKeyType='next'
                    onChangeText={(fullName)=>this.setState({fullName})}
                    value={this.state.fullName}
                    onSubmitEditing={()=> this.emailInput.focus()}
                  />
                  <TextInput
                    style={styles.InputStyle}
                    placeholder='Email'
                    textContentType='emailAddress'
                    returnKeyType='next'
                    onChangeText={(email)=>this.setState({email})}
                    ref={(input)=>this.emailInput = input}
                    onSubmitEditing={()=>this.phoneNumberInput.focus()}
                    value={this.state.email}
                  />
                  <TextInput
                    style={styles.InputStyle}
                    returnKeyType='done'
                    placeholder='Phone number'
                    onChangeText={(phoneNumber)=>this.setState({phoneNumber})}
                    ref={(input)=>this.phoneNumberInput = input}
                    value={this.state.phoneNumber}
                  />

                  <Text style={{marginLeft: 20, marginTop: 30,}}>Receive password with..</Text>
                  <CheckBox
                    title={'Email '+this.state.email}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={!this.state.checkBox}
                    onPress={() => this.state.checkBox ? this.setState({checkBox: !this.state.checkBox}) : '' } 
                  />
                  <CheckBox
                    title={'Phone no '+this.state.phoneNumber}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checkBox}
                    onPress={() => !this.state.checkBox ? this.setState({checkBox: !this.state.checkBox}) : '' } 
                  />
              </View>
            </View> 

            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TouchableOpacity style={[styles.BottonSignUp,{backgroundColor: '#cfd8dc'}]}>
                <Text style={{textAlign:"center"}}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.BottonSignUp,{backgroundColor: '#7b8d92'}]} onPress={()=>this.props.navigation.goBack()}>
                <Text style={{textAlign:"center"}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
      )
    }
}

RegisterScreen.navigationOptions = {
    header: null,
}
export default RegisterScreen;

const styles = StyleSheet.create({
    InputBox: {
        flex:1,
        paddingTop:20,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:"#E8F2F5",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      InputStyle: {
        margin: 20,
        marginBottom: 0,
        borderRadius: 10,
        fontSize:18,
        height:50,
        paddingHorizontal: 10,
        backgroundColor: '#F3F3F3',
      },
      BottonSignUp: {
        borderRadius: 10,
        height: 50,
        alignContent: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        marginBottom: 20
      },
})