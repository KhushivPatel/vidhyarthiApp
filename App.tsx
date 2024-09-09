// App.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';

// Import your screens
import {WelcomeScreen, Sign_up_Screen, Login_Screen} from './Screens/index';
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
import E_receipt from './Screens/Fee/E_receipt';
import Viewresult from './Screens/Result/Viewresult';
import ResultPrint from './Screens/Result/ResultPrint';
import NewRequest from './Screens/Request/NewRequest';
import Idcard from './Screens/Examination/Idcard';
import Timetable from './Screens/Examination/Timetable';
import Exam_fee from './Screens/Exam/Exam_fee';
import Hall_ticket from './Screens/Exam/Hall_ticket';
import ADM_Fees_Receipt from './Screens/Academics/ADM_Fees_Receipt';
import Result_academics from './Screens/Academics/Result_academics';
import Paper_Selection from './Screens/Paper/Paper_Selection';
import Selected_Paper from './Screens/Paper/Selected_Paper';
import Download_Certificate from './Screens/Certificate/Download_Certificate';
import Request_Certificate from './Screens/Certificate/Request_Certificate';
import View_tt from './Screens/Examination/View_tt';
import View_id from './Screens/Examination/View_id';
import Re_assessment from './Screens/Reassessment/Re_assessment';
import Exam_fee_receipt from './Screens/Exam/Exam_fee_receipt';

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
  NotificationScreen: undefined;
  RequestStatus: undefined;
  Result: undefined;
  Fee: undefined;
  E_receipt: undefined;
  Viewresult: undefined;
  ResultPrint: undefined;
  NewRequest: undefined;
  Idcard: undefined;
  Timetable: undefined;
  Exam_fee: undefined;
  Hall_ticket: undefined;
  ADM_Fees_Receipt: undefined;
  Result_academics: undefined;
  Paper_Selection: undefined;
  Selected_Paper: undefined;
  Download_Certificate: undefined;
  Request_Certificate: undefined;
  View_tt: undefined;
  View_id: undefined;
  Re_assessment: undefined;
  Exam_fee_receipt: undefined;
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
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login_Screen"
          component={Login_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign_up_Screen"
          component={Sign_up_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EducationScreen"
          component={EducationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SscEducation"
          component={SscEducation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HscEducation"
          component={HscEducation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UgEducation"
          component={UgEducation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RequestStatus"
          component={RequestStatus}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Fee"
          component={Fee}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="E_receipt"
          component={E_receipt}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Viewresult"
          component={Viewresult}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultPrint"
          component={ResultPrint}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewRequest"
          component={NewRequest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Idcard"
          component={Idcard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="View_tt"
          component={View_tt}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Timetable"
          component={Timetable}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Exam_fee"
          component={Exam_fee}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Hall_ticket"
          component={Hall_ticket}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ADM_Fees_Receipt"
          component={ADM_Fees_Receipt}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Result_academics"
          component={Result_academics}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Paper_Selection"
          component={Paper_Selection}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Selected_Paper"
          component={Selected_Paper}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Download_Certificate"
          component={Download_Certificate}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Request_Certificate"
          component={Request_Certificate}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="View_id"
          component={View_id}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Re_assessment"
          component={Re_assessment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Exam_fee_receipt"
          component={Exam_fee_receipt}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
