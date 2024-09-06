/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage: React.FC = () => {
    const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('ProfileScreen');
  };
    const goToEducation = () => {
    navigation.navigate('EducationScreen'); // Replace 'EducationScreen' with your actual route name
  };
  const isDarkMode = useColorScheme() === 'dark';
    const [notificationCount, setNotificationCount] = useState(3); // Example notification count

  const handleNotificationClick = () => {
    // Navigate to the Notification page
    navigation.navigate('NotificationScreen');
  };
  const handleRequestStatusClick = () => {
    // Navigate to the Notification page
    navigation.navigate('RequestStatus');
  };
  const handleResultClick = () => {
    // Navigate to the Notification page
    navigation.navigate('Result');
  };
  const handleFeeClick = () => {
    // Navigate to the Notification page
    navigation.navigate('Fee');
  };
  const handleRequest = () => {
    // Navigate to the Notification page
    navigation.navigate('RequestStatus');
  };
  const handleNewRequest = () => {
    // Navigate to the Notification page
    navigation.navigate('NewRequest');
  };


  return (
    <ScrollView style={isDarkMode ? styles.containerDark : styles.container}>
      {/* navbar part */}
      <View style={isDarkMode ? styles.headerDark : styles.header}>
        <Text style={isDarkMode ? styles.headerTextDark : styles.headerText}>Dashboard</Text>
        <View style={isDarkMode ? styles.headerIconsDark : styles.headerIcons}>
         <TouchableOpacity
        style={isDarkMode ? styles.iconButtonDark : styles.iconButton}
        onPress={handleNotificationClick} // Add onPress handler
      >
        <Image
          source={require('../../assets/icons/notification.png')}
          style={isDarkMode ? styles.notificationDark : styles.notification}
        />
        {notificationCount > 0 && ( // Conditional rendering of the badge
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        )}
      </TouchableOpacity>
          <TouchableOpacity style={isDarkMode ? styles.iconButtonDark : styles.iconButton}>
            <Image source={require('../../assets/icons/menu.png')}  style={isDarkMode ? styles.notificationDark : styles.notification} />
          </TouchableOpacity>
        </View>
      </View>
{/* details and menu part */}
      <View style={isDarkMode ? styles.homestyleDark : styles.homestyle}>
        {/*  profile part*/}
        <View style={isDarkMode ? styles.mainContentDark : styles.mainContent}>
          <View style={isDarkMode ? styles.infoContainerDark : styles.infoContainer}>
            <View style={isDarkMode ? styles.textContainerDark : styles.textContainer}>
              <Text style={[styles.textItem, { fontSize: 24, color: '#000', fontWeight: 'bold' }]}>
                Hello 👋
              </Text>
              <Text style={[styles.textItem, { fontSize: 14, color: '#000', fontWeight: 'bold' }]}>
                Vidhi Shah
              </Text>
              <Text style={[styles.textItem, { fontSize: 14, color: '#6B6B6B', fontWeight: 'bold' }]}>
                vidhishah@gmail.com
              </Text>
            </View>
            <TouchableOpacity style={isDarkMode ? styles.arrowButtonDark : styles.arrowButton} onPress={goToProfile}>
        <Image  source={require('../../assets/icons/arrow.png')} style={isDarkMode ? styles.arrowDark : styles.arrow} />
      </TouchableOpacity>
          </View>
          <Text style={[isDarkMode ?  styles.textItemDark : styles.textItem, { fontSize: 14, color: '#000', fontWeight: 'bold' }]}>
            Quick Links
          </Text>
          <View style={isDarkMode ? styles.linkContainerDark : styles.linkContainer}>
  {/* Request Status Touchable */}
  <TouchableOpacity
    style={[
      isDarkMode ? styles.linkInputWrapperDark : styles.linkInputWrapper,
      { width: '40%' },
    ]}
    onPress={handleRequestStatusClick}
  >
    <Text style={isDarkMode ? styles.linkInputDark : styles.linkInput}>
      Request Status
    </Text>
  </TouchableOpacity>

  {/* Result Touchable */}
  <TouchableOpacity
    style={[
      isDarkMode ? styles.linkInputWrapperDark : styles.linkInputWrapper,
      { width: '25%' },
    ]}
    onPress={handleResultClick}
  >
    <Text style={isDarkMode ? styles.linkInputDark : styles.linkInput}>
      Result
    </Text>
  </TouchableOpacity>

  {/* Fees Touchable */}
  <TouchableOpacity
    style={[
      isDarkMode ? styles.linkInputWrapperDark : styles.linkInputWrapper,
      { width: '25%' },
    ]}
    onPress={handleFeeClick}
  >
    <Text style={isDarkMode ? styles.linkInputDark : styles.linkInput}>
      Fees
    </Text>
  </TouchableOpacity>
</View>

        </View>
{/* alert1 */}
        <View style={isDarkMode ? styles.certificateMainContainerDark : styles.certificateMainContainer}>
          <View style={isDarkMode ? styles.certificateTitleContainerDark : styles.certificateTitleContainer}>
            <Text style={isDarkMode ? styles.certificateTitleTextDark : styles.certificateTitleText}>Certificate Course in Temple Management</Text>
          </View>
          <View style={isDarkMode ? styles.certificatemessageDark : styles.certificatemessage}>
            <Text style={isDarkMode ? styles.placeholderTextDark : styles.placeholderText}>Provisionally_Eligible</Text>
            <Text style={isDarkMode ? styles.remarksTextDark : styles.remarksText}>
              Remarks: Dear student, your eligibility has been resolved provisionally, subject to submission of Original Migration Certificate to your building office. Your Eligibility would be marked Final after submission of Original Migration Certificate.
            </Text>
          </View>
        </View>
{/* alert2 */}
        <View style={isDarkMode ? styles.certificateMainContainerDark : styles.certificateMainContainer}>
          <View style={isDarkMode ? styles.certificateTitleContainerDark : styles.certificateTitleContainer}>
            <Text style={isDarkMode ? styles.certificateTitleTextDark : styles.certificateTitleText}>ACHARYA</Text>
          </View>
          <View style={isDarkMode ? styles.certificatemessageDark : styles.certificatemessage}>
            <Text style={isDarkMode ? styles.placeholderTextDark : styles.placeholderText}>Provisionally_Eligible</Text>
            <Text style={isDarkMode ? styles.remarksTextDark : styles.remarksText}>
              Remarks: Dear student, your eligibility has been resolved provisionally, subject to submission of Original Migration Certificate to your building office. Your Eligibility would be marked Final after submission of Original Migration Certificate.
            </Text>
          </View>
        </View>
{/* education details */}
        <View style={isDarkMode ? styles.educationDetailsContainerDark : styles.educationDetailsContainer}>
          <View style={isDarkMode ? styles.greetingTextContainerDark : styles.greetingTextContainer}>
            <Image source={require('../../assets/icons/book.png')} style={isDarkMode ? styles.bookIconDark : styles.bookIcon} />
            <Text style={isDarkMode ? styles.greetingTextDark : styles.greetingText}>
              Educational Details
            </Text>
          </View>
          <TouchableOpacity style={isDarkMode ? styles.expandDetailsButtonDark : styles.expandDetailsButton} onPress={goToEducation}  >
            <Image source={require('../../assets/icons/arrow.png')} style={styles.expandArrowIcon}  />
          </TouchableOpacity>
        </View>
{/* examination details */}
        <View style={isDarkMode ? styles.ExaminationContainerDark : styles.ExaminationContainer}>
          <Text style={isDarkMode ? styles.greetingTextDark : styles.greetingText}>
          Examination
          </Text>
        <View style={isDarkMode ? styles.rowContainerDark : styles.rowContainer}>
  <TouchableOpacity style={isDarkMode ? styles.coloredBoxDark : styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={isDarkMode ? styles.boxTextDark : styles.boxText}>Time Table</Text>
  </TouchableOpacity>
  <TouchableOpacity style={isDarkMode ? styles.coloredBoxDark : styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={isDarkMode ? styles.boxTextDark : styles.boxText}>ID Card</Text>
  </TouchableOpacity>
</View>

        </View>
{/* exam fee and hall tickets */}
        <View style={isDarkMode ? styles.ExaminationContainerDark : styles.ExaminationContainer}>
          <Text style={isDarkMode ? styles.greetingTextDark : styles.greetingText}>
       Exam - Fee & Hall Ticket
          </Text>
         <View style={isDarkMode ?  styles.rowContainerDark : styles.rowContainer}>
  <TouchableOpacity style={isDarkMode ? styles.coloredBoxDark : styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={isDarkMode ? styles.boxTextDark : styles.boxText}>Exam Fees</Text>
  </TouchableOpacity>
  <TouchableOpacity style={isDarkMode ? styles.coloredBoxDark : styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={isDarkMode ? styles.boxTextDark : styles.boxText}>Hall Ticket</Text>
  </TouchableOpacity>
</View>

        </View>
{/* academics details */}
        <View style={isDarkMode ? styles.ExaminationContainerDark : styles.ExaminationContainer}>
          <Text style={isDarkMode ?  styles.greetingTextDark : styles.greetingText}>
           Academics
          </Text>
         <View style={isDarkMode ? styles.rowContainerDark : styles.rowContainer}>
  <TouchableOpacity style={isDarkMode ? styles.coloredBoxDark : styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={isDarkMode ? styles.boxTextDark : styles.boxText}>ADM Fees Receipt</Text>
  </TouchableOpacity>
  <TouchableOpacity style={isDarkMode ? styles.coloredBoxDark : styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={isDarkMode ? styles.boxTextDark : styles.boxText}>Result</Text>
  </TouchableOpacity>
</View>

        </View>
{/* paper details */}
        <View style={isDarkMode ? styles.ExaminationContainerDark : styles.ExaminationContainer}>
          <Text style={isDarkMode ? styles.greetingTextDark : styles.greetingText}>
           Paper
          </Text>
          <View style={isDarkMode ? styles.rowContainerDark : styles.rowContainer}>
  <TouchableOpacity style={isDarkMode ? styles.coloredBoxDark : styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={isDarkMode ? styles.boxTextDark : styles.boxText}>Selected Paper</Text>
  </TouchableOpacity>
  <TouchableOpacity style={isDarkMode ? styles.coloredBoxDark : styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={isDarkMode ? styles.boxTextDark : styles.boxText}>Paper Selection</Text>
  </TouchableOpacity>
</View>

        </View>
{/* request details */}
        <View style={isDarkMode ? styles.ExaminationContainerDark : styles.ExaminationContainer}>
          <Text style={isDarkMode ? styles.greetingTextDark : styles.greetingText}>
           Request
          </Text>
          <View style={isDarkMode ? styles.rowContainerDark : styles.rowContainer}>
  <TouchableOpacity style={isDarkMode ? styles.coloredBoxDark : styles.coloredBox} onPress={handleRequest}>
    <Text style={isDarkMode ? styles.boxTextDark : styles.boxText}>Request Status</Text>
  </TouchableOpacity>
  <TouchableOpacity style={isDarkMode ? styles.coloredBoxDark : styles.coloredBox} onPress={handleNewRequest}>
    <Text style={isDarkMode ? styles.boxTextDark : styles.boxText}>New Request</Text>
  </TouchableOpacity>
</View>

        </View>
{/* certificate details */}
        <View style={isDarkMode ? styles.ExaminationContainerDark : styles.ExaminationContainer}>
          <Text style={isDarkMode ? styles.greetingTextDark : styles.greetingText}>
           Certificate
          </Text>
          <View style={isDarkMode ? styles.rowContainerDark : styles.rowContainer}>
  <TouchableOpacity style={isDarkMode ? styles.coloredBoxDark : styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={isDarkMode ? styles.boxTextDark : styles.boxText}>Download Certificate </Text>
  </TouchableOpacity>
  <TouchableOpacity style={isDarkMode ? styles.coloredBoxDark : styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={isDarkMode ? styles.boxTextDark : styles.boxText}>Request Certificate</Text>
  </TouchableOpacity>
</View>

        </View>
        {/* msu text */}
  <Text style={isDarkMode ? styles.logotextDark : styles.logotext} >The Maharaja Sayajirao University - Baroda</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  homestyle: {
    margin: 12,
  },
  header: {
    height: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#5287D7',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notification: {
    height: 20,
    width: 20,
  },
  iconButton: {
    marginLeft: 16,
  },
  mainContent: {
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10,
    backgroundColor: '#DCEAFF',
    borderRadius: 10,
  },
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#B9D5FF',
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    padding: 10,
    margin: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textItem: {
    fontSize: 16,
    color: '#333',
    // marginBottom: 8,
  },
  arrowButton: {
    padding: 8,
  },
  arrow: {
    width: 20, // Width of the arrow icon
    height: 20, // Height of the arrow icon
    resizeMode: 'contain', // Keep aspect ratio of the arrow
  },
  linkContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  linkInputWrapper: {
    height: 40,
    borderRadius: 29,
    justifyContent: 'center', // Center children vertically
    alignItems: 'center', // Center children horizontally
    backgroundColor: '#B9D5FF',
  },
  linkInput: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    color: '#000',
  },
  certificateMainContainer: {
    backgroundColor: '#FFC6C0',
    marginTop: 10,
    borderRadius: 10,
  },
  certificateTitleContainer: {
    backgroundColor: '#E74C3C',
    borderRadius: 10,
    height: 38,
    justifyContent: 'center',
    color: '#fff',
  },
  certificateTitleText: {
    color: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  certificatemessage: {
    paddingTop: 10,
    paddingLeft: 13,
    paddingRight: 13,
    paddingBottom: 13,
  },
  placeholderText: {
    color: '#E74C3C',
    fontWeight: 'bold',
    fontSize: 12,
  },
  remarksText: {
    color: '#000',
    fontSize: 12,
    paddingTop: 5,
  },
  educationDetailsContainer: {
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Space out items between start and end
    padding: 20, // Add padding inside the container
    backgroundColor: '#DCEAFF', // Light grey background color
    borderRadius: 8, // Rounded corners for the container
    marginTop: 10, // Vertical margin to space out from other components
  },
  greetingTextContainer: {
    flexDirection: 'row', // Align the book icon and text in a row
    alignItems: 'center', // Center them vertically
  },
  bookIcon: {
    width: 24, // Width of the book icon
    height: 24, // Height of the book icon
    marginRight: 14, // Margin to space out the icon from the text
    resizeMode: 'contain', // Keep the aspect ratio of the image
  },
  greetingText: {
    fontSize: 14, // Standard font size for the text
    color: '#000', // Black text color
    fontWeight: 'bold', // Bold font weight for emphasis
  },
  expandDetailsButton: {
    padding: 10, // Increase touchable area with padding
    alignItems: 'center', // Center arrow horizontally
    justifyContent: 'center', // Center arrow vertically
  },
  expandArrowIcon: {
    width: 20, // Width of the arrow icon
    height: 20, // Height of the arrow icon
    resizeMode: 'contain', // Keep aspect ratio of the arrow
  },
  ExaminationContainer: {
    backgroundColor: '#DCEAFF',
    marginTop: 10,
    borderRadius: 10,
    paddingBottom: 20,
    paddingTop: 13,
    paddingRight: 10,
    paddingLeft: 10,
  },
  rowContainer: {
    justifyContent: 'space-between',
    marginTop: 16,
    flexDirection: 'row',
  },
  coloredBox: {
    backgroundColor: '#B9D5FF',
    height: 53,
    width: '49%',
    borderRadius: 10,
    justifyContent: 'center',
  },
  boxText: {
    textAlign: 'center',
    color: '#000',
  },
  logotext:{
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
    paddingTop:20,
    paddingBottom:20,
  },
  // dark
  containerDark: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  homestyleDark: {
    margin: 12,
  },
  headerDark: {
    height: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#22395C',
    borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
  },
  headerTextDark: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIconsDark: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationDark: {
    height: 20,
    width: 20,
  },
  iconButtonDark: {
    marginLeft: 16,
  },
  mainContentDark: {
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10,
    backgroundColor: '#565E69',
    borderRadius: 10,
  },
  infoContainerDark: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#869BBA',
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainerDark: {
    padding: 10,
    margin: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textItemDark: {
    fontSize: 16,
    color: '#fff',
    // marginBottom: 8,
  },
  arrowButtonDark: {
    padding: 8,
  },
  arrowDark: {
    width: 20, // Width of the arrow icon
    height: 20, // Height of the arrow icon
    resizeMode: 'contain', // Keep aspect ratio of the arrow
    color:'#fff',
  },
  linkContainerDark: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  linkInputWrapperDark: {
    height: 40,
    borderRadius: 29,
    justifyContent: 'center', // Center children vertically
    alignItems: 'center', // Center children horizontally
    backgroundColor: '#869BBA',
  },
  linkInputDark: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
  },
  certificateMainContainerDark: {
    backgroundColor: '#FFC6C0',
    marginTop: 10,
    borderRadius: 10,
  },
  certificateTitleContainerDark: {
    backgroundColor: '#E74C3C',
    borderRadius: 10,
    height: 38,
    justifyContent: 'center',
    color: '#000',
  },
  certificateTitleTextDark: {
    color: '#000',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  certificatemessageDark: {
    paddingTop: 10,
    paddingLeft: 13,
    paddingRight: 13,
    paddingBottom: 13,
  },
  placeholderTextDark: {
    color: '#E74C3C',
    fontWeight: 'bold',
    fontSize: 12,
  },
  remarksTextDark: {
    color: '#fff',
    fontSize: 12,
    paddingTop: 5,
  },
  educationDetailsContainerDark: {
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Space out items between start and end
    padding: 20, // Add padding inside the container
    backgroundColor: '#565E69', // Light grey background color
    borderRadius: 8, // Rounded corners for the container
    marginTop: 10, // Vertical margin to space out from other components
  },
  greetingTextContainerDark: {
    flexDirection: 'row', // Align the book icon and text in a row
    alignItems: 'center', // Center them vertically
  },
  bookIconDark: {
    width: 24, // Width of the book icon
    height: 24, // Height of the book icon
    marginRight: 14, // Margin to space out the icon from the text
    resizeMode: 'contain', // Keep the aspect ratio of the image
  },
  greetingTextDark: {
    fontSize: 14, // Standard font size for the text
    color: '#fff', // Black text color
    fontWeight: 'bold', // Bold font weight for emphasis
  },
  expandDetailsButtonDark: {
    padding: 10, // Increase touchable area with padding
    alignItems: 'center', // Center arrow horizontally
    justifyContent: 'center', // Center arrow vertically
  },
  expandArrowIconDark: {
    width: 20, // Width of the arrow icon
    height: 20, // Height of the arrow icon
    resizeMode: 'contain', // Keep aspect ratio of the arrow
  },
  ExaminationContainerDark: {
    backgroundColor: '#565E69',
    marginTop: 10,
    borderRadius: 10,
    paddingBottom: 20,
    paddingTop: 13,
    paddingRight: 10,
    paddingLeft: 10,
  },
  rowContainerDark: {
    justifyContent: 'space-between',
    marginTop: 16,
    flexDirection: 'row',
  },
  coloredBoxDark: {
    backgroundColor: '#869BBA',
    height: 53,
    width: '49%',
    borderRadius: 10,
    justifyContent: 'center',
  },
  boxTextDark: {
    textAlign: 'center',
    color: '#fff',
  },
  logotextDark:{
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
    paddingTop:20,
    paddingBottom:20,
  },
    badge: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 2,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default HomePage;
