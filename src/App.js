import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
         apiKey: 'AIzaSyAWe1PhnLgNclXkGBebmepObhfddKKDcJQ',
         authDomain: 'authentication-5ca18.firebaseapp.com',
         databaseURL: 'https://authentication-5ca18.firebaseio.com',
         projectId: 'authentication-5ca18',
         storageBucket: 'authentication-5ca18.appspot.com',
         messagingSenderId: '843206295963'
       });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
