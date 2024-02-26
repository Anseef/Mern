import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);

  const handleRegister = async () => {
    setError(''); // Clear previous errors
    if (!username) {
      setError('Please enter a username.');
      return;
    }
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!password) {
      setError('Please enter a password.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const userData = {
      name:username,
      email,
      password
    }
    if(error === ''){

      axios.post("http://192.168.141.188:8888/register", userData)
      .then(res => {
        console.log(res.data);
        if(res.data.status === 'ok'){
          navigation.navigate("Login")
        }
      })
      .catch(e => {
        console.log(e);
      })

    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TextInput
        ref={nameInputRef}
        style={styles.input}
        placeholder="Name"
        autoCapitalize="none"
        onChangeText={(text) => setUsername(text)}
        onSubmitEditing={() => passwordInputRef.current.focus()}
      />
      <TextInput
        ref={emailInputRef}
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        onSubmitEditing={() => passwordInputRef.current.focus()}
      />
      <TextInput
        ref={passwordInputRef}
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        onSubmitEditing={() => confirmPasswordInputRef.current.focus()}
      />
      <TextInput
        ref={confirmPasswordInputRef}
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <View style={{flexDirection: 'row',gap: 10}}>
        <Pressable style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0099cc',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default RegisterScreen;
