import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage: React.FC = () => {
    const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('ProfileScreen');
  };
    const goToEducation = () => {
    navigation.navigate('EducationScreen'); // Replace 'EducationScreen' with your actual route name
  };


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../../assets/icons/notification.png')}
              style={styles.notification}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../../assets/icons/menu.png')}  style={styles.notification} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.homestyle}>
        <View style={styles.mainContent}>
          <View style={styles.infoContainer}>
            <View style={styles.textContainer}>
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
            <TouchableOpacity style={styles.arrowButton} onPress={goToProfile}>
        <Image  source={require('../../assets/icons/arrow.png')} style={styles.arrow} />
      </TouchableOpacity>
          </View>
          <Text style={[styles.textItem, { fontSize: 14, color: '#000', fontWeight: 'bold' }]}>
            Quick Links
          </Text>
          <View style={styles.linkContainer}>
            <View style={[styles.linkInputWrapper, { width: '40%' }]}>
              <Text style={styles.linkInput}>Request Status</Text>
            </View>
            <View style={[styles.linkInputWrapper, { width: '25%' }]}>
              <Text style={styles.linkInput}>Result</Text>
            </View>
            <View style={[styles.linkInputWrapper, { width: '25%' }]}>
              <Text style={styles.linkInput}>Fees</Text>
            </View>
          </View>
        </View>

        <View style={styles.certificateMainContainer}>
          <View style={styles.certificateTitleContainer}>
            <Text style={styles.certificateTitleText}>Certificate Course in Temple Management</Text>
          </View>
          <View style={styles.certificatemessage}>
            <Text style={styles.placeholderText}>Provisionally_Eligible</Text>
            <Text style={styles.remarksText}>
              Remarks: Dear student, your eligibility has been resolved provisionally, subject to submission of Original Migration Certificate to your building office. Your Eligibility would be marked Final after submission of Original Migration Certificate.
            </Text>
          </View>
        </View>

        <View style={styles.certificateMainContainer}>
          <View style={styles.certificateTitleContainer}>
            <Text style={styles.certificateTitleText}>ACHARYA</Text>
          </View>
          <View style={styles.certificatemessage}>
            <Text style={styles.placeholderText}>Provisionally_Eligible</Text>
            <Text style={styles.remarksText}>
              Remarks: Dear student, your eligibility has been resolved provisionally, subject to submission of Original Migration Certificate to your building office. Your Eligibility would be marked Final after submission of Original Migration Certificate.
            </Text>
          </View>
        </View>

        <View style={styles.educationDetailsContainer}>
          <View style={styles.greetingTextContainer}>
            <Image source={require('../../assets/icons/book.png')} style={styles.bookIcon} />
            <Text style={styles.greetingText}>
              Educational Details
            </Text>
          </View>
          <TouchableOpacity style={styles.expandDetailsButton} onPress={goToEducation}  >
            <Image source={require('../../assets/icons/arrow.png')} style={styles.expandArrowIcon}  />
          </TouchableOpacity>
        </View>

        <View style={styles.ExaminationContainer}>
          <Text style={styles.greetingText}>
          Examination
          </Text>
        <View style={styles.rowContainer}>
  <TouchableOpacity style={styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={styles.boxText}>Time Table</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={styles.boxText}>ID Card</Text>
  </TouchableOpacity>
</View>

        </View>

        <View style={styles.ExaminationContainer}>
          <Text style={styles.greetingText}>
       Exam - Fee & Hall Ticket
          </Text>
         <View style={styles.rowContainer}>
  <TouchableOpacity style={styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={styles.boxText}>Exam Fees</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={styles.boxText}>Hall Ticket</Text>
  </TouchableOpacity>
</View>

        </View>

        <View style={styles.ExaminationContainer}>
          <Text style={styles.greetingText}>
           Academics
          </Text>
         <View style={styles.rowContainer}>
  <TouchableOpacity style={styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={styles.boxText}>ADM Fees Receipt</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={styles.boxText}>Result</Text>
  </TouchableOpacity>
</View>

        </View>

        <View style={styles.ExaminationContainer}>
          <Text style={styles.greetingText}>
           Paper
          </Text>
          <View style={styles.rowContainer}>
  <TouchableOpacity style={styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={styles.boxText}>Selected Paper</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={styles.boxText}>Paper Selection</Text>
  </TouchableOpacity>
</View>

        </View>

        <View style={styles.ExaminationContainer}>
          <Text style={styles.greetingText}>
           Request
          </Text>
          <View style={styles.rowContainer}>
  <TouchableOpacity style={styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={styles.boxText}>Request Status</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={styles.boxText}>New Request</Text>
  </TouchableOpacity>
</View>

        </View>

        <View style={styles.ExaminationContainer}>
          <Text style={styles.greetingText}>
           Certificate
          </Text>
          <View style={styles.rowContainer}>
  <TouchableOpacity style={styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={styles.boxText}>Download Certificate </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.coloredBox} onPress={() => { /* Handle press */ }}>
    <Text style={styles.boxText}>Request Certificate</Text>
  </TouchableOpacity>
</View>

        </View>
<Text style={styles.logotext} >The Maharaja Sayajirao University - Baroda</Text>
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
});

export default HomePage;