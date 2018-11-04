import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import './global'

export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
      por: ''
    };
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
  }

  async onSignupSubmit () {

    if (this.state.password != this.state.passwordConfirm) {
      alert("Passwords do not match")
      return
    }

    const command = global.url + "/api/Account/SignUp?email=" + this.state.email + "&username=" + this.state.username + "&password=" + this.state.password;
    const response = await fetch(command, {method: 'POST'});
    
    if (!response.ok) {
      alert("Server Down");
      throw Error(response.statusText);
    }
    
    const data = await response.json();

    if (data.SignUpSuccessful == true) {
      var customData = require('../testdata/account/signInRequest.json');
      global.userID = customData.userId;
      global.username = customData.username;
      /*
      var customData = data;
      global.userID = data.userId;
      global.username = data.username;
      */
      this.props.navigation.navigate('Home')

    } else { 
      alert("Username already taken");
    }
  }
    
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../images/logo.png')} />
        <View style={{flex:2}}>
        <TextInput style={styles.inputBox}
            onChangeText={(value) => this.setState({email: value})}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email"
            placeholderTextColor='rgba(255,255,255,0.75)' />
          <TextInput style={styles.inputBox}
            onChangeText={(value) => this.setState({username: value})}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Username"
            placeholderTextColor='rgba(255,255,255,0.75)' />
          <TextInput style={styles.inputBox}
            onChangeText={(value) => this.setState({password: value})}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor='rgba(255,255,255,0.75)' />
          <TextInput style={styles.inputBox}
            onChangeText={(value) => this.setState({passwordConfirm: value})}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor='rgba(255,255,255,0.75)' />
          <TextInput style={styles.inputBox}
            onChangeText={(value) => this.setState({por: value})}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="City of Residence"
            placeholderTextColor='rgba(255,255,255,0.75)' />
          <TouchableOpacity style={styles.button} onPress={this.onSignupSubmit}>
              <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text
            style={styles.signupText}
            onPress={() => this.props.navigation.navigate('Login')}>
            Back to Login
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#938C72',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#ffffff',
  },

  inputBox: {
    marginBottom: 20,
    width: 300,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    paddingHorizontal: 20,
    color: '#ffffff'
  },

  buttonText: {
    color: '#938C72',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: '#EFE8D5',
    borderRadius: 5,
    paddingVertical: 11,
    elevation: 5
  },

  logo: {
    flex:1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    margin: 10
  }
}); 