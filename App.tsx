// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

// Import your screens
import { WelcomeScreen, Sign_up_Screen, Login_Screen } from './Screens/index';
import HomePage from './Screens/Main/Homepage';
import ProfileScreen from './Screens/Profile/ProfileScreen';
import EducationScreen from './Screens/Education/EducationScreen';
import SscEducation from './Screens/Education/SscEducation';
import HscEducation from './Screens/Education/HscEducation';
import UgEducation from './Screens/Education/UgEducation';
import NotificationScreen from './Screens/navScreens/NotificationScreen';
import Result from './Screens/Result/Result';
import Fee from './Screens/Fee/Fee';
import RequestStatus from './Screens/Request/RequestStatus';

// Enable react-native-screens to improve performance
enableScreens();

// Define the type for your stack navigator
type RootStackParamList = {
  Welcome: undefined;
  Login_Screen: undefined;
  Sign_up_Screen: undefined;
  HomePage: undefined;
  ProfileScreen: undefined;
  EducationScreen: undefined;
  SscEducation: undefined;
  HscEducation: undefined;
  UgEducation: undefined;
  NotificationScreen:undefined;
  RequestStatus:undefined;
  Result:undefined;
  Fee:undefined;
};

// Create a stack navigator with the defined type
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login_Screen"
          component={Login_Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign_up_Screen"
          component={Sign_up_Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EducationScreen"
          component={EducationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SscEducation"
          component={SscEducation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HscEducation"
          component={HscEducation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UgEducation"
          component={UgEducation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RequestStatus"
          component={RequestStatus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Fee"
          component={Fee}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
