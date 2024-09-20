import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const View_id = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Generate ID Card</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContent}>
          <View style={styles.selectcontainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Simple View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>ID Card View</Text>
            </TouchableOpacity>
          </View>
          {/* id card */}
          <View style={styles.detailcontainer}>
            <View style={styles.titleview}>
              <Image
                source={require('../../assets/images/msu_logo.png')}
                style={styles.logo}
              />
              <View style={styles.logotextcontainer}>
                <Text style={styles.logotext}>
                  The Maharaja Sayajirao University, Baroda
                </Text>
                <Text style={styles.idtext}>STUDENT ID CARD</Text>
              </View>
            </View>
            <View style={styles.idcardcontainer}>
              <Image
                source={require('../../assets/images/idcard.png')}
                style={styles.studentimg}
              />
              <View style={styles.iddetail1}>
                <View style={styles.iddetail}>
                  <Text style={styles.idtext}>NAME</Text>
                  <Text style={styles.idtextr}>
                    8022050054_Requestedfile_404.Php
                  </Text>
                </View>
                <View style={styles.iddetail}>
                  <Text style={styles.idtext}>FACULTY</Text>
                  <Text style={styles.idtextr}>
                    Deep Ashwinbhai Patel Centre For Post-Graduate
                    Studies-Faculty Of Commerce
                  </Text>
                </View>
                <View style={styles.iddetail}>
                  <Text style={styles.idtext}>BRANCH/SPEC.</Text>
                  <Text style={styles.idtextr}>
                    Accounting And Financial Management
                  </Text>
                </View>
                <View style={styles.iddetail}>
                  <Text style={styles.idtext}>PRN</Text>
                  <Text style={styles.idtextr}>8022050054</Text>
                </View>
                <View style={styles.iddetail}>
                  <Text style={styles.idtext}>CLASS</Text>
                  <Text style={styles.idtextr}>MCOM-I</Text>
                </View>
                <View style={styles.iddetail}>
                  <Text style={styles.idtext}>VALIDITY PERIOD</Text>
                  <Text style={styles.idtextr}>09-01-2023 TO</Text>
                </View>
                <View style={styles.iddetail}>
                  <Text style={styles.idtext}>DOB</Text>
                  <Text style={styles.idtextr}>23-12-2003</Text>
                </View>
                <View style={styles.iddetail}>
                  <Text style={styles.idtext}>BLOOD GROUP</Text>
                  <Text style={styles.idtextr}>-----</Text>
                </View>
                <View style={styles.iddetail}>
                  <Text style={styles.idtext}>CONTACT NO.</Text>
                  <Text style={styles.idtextr}>9999999999 / 9999999999</Text>
                </View>
                <View style={styles.iddetail}>
                  <Text style={styles.idtext}>ADDRESS</Text>
                  <Text style={styles.idtextr}>
                    Test Apprartment, Test, VADODARA
                  </Text>
                </View>
                <View style={styles.signaturecontainer}>
                  <Image
                    source={require('../../assets/images/signature.png')}
                    style={styles.signature}
                  />
                  <Text style={styles.idtext}>
                    {' '}
                    <Text style={styles.idtext}>Dean</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/*  */}
        </View>
      </ScrollView>
    </View>
  );
};

const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#1E1E1E' : '#f5f5f5',
    } as ViewStyle,
    header: {
      height: 58,
      backgroundColor: isDarkMode ? '#22395C' : '#5287D7',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    } as ViewStyle,
    headerText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    } as TextStyle,
    scrollView: {
      flexGrow: 1,
    } as ViewStyle,
    mainContent: {
      marginVertical: 10,
      marginHorizontal: 10,
    } as ViewStyle,
    selectcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    button: {
      backgroundColor: isDarkMode ? '#22395C' : '#5287D7',
      padding: 20,
      width: 185,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 20,
    },
    text: {
      color: '#fff',
      fontSize: 14,
    },
    // id
    // id
    detailcontainer: {
      margin: 10,
      borderColor: '#000',
      borderWidth: 1,
    },
    titleview: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      borderColor: '#000',
      borderBottomWidth: 1,
      padding: 10,
      justifyContent: 'space-between',
    },
    logo: {
      height: 50,
      width: 50,
    },
    logotextcontainer: {
      alignItems: 'center',
    },
    logotext: {
      color: '#000',
    },
    idcardcontainer: {
      flexDirection: 'row',
      flex: 1,
      padding: 10,
      alignItems: 'center', // Align items vertically centered
    },
    studentimg: {
      height: 97,
      width: 97,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10, // Space between image and text
    },
    iddetail1: {
      flex: 1,
      paddingLeft: 10, // Add space between image and text container
    },
    iddetail: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10, // Space between rows
    },
    idtext: {
      flex: 1,
      color: '#000',
      fontWeight: 'bold',
      fontSize: 12,
    },
    idtextr: {
      fontSize: 11,
      flex: 2,
      color: '#000',
    },
    signature: {
      height: 90,
      width: 90,
      resizeMode: 'contain',
    },
    signaturecontainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default View_id;
