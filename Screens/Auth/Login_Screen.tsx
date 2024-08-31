/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the type for the stack parameters
type RootStackParamList = {
  Login: undefined;
  HomePage: undefined;
};

// Define props for the screen using the navigation prop type from React Navigation
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const { width, height } = Dimensions.get('window');

const Login_Screen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Background Image covering the screen */}
      <Image
        source={require('../../assets/images/login_img.png')}
        style={styles.image}
      />

      {/* Login form container positioned above the image */}
      <View style={styles.loginContainer}>
        <Text style={styles.title}>MSUB - Vidhyarthi</Text>
        <Text style={styles.subtitle}>Log in as Applicant</Text>

        {/* Username and Password Fields */}
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />

        {/* Safety Text Boxes */}
        <View style={styles.safetyContainer}>
          <View style={[styles.safetyInputWrapper, { width: '40%', backgroundColor: '#D9D9D9' }]}>
            <TextInput placeholder="nkjdfkhdsak" style={styles.safetyInput} keyboardType="default" />
          </View>
          <View style={[styles.safetyInputWrapper, { width: '30%', borderWidth: 1 }]}>
            <TextInput placeholder="Captcha" style={styles.safetyInput} keyboardType="default" />
          </View>
          <View style={[styles.safetyInputWrapper, { width: '15%', borderWidth: 1 }]}>
            <TouchableOpacity style={styles.safetyInput}>
              <Image source={require('../../assets/icons/Refresh.png')} style={styles.refresh} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('HomePage')}  // Navigate to the Home screen
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Terms and Conditions Text */}
      <Text style={styles.universityText}>
        The Maharaja Sayajirao University Of Baroda
      </Text>
      <Text style={styles.termsText}>
        By logging in you are accepting all the terms and conditions
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover', // Adjust image scaling
    position: 'absolute', // This positions the image behind the form
    top: 0,
    left: 0,
  },
  loginContainer: {
    width: '100%',
    height: '100%',
    paddingLeft: 35,
    paddingRight: 35,
    backgroundColor: '#fff',
    borderRadius: 35,
    position: 'absolute', // This makes the form overlay the image
    top: '31%', // Adjust the form position on the screen
    paddingTop: 46,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 30,
    color: '#4E4E4E',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 27,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  safetyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  safetyInputWrapper: {
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safetyInput: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#5287D7', // Blue background color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  universityText: {
    position: 'absolute',
    bottom: 30, // Adjusted bottom position to provide space
    width: '100%',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7E7E7E',
  },
  termsText: {
    position: 'absolute',
    bottom: 10, // Adjusted to provide 5px gap from university text
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
  },
  refresh: {
    width: 30,
    height: 30,
    resizeMode: 'cover', // Adjust image scaling
    alignItems: 'center',
    marginTop: 7,
  },
});

export default Login_Screen;