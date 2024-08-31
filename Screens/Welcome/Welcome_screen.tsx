// WelcomeScreen.tsx

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the type for your navigation stack
type RootStackParamList = {
  Welcome: undefined;
  Login_Screen: undefined;
};

// Define props for the WelcomeScreen using NativeStackScreenProps
type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Login_Screen');
  };

  return (
    <View style={WelcomeStyle.mainContainer}>
      <View style={WelcomeStyle.container}>
        {/* Logo */}
        <Image
          source={require('../../assets/images/logo2.png')} // Ensure the path is correct
          style={WelcomeStyle.logo}
        />

        {/* Text elements */}
        <Text style={WelcomeStyle.text}>The</Text>
        <Text style={WelcomeStyle.title}>Maharaja Sayajirao</Text>
        <Text style={WelcomeStyle.title}>University of Baroda</Text>

        {/* Divider */}
        <View style={WelcomeStyle.divider} />

        {/* Small text */}
        <Text style={WelcomeStyle.smallText}>MSUB - Vidhyarthi</Text>

        {/* Button */}
        <TouchableOpacity style={WelcomeStyle.button} onPress={handlePress}>
          <Text style={WelcomeStyle.buttonText}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styling
const WelcomeStyle = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  container: {
    width: '100%', // Use full width
    alignItems: 'flex-start', // Center content horizontally within the container
    justifyContent: 'center', // Center content vertically within the container
    paddingLeft: 21,
    paddingRight: 21,
    paddingTop: 248,
    paddingBottom: 248,
  },
  logo: {
    width: 93, // Adjust as needed
    height: 108, // Adjust as needed
    marginBottom: 15, // Space between logo and text
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 1, // Space between "THE" and the next text
    marginLeft: 23,
    textAlign: 'center', // Center text
  },
  title: {
    fontSize: 32,
    color: '#000',
    textAlign: 'center', // Center text
    marginLeft: 23,
  },
  divider: {
    width: '80%', // Width of the divider line
    height: 2,
    backgroundColor: '#000', // Color of the divider
    marginBottom: 26, // Space between divider and small text
    marginTop: 15, // Space between divider and small text
    marginLeft: 23,
  },
  smallText: {
    fontSize: 20,
    color: '#000', // Color of small text
    textAlign: 'center', // Center small text
    marginLeft: 23,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default WelcomeScreen